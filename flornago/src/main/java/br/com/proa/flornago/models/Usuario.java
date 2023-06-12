package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Usuario")
public class Usuario {
    @Id
    @Column(name="id_usuario")
    private Integer id_usuario;
    @Column(name = "nm_usuario")
    private String nm_usuario;
    @Column(name = "telefone_usuario")
    private String telefone_usuario;
    @Column(name = "email_usuario")
    private String email_usuario;
    @Column(name = "senha_usuario")
    private String senha_usuario;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_nascimento")
    private Date dt_nascimento;
    @Column(name = "cpf")
    private String cpf;
    @Column(name = "verificacao")
    private Boolean verificacao;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_criacao")
    private Date dt_criacao;
    @Column(name = "arroba_usuario")
    private String arroba_usuario;
    @Column(name = "id_genero")
    private Integer id_genero;

    public Usuario(){}
    public Usuario(Integer id_usuario, String nm_usuario, String telefone_usuario, String email_usuario, String senha_usuario, Date dt_nascimento, String cpf, Boolean verificacao, Date dt_criacao, String arroba_usuario, Integer id_genero) {
        this.id_usuario = id_usuario;
        this.nm_usuario = nm_usuario;
        this.telefone_usuario = telefone_usuario;
        this.email_usuario = email_usuario;
        this.senha_usuario = senha_usuario;
        this.dt_nascimento = dt_nascimento;
        this.cpf = cpf;
        this.verificacao = verificacao;
        this.dt_criacao = dt_criacao;
        this.arroba_usuario = arroba_usuario;
        this.id_genero = id_genero;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getNm_usuario() {
        return nm_usuario;
    }

    public void setNm_usuario(String nm_usuario) {
        this.nm_usuario = nm_usuario;
    }

    public String getTelefone_usuario() {
        return telefone_usuario;
    }

    public void setTelefone_usuario(String telefone_usuario) {
        this.telefone_usuario = telefone_usuario;
    }

    public String getEmail_usuario() {
        return email_usuario;
    }

    public void setEmail_usuario(String email_usuario) {
        this.email_usuario = email_usuario;
    }

    public String getSenha_usuario() {
        return senha_usuario;
    }

    public void setSenha_usuario(String senha_usuario) {
        this.senha_usuario = senha_usuario;
    }

    public Date getDt_nascimento() {
        return dt_nascimento;
    }

    public void setDt_nascimento(Date dt_nascimento) {
        this.dt_nascimento = dt_nascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Boolean getVerificacao() {
        return verificacao;
    }

    public void setVerificacao(Boolean verificacao) {
        this.verificacao = verificacao;
    }

    public Date getDt_criacao() {
        return dt_criacao;
    }

    public void setDt_criacao(Date dt_criacao) {
        this.dt_criacao = dt_criacao;
    }

    public String getArroba_usuario() {
        return arroba_usuario;
    }

    public void setArroba_usuario(String arroba_usuario) {
        this.arroba_usuario = arroba_usuario;
    }

    public Integer getId_genero() {
        return id_genero;
    }

    public void setId_genero(Integer id_genero) {
        this.id_genero = id_genero;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id_usuario=" + id_usuario +
                ", nm_usuario='" + nm_usuario + '\'' +
                ", telefone_usuario='" + telefone_usuario + '\'' +
                ", email_usuario='" + email_usuario + '\'' +
                ", senha_usuario='" + senha_usuario + '\'' +
                ", dt_nascimento=" + dt_nascimento +
                ", cpf='" + cpf + '\'' +
                ", verificacao=" + verificacao +
                ", dt_criacao=" + dt_criacao +
                ", arroba_usuario='" + arroba_usuario + '\'' +
                ", id_genero=" + id_genero +
                '}';
    }
}
