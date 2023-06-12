package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Usuario_Seguidor")
public class Usuario_Seguidor {
    @Id
    @Column(name = "id_usuarioSeguidor")
    private Integer id_usuarioSeguidor;
    @Column(name = "id_usuario")
    private Integer id_usuario;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_follow")
    private Date dt_follow;

    public Usuario_Seguidor(){}
    public Usuario_Seguidor(Integer id_usuarioSeguidor, Integer id_usuario, Date dt_follow) {
        this.id_usuarioSeguidor = id_usuarioSeguidor;
        this.id_usuario = id_usuario;
        this.dt_follow = dt_follow;
    }

    public Integer getId_usuarioSeguidor() {
        return id_usuarioSeguidor;
    }

    public void setId_usuarioSeguidor(Integer id_usuarioSeguidor) {
        this.id_usuarioSeguidor = id_usuarioSeguidor;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Date getDt_follow() {
        return dt_follow;
    }

    public void setDt_follow(Date dt_follow) {
        this.dt_follow = dt_follow;
    }

    @Override
    public String toString() {
        return "Usuario_Seguidor{" +
                "id_usuarioSeguidor=" + id_usuarioSeguidor +
                ", id_usuario=" + id_usuario +
                ", dt_follow=" + dt_follow +
                '}';
    }
}
