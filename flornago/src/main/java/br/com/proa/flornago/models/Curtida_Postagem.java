package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Curtida_Postagem")
public class Curtida_Postagem {
    @Id
    @Column(name = "id_curtida")
    public Integer id_curtida;
    @Column(name = "id_UsuarioPostagem")
    public Integer id_UsuarioPostagem;
    @Column(name = "id_UsuarioSeguidor")
    public Integer  id_UsuarioSeguidor;
    @Column(name = "curtida")
    public Boolean curtida;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_curtida")
    public Date dt_curtida;

    public Curtida_Postagem(){}

    public Curtida_Postagem(Integer id_curtida, Integer id_UsuarioPostagem, Integer id_UsuarioSeguidor, Boolean curtida, Date dt_curtida) {
        this.id_curtida = id_curtida;
        this.id_UsuarioPostagem = id_UsuarioPostagem;
        this.id_UsuarioSeguidor = id_UsuarioSeguidor;
        this.curtida = curtida;
        this.dt_curtida = dt_curtida;
    }

    public Integer getId_curtida() {
        return id_curtida;
    }

    public void setId_curtida(Integer id_curtida) {
        this.id_curtida = id_curtida;
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
                ", id_UsuarioPostagem=" + id_UsuarioPostagem +
                ", id_UsuarioSeguidor=" + id_UsuarioSeguidor +
                ", curtida=" + curtida +
                ", dt_curtida=" + dt_curtida +
                '}';
    }
}
