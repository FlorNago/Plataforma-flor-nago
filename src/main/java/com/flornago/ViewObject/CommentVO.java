package com.flornago.ViewObject;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CommentVO {
    
    private Long comment_id;
    private UserVO comment_owner;
    private String text;
    private LocalDateTime created_at;
    
}
