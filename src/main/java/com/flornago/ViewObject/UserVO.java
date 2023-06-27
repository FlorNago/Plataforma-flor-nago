package com.flornago.ViewObject;

import java.util.Date;
import java.util.List;

import com.flornago.Data.SegmentData;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserVO {
    
    private Long user_id;
    private String image_url;
    private String username;
    private String email;
    private Date birth_date;
    private String biography;
    private String instagram;
    private String phone_number;
    private List<SegmentData> segments;
    private Boolean professional;
    
}
