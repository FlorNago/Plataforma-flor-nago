package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Comentario_Postagem")
public class Comentario_Postagem {
    @Id
    @Column(name="id_comentario")
    private Integer id_comentario;
    @Column(name = "id_UsuarioPostagem")
    private Integer id_UsuarioPostagem;
    @Column(name = "id_UsuarioSeguidor")
    private Integer id_UsuarioSeguidor;
    @Column(name = "ds_comentario")
    private String ds_comentario;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_comentario")
    private Date dt_comentario;

    public Comentario_Postagem(){}

    public Comentario_Postagem(Integer id_comentario, Integer id_UsuarioPostagem, Integer id_UsuarioSeguidor, String ds_comentario, Date dt_comentario) {
        this.id_comentario = id_comentario;
        this.id_UsuarioPostagem = id_UsuarioPostagem;
        this.id_UsuarioSeguidor = id_UsuarioSeguidor;
        this.ds_comentario = ds_comentario;
        this.dt_comentario = dt_comentario;
    }

    public Integer getId_comentario() {
        return id_comentario;
    }

    public void setId_comentario(Integer id_comentario) {
        this.id_comentario = id_comentario;
    }

    public Integer getId_UsuarioPostagem() {
        return id_UsuarioPostagem;
    }

    public void setId_UsuarioPostagem(Integer id_UsuarioPostagem) {
        this.id_UsuarioPostagem = id_UsuarioPostagem;
    }

    public Integer getId_UsuarioSeguidor() {
        return id_UsuarioSeguidor;
    }

    public void setId_UsuarioSeguidor(Integer id_UsuarioSeguidor) {
        this.id_UsuarioSeguidor = id_UsuarioSeguidor;
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
                ", id_UsuarioPostagem=" + id_UsuarioPostagem +
                ", id_UsuarioSeguidor=" + id_UsuarioSeguidor +
                ", ds_comentario='" + ds_comentario + '\'' +
                ", dt_comentario=" + dt_comentario +
                '}';
    }
}
