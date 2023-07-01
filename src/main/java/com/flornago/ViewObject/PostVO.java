package com.flornago.ViewObject;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostVO {
    
    private Long post_id;
    private UserVO post_owner;
    private LocalDateTime created_at;
    private String title;
    private String description;
    private String image_url;
    private List<CommentVO> comments;
    private List<UserVO> likes;
}
