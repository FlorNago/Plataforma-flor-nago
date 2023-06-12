package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Postagem")
public class Postagem {
    @Id
    @Column(name="id_postagem")
    private Integer id_postagem;
    @Column(name="id_usuario")
    private Integer id_usuario;
    @Column(name="ds_postagem")
    private String ds_postagem;
    @Column(name="img_postagem")
    private String img_postagem;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="dt_postagem")
    private Date dt_postagem;

    public Postagem(){}
    public Postagem(Integer id_postagem, Integer id_usuario, String ds_postagem, String img_postagem, Date dt_postagem) {
        this.id_postagem = id_postagem;
        this.id_usuario = id_usuario;
        this.ds_postagem = ds_postagem;
        this.img_postagem = img_postagem;
        this.dt_postagem = dt_postagem;
    }

    public Integer getId_postagem() {
        return id_postagem;
    }

    public void setId_postagem(Integer id_postagem) {
        this.id_postagem = id_postagem;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getDs_postagem() {
        return ds_postagem;
    }

    public void setDs_postagem(String ds_postagem) {
        this.ds_postagem = ds_postagem;
    }

    public String getImg_postagem() {
        return img_postagem;
    }

    public void setImg_postagem(String img_postagem) {
        this.img_postagem = img_postagem;
    }

    public Date getDt_postagem() {
        return dt_postagem;
    }

    public void setDt_postagem(Date dt_postagem) {
        this.dt_postagem = dt_postagem;
    }

    @Override
    public String toString() {
        return "Postagem{" +
                "id_postagem=" + id_postagem +
                ", id_usuario=" + id_usuario +
                ", ds_postagem='" + ds_postagem + '\'' +
                ", img_postagem='" + img_postagem + '\'' +
                ", dt_postagem=" + dt_postagem +
                '}';
    }
}
