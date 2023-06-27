package com.flornago.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.flornago.DataTransferObject.LoginDTO;
import com.flornago.DataTransferObject.SignupProfessionalDTO;
import com.flornago.DataTransferObject.SignupUserDTO;
import com.flornago.Services.AuthenticationService;
import com.flornago.ViewObject.UserVO;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/signup/user")
    @ResponseStatus(HttpStatus.CREATED)
    public void signupUser(@RequestBody SignupUserDTO signupDTO) {
        authenticationService.createUser(signupDTO);
    }

    @PostMapping("/signup/professional")
    @ResponseStatus(HttpStatus.CREATED)
    public void signupProfessional(@RequestBody SignupProfessionalDTO signupDTO) {
        authenticationService.createProfessional(signupDTO);
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public UserVO login(@RequestBody LoginDTO loginDTO) {
        return authenticationService.authenticateUser(loginDTO);
    }
}
