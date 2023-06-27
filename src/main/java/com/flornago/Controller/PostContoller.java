package com.flornago.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.flornago.Services.PostService;
import com.flornago.ViewObject.PostVO;

@RestController
@RequestMapping("/post")
public class PostContoller {

    @Autowired
    private PostService postService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PostVO> getAllPosts() {
        return postService.getAllPost();
    }
    
    @PostMapping("/create/{user_id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void createPost(@PathVariable Long user_id, @RequestParam("image") MultipartFile image, @RequestParam("content") String content) {
        postService.createPost(user_id, content, image);
    }

    @PutMapping("/action/{post_id}/{user_id}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean actionPost(@PathVariable Long post_id, @PathVariable Long user_id) {
        return postService.actionPost(post_id, user_id);
    }
}
