package br.com.proa.flornago.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Logradouro")
public class Logradouro {
    @Id
    @Column(name = "id_logradouro")
    private Integer id_logradouro;
    @Column(name = "cep")
    private Integer cep;
    @Column(name = "nome_rua")
    private String nome_rua;

    public Logradouro(){}
    public Logradouro(Integer id_logradouro, Integer cep, String nome_rua) {
        this.id_logradouro = id_logradouro;
        this.cep = cep;
        this.nome_rua = nome_rua;
    }

    public Integer getId_logradouro() {
        return id_logradouro;
    }

    public void setId_logradouro(Integer id_logradouro) {
        this.id_logradouro = id_logradouro;
    }

    public Integer getCep() {
        return cep;
    }

    public void setCep(Integer cep) {
        this.cep = cep;
    }

    public String getNome_rua() {
        return nome_rua;
    }

    public void setNome_rua(String nome_rua) {
        this.nome_rua = nome_rua;
    }

    @Override
    public String toString() {
        return "Logradouro{" +
                "id_logradouro=" + id_logradouro +
                ", cep=" + cep +
                ", nome_rua='" + nome_rua + '\'' +
                '}';
    }
}
