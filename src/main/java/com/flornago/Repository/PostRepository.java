package com.flornago.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.flornago.Models.PostModel;
import com.flornago.Models.UserModel;

@Repository
public interface PostRepository extends JpaRepository<PostModel, Long> {
    @Query("SELECT p FROM PostModel p WHERE p.post_owner = :post_owner")
    Optional<List<PostModel>> findByPost_owner(@Param("post_owner") UserModel post_owner);
}
