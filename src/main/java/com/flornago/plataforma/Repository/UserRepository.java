package com.flornago.plataforma.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flornago.plataforma.Model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    
    UserModel findByEmail(String email);
}
