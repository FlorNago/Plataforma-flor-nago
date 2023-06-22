package com.flornago.plataforma.Model;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class UserModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long user_id;

    @Column
    private String email;

    @Column
    private String senha;

    @Column
    private LocalDate data_nascimento;

    @Column
    private Boolean profissinal;

    @Column
    private String cpf;

    @Column
    private String isntagram;

    @Column
    private String celular;

    @ElementCollection
    private List<String> segmentos;

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public LocalDate getData_nascimento() {
        return data_nascimento;
    }

    public void setData_nascimento(LocalDate data_nascimento) {
        this.data_nascimento = data_nascimento;
    }

    public Boolean getProfissinal() {
        return profissinal;
    }

    public void setProfissinal(Boolean profissinal) {
        this.profissinal = profissinal;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getIsntagram() {
        return isntagram;
    }

    public void setIsntagram(String isntagram) {
        this.isntagram = isntagram;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public List<String> getSegmentos() {
        return segmentos;
    }

    public void setSegmentos(List<String> segmentos) {
        this.segmentos = segmentos;
    }
}
