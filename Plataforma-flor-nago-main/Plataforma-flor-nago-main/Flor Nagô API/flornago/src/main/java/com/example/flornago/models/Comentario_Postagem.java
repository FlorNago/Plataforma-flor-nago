package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "comentario_postagem") //Da nome a uma tabela
public class Comentario_Postagem {
    private int id_UsuarioPostagem;
    private int id_UsuarioSeguidor;
    private String ds_comentario;
    private String dt_comentario;

    public int getId_UsuarioPostagem() {
        return id_UsuarioPostagem;
    }

    public void setId_UsuarioPostagem(int id_UsuarioPostagem) {
        this.id_UsuarioPostagem = id_UsuarioPostagem;
    }

    public int getId_UsuarioSeguidor() {
        return id_UsuarioSeguidor;
    }

    public void setId_UsuarioSeguidor(int id_UsuarioSeguidor) {
        this.id_UsuarioSeguidor = id_UsuarioSeguidor;
    }

    public String getDs_comentario() {
        return ds_comentario;
    }

    public void setDs_comentario(String ds_comentario) {
        this.ds_comentario = ds_comentario;
    }

    public String getDt_comentario() {
        return dt_comentario;
    }

    public void setDt_comentario(String dt_comentario) {
        this.dt_comentario = dt_comentario;
    }
}
