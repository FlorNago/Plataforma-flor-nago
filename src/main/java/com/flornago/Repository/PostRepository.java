package com.flornago.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flornago.Models.PostModel;

@Repository
public interface PostRepository extends JpaRepository<PostModel, Long> {
    
}
