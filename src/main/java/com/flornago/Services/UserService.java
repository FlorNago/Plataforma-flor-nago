package com.flornago.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.flornago.Data.SegmentData;
import com.flornago.DataTransferObject.EditUserDTO;
import com.flornago.DataTransferObject.SignupProfessionalDTO;
import com.flornago.DataTransferObject.SignupUserDTO;
import com.flornago.Exceptions.NotFoundException;
import com.flornago.Models.UserModel;
import com.flornago.Repository.UserRepository;
import com.flornago.ViewObject.UserVO;

@Service
public class UserService {

    @Autowired
    private SegmentsService segmentsService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public UserModel findUserByEmail(String email) {
        Optional<UserModel> user = userRepository.findByEmail(email);
        if (!user.isPresent()) {
            throw new NotFoundException("Usuário não encontrado.");
        }

        return user.get();
    }

    public UserModel findUserById(Long userId) {
        Optional<UserModel> user = userRepository.findById(userId);
        if (!user.isPresent()) {
            throw new NotFoundException("Usuário não encontrado.");
        }

        return user.get();
    }

    public void editUser(Long userId, EditUserDTO editUserDTO) {
        UserModel userModel = findUserById(userId);

        if (editUserDTO.getUsername() != null && userModel.getUsername() == null) {
            userModel.setUsername(editUserDTO.getUsername());
        }
        if (editUserDTO.getBiography() != null) {
            userModel.setBiography(editUserDTO.getBiography());
        }

        userRepository.save(userModel);
    }

    public void editUserImage(Long userId, MultipartFile image) {
        UserModel userModel = findUserById(userId);

        if (userModel.getImage_url() != null) {
            cloudinaryService.removeImage(userModel.getImage_url());
        }
        String image_url = cloudinaryService.uploadImage(image);
        userModel.setImage_url(image_url);

        userRepository.save(userModel);
    }

    public void deleteUserImage(Long userId) {
        UserModel userModel = findUserById(userId);
        cloudinaryService.removeImage(userModel.getImage_url());
        userModel.setImage_url(null);
        userRepository.save(userModel);
    }

    public UserVO getUserInformation(Long userId)  {
        UserModel userModel = findUserById(userId);
        return userModelToUserVO(userModel);
    }

    public UserModel signupUserToDTO(SignupUserDTO signupDTO) {
        UserModel userModel = new UserModel();
        BeanUtils.copyProperties(signupDTO, userModel);
        return userModel;
    }

    public UserModel signupProfessionalToDTO(SignupProfessionalDTO signupDTO) {
        UserModel userModel = new UserModel();
        BeanUtils.copyProperties(signupDTO, userModel);
        userModel.setProfessional(true);
        return userModel;
    }

    public UserVO userModelToUserVO(UserModel userModel) {
        UserVO userVO = new UserVO();
        BeanUtils.copyProperties(userModel, userVO);

        List<Integer> segmentIds = userModel.getSegments();

        if (segmentIds != null && !segmentIds.isEmpty()) {
            List<SegmentData> segments = new ArrayList<>();
            for (Integer segmentId : segmentIds) {
                SegmentData segmentData = segmentsService.getSegmentById(segmentId);
                segments.add(segmentData);
            }
            userVO.setSegments(segments);
        }

        return userVO;
    }

}
