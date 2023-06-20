package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "logradouro") //Da nome a uma tabela
public class Logradouro {
    private int id_logradouro;
    private int cep;
    private String nome_rua;

    public int getId_logradouro() {
        return id_logradouro;
    }

    public void setId_logradouro(int id_logradouro) {
        this.id_logradouro = id_logradouro;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }

    public String getNome_rua() {
        return nome_rua;
    }

    public void setNome_rua(String nome_rua) {
        this.nome_rua = nome_rua;
    }
}
