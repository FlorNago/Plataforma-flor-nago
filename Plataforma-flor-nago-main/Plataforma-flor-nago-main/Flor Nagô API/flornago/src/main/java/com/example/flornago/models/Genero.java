package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "genero") //Da nome a uma tabela
public class Genero {
    private int id_genero;
    private String nm_genero;
    private String abr_genero;

    public int getId_genero() {
        return id_genero;
    }

    public void setId_genero(int id_genero) {
        this.id_genero = id_genero;
    }

    public String getNm_genero() {
        return nm_genero;
    }

    public void setNm_genero(String nm_genero) {
        this.nm_genero = nm_genero;
    }

    public String getAbr_genero() {
        return abr_genero;
    }

    public void setAbr_genero(String abr_genero) {
        this.abr_genero = abr_genero;
    }
}
