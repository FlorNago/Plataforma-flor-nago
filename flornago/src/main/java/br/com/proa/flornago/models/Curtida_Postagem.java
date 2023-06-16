package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Curtida_Postagem")
public class Curtida_Postagem {
    @Id
    @Column(name = "id_curtida")
    public Integer id_curtida;
    @Column(name = "id_usuario")
    public Integer id_usuario;
    @Column(name = "id_usuario_seguidor")
    public Integer  id_usuario_seguidor;
    @Column(name = "curtida")
    public Boolean curtida;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_curtida")
    public Date dt_curtida;

    public Curtida_Postagem(){}

    public Curtida_Postagem(Integer id_curtida, Integer id_usuario, Integer id_usuario_seguidor, Boolean curtida, Date dt_curtida) {
        this.id_curtida = id_curtida;
        this.id_usuario = id_usuario;
        this.id_usuario_seguidor = id_usuario_seguidor;
        this.curtida = curtida;
        this.dt_curtida = dt_curtida;
    }

    public Integer getId_curtida() {
        return id_curtida;
    }

    public void setId_curtida(Integer id_curtida) {
        this.id_curtida = id_curtida;
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

    public Boolean getCurtida() {
        return curtida;
    }

    public void setCurtida(Boolean curtida) {
        this.curtida = curtida;
    }

    public Date getDt_curtida() {
        return dt_curtida;
    }

    public void setDt_curtida(Date dt_curtida) {
        this.dt_curtida = dt_curtida;
    }

    @Override
    public String toString() {
        return "Curtida_Postagem{" +
                "id_curtida=" + id_curtida +
                ", id_usuario=" + id_usuario +
                ", id_usuario_seguidor=" + id_usuario_seguidor +
                ", curtida=" + curtida +
                ", dt_curtida=" + dt_curtida +
                '}';
    }
}
