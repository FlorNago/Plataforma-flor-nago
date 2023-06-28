package com.flornago.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.flornago.DataTransferObject.NewPostDTO;
import com.flornago.Exceptions.InternalServerError;
import com.flornago.Exceptions.NotFoundException;
import com.flornago.Exceptions.UnauthorizedException;
import com.flornago.Models.CommentModel;
import com.flornago.Models.PostModel;
import com.flornago.Models.UserModel;
import com.flornago.Repository.PostRepository;
import com.flornago.ViewObject.CommentVO;
import com.flornago.ViewObject.PostVO;

@Service
public class PostService {

    @Autowired
    private UserService userService;

    @Autowired
    private CloudinaryService cloudinaryService;

    @Autowired
    private PostRepository postRepository;

    public CommentVO convertCommentModelToVO(CommentModel commentModel) {
        CommentVO commentVO = new CommentVO();
        BeanUtils.copyProperties(commentModel, commentVO);
        commentVO.setComment_owner(userService.userModelToUserVO(commentModel.getComment_owner()));

        return commentVO;
    }

    public PostVO convertPostModelToVO(PostModel postModel) {
        PostVO postVO = new PostVO();
        BeanUtils.copyProperties(postModel, postVO);
        postVO.setLikes(postModel.getLikes().size());

        List<CommentModel> commentModels = postModel.getComments();
        List<CommentVO> commentVOs = new ArrayList<>();

        for (CommentModel commentModel : commentModels) {
            CommentVO commentVO = convertCommentModelToVO(commentModel);
            commentVOs.add(commentVO);
        }

        postVO.setComments(commentVOs);
        postVO.setPost_owner(userService.userModelToUserVO(postModel.getPost_owner()));

        return postVO;
    }

    public PostModel findPostById(Long post_id) {
        Optional<PostModel> postModel = postRepository.findById(post_id);

        if (!postModel.isPresent()) {
            throw new NotFoundException("Post não encontrado.");
        }

        return postModel.get();
    }

    public NewPostDTO stringToNewPostDTO(String content) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            NewPostDTO newPostDTO = objectMapper.readValue(content, NewPostDTO.class);

            return newPostDTO;
        } catch (Exception e) {
            throw new InternalServerError("Erro ao criar post");
        }
    }

    public void createPost(Long user_id, String content, MultipartFile image) {
        UserModel userModel = userService.findUserById(user_id);

        if (userModel.getProfessional() == null || !userModel.getProfessional()) {
            throw new UnauthorizedException("Você não tem permissão para criar um post.");
        }

        NewPostDTO newPostDTO = stringToNewPostDTO(content);
        String image_url = cloudinaryService.uploadImage(image);

        PostModel creatingPost = new PostModel();
        BeanUtils.copyProperties(newPostDTO, creatingPost);
        creatingPost.setImage_url(image_url);
        creatingPost.setPost_owner(userModel);

        postRepository.save(creatingPost);
    }

    public Boolean actionPost(Long post_id, Long user_id) {
        Boolean likeState = false;
        PostModel postModel = findPostById(post_id);
        UserModel userModel = userService.findUserById(user_id);

        if (postModel.getLikes().contains(userModel)) {
            postModel.getLikes().remove(userModel);
        } else {
            postModel.getLikes().add(userModel);
            likeState = true;
        }

        postRepository.save(postModel);
        return likeState;
    }

    public List<PostVO> getAllPost() {
        List<PostModel> postModels = postRepository.findAll();
        List<PostVO> postVOs = new ArrayList<>();

        for (PostModel postModel : postModels) {
            PostVO postVO = convertPostModelToVO(postModel);
            postVOs.add(postVO);
        }

        return postVOs;
    }

    public void addComentaryToPost(CommentModel commentToAdd, PostModel postBeingCommented) {
        postBeingCommented.getComments().add(commentToAdd);
        postRepository.save(postBeingCommented);
    }

}
