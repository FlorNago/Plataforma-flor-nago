package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Comentario_Postagem")
public class Comentario_Postagem {
    @Id
    @Column(name="id_comentario")
    private Integer id_comentario;
    @Column(name = "id_usuario")
    private Integer id_usuario;
    @Column(name = "id_usuario_seguidor")
    private Integer id_usuario_seguidor;
    @Column(name = "ds_comentario")
    private String ds_comentario;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_comentario")
    private Date dt_comentario;

    public Comentario_Postagem(){}

    public Comentario_Postagem(Integer id_comentario, Integer id_usuario, Integer id_usuario_seguidor, String ds_comentario, Date dt_comentario) {
        this.id_comentario = id_comentario;
        this.id_usuario = id_usuario;
        this.id_usuario_seguidor = id_usuario_seguidor;
        this.ds_comentario = ds_comentario;
        this.dt_comentario = dt_comentario;
    }

    public Integer getId_comentario() {
        return id_comentario;
    }

    public void setId_comentario(Integer id_comentario) {
        this.id_comentario = id_comentario;
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

    public String getDs_comentario() {
        return ds_comentario;
    }

    public void setDs_comentario(String ds_comentario) {
        this.ds_comentario = ds_comentario;
    }

    public Date getDt_comentario() {
        return dt_comentario;
    }

    public void setDt_comentario(Date dt_comentario) {
        this.dt_comentario = dt_comentario;
    }

    @Override
    public String toString() {
        return "Comentario_Postagem{" +
                "id_comentario=" + id_comentario +
                ", id_usuario=" + id_usuario +
                ", id_usuario_seguidor=" + id_usuario_seguidor +
                ", ds_comentario='" + ds_comentario + '\'' +
                ", dt_comentario=" + dt_comentario +
                '}';
    }
}
