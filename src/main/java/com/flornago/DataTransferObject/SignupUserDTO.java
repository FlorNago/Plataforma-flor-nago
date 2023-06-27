package com.flornago.DataTransferObject;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupUserDTO {
    
    private String email;
    private String password;
    private Date birth_date;
}
