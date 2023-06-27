package com.flornago.Models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "user")
public class UserModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(unique = true)
    private String username;
    
    private String image_url;
    private String email;
    private String password;
    private Date birth_date;

    @Column(columnDefinition = "LONGTEXT")
    @Lob
    private String biography;

    private String cpf;
    private String instagram;
    private String phone_number;
    private List<Integer> segments;

    private Boolean professional = false;

    @ManyToMany
    @JoinTable(
        name = "user_relationship",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "follower_id")
    )
    private List<UserModel> followers;

    @ManyToMany(mappedBy = "followers")
    private List<UserModel> following;

    public void follow(UserModel userToFollow) {
        if (userToFollow == null) {
            return;
        }
        if (this.following.contains(userToFollow)) {
            return;
        }
        if (this.equals(userToFollow))  {
            return;
        }

        this.following.add(userToFollow);
        userToFollow.getFollowers().add(this);
    }

    public void unfollow(UserModel userToUnfollow) {
        if (userToUnfollow == null) {
            return;
        }
        if (!this.following.contains(userToUnfollow)) {
            return;
        }
        if (this.equals(userToUnfollow))  {
            return;
        }

        this.following.remove(userToUnfollow);
        userToUnfollow.getFollowers().remove(this);
    }
}
