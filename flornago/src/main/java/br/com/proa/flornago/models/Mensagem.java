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
    @Column(name="id_usuario")
    private Integer id_usuario;
    @Column(name="id_usuario_seguidor")
    private Integer id_usuario_seguidor;

    public Mensagem(){}

    public Mensagem(Integer id_mensagem, String ds_mensagem, Date dt_mensagem, Integer id_usuario, Integer id_usuario_seguidor) {
        this.id_mensagem = id_mensagem;
        this.ds_mensagem = ds_mensagem;
        this.dt_mensagem = dt_mensagem;
        this.id_usuario = id_usuario;
        this.id_usuario_seguidor = id_usuario_seguidor;
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

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Integer getId_usuario_seguidor() {
        return id_usuario_seguidor;
    }

    public void setId_usuario_seguidor(Integer id_usuario_seguidor) {
        this.id_usuario_seguidor = id_usuario_seguidor;
    }

    @Override
    public String toString() {
        return "Mensagem{" +
                "id_mensagem=" + id_mensagem +
                ", ds_mensagem='" + ds_mensagem + '\'' +
                ", dt_mensagem=" + dt_mensagem +
                ", id_usuario=" + id_usuario +
                ", id_usuario_seguidor=" + id_usuario_seguidor +
                '}';
    }
}
