package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "mensagem") //Da nome a uma tabela
public class Mensagem {
    private int id_mensagem;
    private String ds_mensagem;
    private String dt_mensagem;
    private int id_UsuarioMensagem;
    private int id_UsuarioSeguidorMensagem;

    public int getId_mensagem() {
        return id_mensagem;
    }

    public void setId_mensagem(int id_mensagem) {
        this.id_mensagem = id_mensagem;
    }

    public String getDs_mensagem() {
        return ds_mensagem;
    }

    public void setDs_mensagem(String ds_mensagem) {
        this.ds_mensagem = ds_mensagem;
    }

    public String getDt_mensagem() {
        return dt_mensagem;
    }

    public void setDt_mensagem(String dt_mensagem) {
        this.dt_mensagem = dt_mensagem;
    }

    public int getId_UsuarioMensagem() {
        return id_UsuarioMensagem;
    }

    public void setId_UsuarioMensagem(int id_UsuarioMensagem) {
        this.id_UsuarioMensagem = id_UsuarioMensagem;
    }

    public int getId_UsuarioSeguidorMensagem() {
        return id_UsuarioSeguidorMensagem;
    }

    public void setId_UsuarioSeguidorMensagem(int id_UsuarioSeguidorMensagem) {
        this.id_UsuarioSeguidorMensagem = id_UsuarioSeguidorMensagem;
    }
}