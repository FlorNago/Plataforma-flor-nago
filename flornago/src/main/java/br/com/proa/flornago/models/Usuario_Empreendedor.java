package br.com.proa.flornago.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Usuario_Empreendedor")
public class Usuario_Empreendedor {
    @Id
    @Column(name="id_usuarioMei")
    private Integer id_usuarioMei;
    @Column(name="id_usuario")
    private Integer id_usuario;
    @Column(name="telefone_Comercial")
    private Integer telefone_Comercial;
    @Column(name="cnpj")
    private Integer cnpj;
    @Column(name="email_Comercial")
    private String email_Comercial;
    @Column(name="localizacao")
    private String localizacao;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="horario_Abertura")
    private Date horario_Abertura;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="horario_Encerramento")
    private Date horario_Encerramento;
    @Column(name="ds_negocio")
    private String ds_negocio;
    @Column(name="nr_endereço")
    private String nr_endereço;
    @Column(name="complemento_endereco")
    private String complemento_endereco;
    @Column(name="arroba_Negocio")
    private String arroba_Negocio;


    public  Usuario_Empreendedor(){}
    public Usuario_Empreendedor(Integer id_usuarioMei, Integer id_usuario, Integer telefone_Comercial, Integer cnpj, String email_Comercial, String localizacao, Date horario_Abertura, Date horario_Encerramento, String ds_negocio, String nr_endereço, String complemento_endereco, String arroba_Negocio) {
        this.id_usuarioMei = id_usuarioMei;
        this.id_usuario = id_usuario;
        this.telefone_Comercial = telefone_Comercial;
        this.cnpj = cnpj;
        this.email_Comercial = email_Comercial;
        this.localizacao = localizacao;
        this.horario_Abertura = horario_Abertura;
        this.horario_Encerramento = horario_Encerramento;
        this.ds_negocio = ds_negocio;
        this.nr_endereço = nr_endereço;
        this.complemento_endereco = complemento_endereco;
        this.arroba_Negocio = arroba_Negocio;
    }

    public Integer getId_usuarioMei() {
        return id_usuarioMei;
    }

    public void setId_usuarioMei(Integer id_usuarioMei) {
        this.id_usuarioMei = id_usuarioMei;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Integer getTelefone_Comercial() {
        return telefone_Comercial;
    }

    public void setTelefone_Comercial(Integer telefone_Comercial) {
        this.telefone_Comercial = telefone_Comercial;
    }

    public Integer getCnpj() {
        return cnpj;
    }

    public void setCnpj(Integer cnpj) {
        this.cnpj = cnpj;
    }

    public String getEmail_Comercial() {
        return email_Comercial;
    }

    public void setEmail_Comercial(String email_Comercial) {
        this.email_Comercial = email_Comercial;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public Date getHorario_Abertura() {
        return horario_Abertura;
    }

    public void setHorario_Abertura(Date horario_Abertura) {
        this.horario_Abertura = horario_Abertura;
    }

    public Date getHorario_Encerramento() {
        return horario_Encerramento;
    }

    public void setHorario_Encerramento(Date horario_Encerramento) {
        this.horario_Encerramento = horario_Encerramento;
    }

    public String getDs_negocio() {
        return ds_negocio;
    }

    public void setDs_negocio(String ds_negocio) {
        this.ds_negocio = ds_negocio;
    }

    public String getNr_endereço() {
        return nr_endereço;
    }

    public void setNr_endereço(String nr_endereço) {
        this.nr_endereço = nr_endereço;
    }

    public String getComplemento_endereco() {
        return complemento_endereco;
    }

    public void setComplemento_endereco(String complemento_endereco) {
        this.complemento_endereco = complemento_endereco;
    }

    public String getArroba_Negocio() {
        return arroba_Negocio;
    }

    public void setArroba_Negocio(String arroba_Negocio) {
        this.arroba_Negocio = arroba_Negocio;
    }

    @Override
    public String toString() {
        return "Usuario_Empreendedor{" +
                "id_usuarioMei=" + id_usuarioMei +
                ", id_usuario=" + id_usuario +
                ", telefone_Comercial=" + telefone_Comercial +
                ", cnpj=" + cnpj +
                ", email_Comercial='" + email_Comercial + '\'' +
                ", localizacao='" + localizacao + '\'' +
                ", horario_Abertura=" + horario_Abertura +
                ", horario_Encerramento=" + horario_Encerramento +
                ", ds_negocio='" + ds_negocio + '\'' +
                ", nr_endereço='" + nr_endereço + '\'' +
                ", complemento_endereco='" + complemento_endereco + '\'' +
                ", arruba_Negocio='" + arroba_Negocio + '\'' +
                '}';
    }
}
