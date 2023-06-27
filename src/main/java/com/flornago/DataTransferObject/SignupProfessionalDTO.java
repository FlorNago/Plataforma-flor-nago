package com.flornago.DataTransferObject;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupProfessionalDTO {
    
    private String email;
    private String password;
    private Date birth_date;
    private String cpf;
    private String instagram;
    private String phone_number;
    private List<Integer> segments;
}
