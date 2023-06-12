package br.com.proa.flornago.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Genero")
public class Genero {
    @Id
    @Column(name="id_genero")
    public Integer id_genero;
    @Column(name="nm_genero")
    public String nm_genero;
    @Column(name="abr_genero")
    public String abr_genero;

    public Genero(){}
    public Genero(Integer id_genero, String nm_genero, String abr_genero) {
        this.id_genero = id_genero;
        this.nm_genero = nm_genero;
        this.abr_genero = abr_genero;
    }

    public Integer getId_genero() {
        return id_genero;
    }

    public void setId_genero(Integer id_genero) {
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

    @Override
    public String toString() {
        return "Genero{" +
                "id_genero=" + id_genero +
                ", nm_genero='" + nm_genero + '\'' +
                ", abr_genero='" + abr_genero + '\'' +
                '}';
    }
}
