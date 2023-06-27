package com.flornago.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.flornago.DataTransferObject.LoginDTO;
import com.flornago.DataTransferObject.SignupProfessionalDTO;
import com.flornago.DataTransferObject.SignupUserDTO;
import com.flornago.Exceptions.ConflictException;
import com.flornago.Exceptions.UnauthorizedException;
import com.flornago.Models.UserModel;
import com.flornago.Repository.UserRepository;
import com.flornago.ViewObject.UserVO;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    public void verifyExistingAccount(String email) {
        Optional<UserModel> existingUser = userRepository.findByEmail(email);

        if (existingUser.isPresent()) {
            throw new ConflictException("Já existe um usuário com esse email cadastrado.");
        }
    }

    public String encryptPassword(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }

    public UserVO authenticateUser(LoginDTO loginInput) {
        Optional<UserModel> existingUser = userRepository.findByEmail(loginInput.getEmail());

        if (!existingUser.isPresent()) {
            throw new UnauthorizedException("Não existe um usuário com esse email cadastrado.");
        }

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        if (!passwordEncoder.matches(loginInput.getPassword(), existingUser.get().getPassword())) {
            throw new UnauthorizedException("Senha incorreta.");
        }

        return userService.userModelToUserVO(existingUser.get());
    }

    public void createUser(SignupUserDTO signupDTO) {
        verifyExistingAccount(signupDTO.getEmail());
        signupDTO.setPassword(encryptPassword(signupDTO.getPassword()));
        userRepository.save(userService.signupUserToDTO(signupDTO));
    }

    public void createProfessional(SignupProfessionalDTO signupDTO) {
        verifyExistingAccount(signupDTO.getEmail());
        signupDTO.setPassword(encryptPassword(signupDTO.getPassword()));
        userRepository.save(userService.signupProfessionalToDTO(signupDTO));
    }
}
