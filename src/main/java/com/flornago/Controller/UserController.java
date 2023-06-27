package com.flornago.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.flornago.DataTransferObject.EditUserDTO;
import com.flornago.Services.UserService;
import com.flornago.ViewObject.UserVO;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/information/{user_id}")
    @ResponseStatus(HttpStatus.OK)
    public UserVO getUserInformation(@PathVariable Long user_id) {
        return userService.getUserInformation(user_id);
    }

    @PutMapping("/update/{user_id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateUser(@PathVariable Long user_id, @RequestBody EditUserDTO editUserDTO) {
        userService.editUser(user_id, editUserDTO);
    }

    @PutMapping("/update/image/{user_id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateUserImage(@PathVariable Long user_id, @RequestParam("image") MultipartFile image) {
        userService.editUserImage(user_id, image);
    }

    @DeleteMapping("/delete/image/{user_id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserImage(@PathVariable Long user_id) {
        userService.deleteUserImage(user_id);
    }
}
