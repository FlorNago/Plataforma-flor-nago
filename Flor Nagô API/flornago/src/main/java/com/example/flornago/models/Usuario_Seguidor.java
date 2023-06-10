package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "usuario_seguidor") //Da o nome a uma tabela
public class Usuario_Seguidor {
    private int id_usuarioSeguidor;
    private int id_usuario;
    private String dt_follow;

    public int getId_usuarioSeguidor() {
        return id_usuarioSeguidor;
    }

    public void setId_usuarioSeguidor(int id_usuarioSeguidor) {
        this.id_usuarioSeguidor = id_usuarioSeguidor;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getDt_follow() {
        return dt_follow;
    }

    public void setDt_follow(String dt_follow) {
        this.dt_follow = dt_follow;
    }
}
