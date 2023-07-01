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

    private List<UserVO> followers;
    private List<UserVO> following; 
    
    public String getUsername() {
        if (username == null) {
            return "Usuário não informado";
        }
        return username;
    }

    public String getInstagram() {
        if (instagram == null) {
            return "Instagram não informado";
        }

        return instagram;
    }
}
