package com.flornago.Models;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "post")
public class PostModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long post_id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private UserModel post_owner;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime created_at;

    private String title;

    @Column(columnDefinition = "LONGTEXT")
    @Lob
    private String description;

    private String image_url;

    @OneToMany(cascade = CascadeType.ALL)
    private List<CommentModel> comments;

    @ManyToMany
    @JoinTable(name = "post_likes", joinColumns = @JoinColumn(name = "post_id"), inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<UserModel> likes;

    public void addLike(UserModel user) {
        if (likes.contains(user)) {
            return;
        }

        likes.add(user);
    }

    public void removeLike(UserModel user) {
        if (!likes.contains(user)) {
            return;
        }

        likes.remove(user);
    }

    @PrePersist
    protected void onCreate() {
        this.created_at = LocalDateTime.now();
    }
}
