package com.flornago.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.flornago.DataTransferObject.CommentDTO;
import com.flornago.Services.CommentService;

@RestController
@RequestMapping("/comment")
public class CommentController {
    
    @Autowired
    private CommentService commentService;

    @PostMapping("/{post_id}/{user_id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void postCommentary(@PathVariable Long post_id, @PathVariable Long user_id, @RequestBody CommentDTO commentDTO) {
        commentService.createCommentary(post_id, user_id, commentDTO);
    }
}
