package com.flornago.Services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flornago.DataTransferObject.CommentDTO;
import com.flornago.Models.CommentModel;
import com.flornago.Models.PostModel;
import com.flornago.Models.UserModel;

@Service
public class CommentService {

    @Autowired
    private UserService userService;

    @Autowired
    private PostService postService;

    public void createCommentary(Long post_id, Long user_id, CommentDTO commentDTO) {
        PostModel existingPost = postService.findPostById(post_id);
        UserModel existingUser = userService.findUserById(user_id);

        CommentModel newCommentary = new CommentModel();
        BeanUtils.copyProperties(commentDTO, newCommentary);
        newCommentary.setComment_owner(existingUser);

        postService.addComentaryToPost(newCommentary, existingPost);
    }
}
