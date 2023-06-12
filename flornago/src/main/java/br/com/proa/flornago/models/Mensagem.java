package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Mensagem")
public class Mensagem {
    @Id
    @Column(name="id_mensagem")
    private Integer id_mensagem;
    @Column(name="ds_mensagem")
    private String ds_mensagem;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="dt_mensagem")
    private Date dt_mensagem;
    @Column(name="id_UsuarioMensagem")
    private Integer id_UsuarioMensagem;
    @Column(name="id_UsuarioSeguidorMensagem")
    private Integer id_UsuarioSeguidorMensagem;

    public Mensagem(){}
    public Mensagem(Integer id_mensagem, String ds_mensagem, Date dt_mensagem, Integer id_UsuarioMensagem, Integer id_UsuarioSeguidorMensagem) {
        this.id_mensagem = id_mensagem;
        this.ds_mensagem = ds_mensagem;
        this.dt_mensagem = dt_mensagem;
        this.id_UsuarioMensagem = id_UsuarioMensagem;
        this.id_UsuarioSeguidorMensagem = id_UsuarioSeguidorMensagem;
    }

    public Integer getId_mensagem() {
        return id_mensagem;
    }

    public void setId_mensagem(Integer id_mensagem) {
        this.id_mensagem = id_mensagem;
    }

    public String getDs_mensagem() {
        return ds_mensagem;
    }

    public void setDs_mensagem(String ds_mensagem) {
        this.ds_mensagem = ds_mensagem;
    }

    public Date getDt_mensagem() {
        return dt_mensagem;
    }

    public void setDt_mensagem(Date dt_mensagem) {
        this.dt_mensagem = dt_mensagem;
    }

    public Integer getId_UsuarioMensagem() {
        return id_UsuarioMensagem;
    }

    public void setId_UsuarioMensagem(Integer id_UsuarioMensagem) {
        this.id_UsuarioMensagem = id_UsuarioMensagem;
    }

    public Integer getId_UsuarioSeguidorMensagem() {
        return id_UsuarioSeguidorMensagem;
    }

    public void setId_UsuarioSeguidorMensagem(Integer id_UsuarioSeguidorMensagem) {
        this.id_UsuarioSeguidorMensagem = id_UsuarioSeguidorMensagem;
    }

    @Override
    public String toString() {
        return "Mensagem{" +
                "id_mensagem=" + id_mensagem +
                ", ds_mensagem='" + ds_mensagem + '\'' +
                ", dt_mensagem='" + dt_mensagem + '\'' +
                ", id_UsuarioMensagem=" + id_UsuarioMensagem +
                ", id_UsuarioSeguidorMensagem=" + id_UsuarioSeguidorMensagem +
                '}';
    }
}
