package com.flornago.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.flornago.Services.UserService;

@RestController
@RequestMapping("/relationship")
public class RelationshipController {

    @Autowired
    private UserService userService;
    
    @PostMapping("/follow/{user_following_id}/{user_id}")
    @ResponseStatus(HttpStatus.OK)
    public void follow_user(@PathVariable Long user_following_id, @PathVariable Long user_id) {
        userService.followUser(user_following_id, user_id);
    }

    @DeleteMapping("/unfollow/{user_unfollowing_id}/{user_id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unfollow_user(@PathVariable Long user_unfollowing_id, @PathVariable Long user_id) {
        userService.unfollowUser(user_unfollowing_id, user_id);
    }
    
}