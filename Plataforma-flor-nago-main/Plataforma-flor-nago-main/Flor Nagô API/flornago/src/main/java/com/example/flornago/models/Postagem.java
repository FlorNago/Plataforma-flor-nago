package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "postagem") //Da nome a uma tabela
public class Postagem {
    private int id_postagem;
    private int id_usuario;
    private String ds_postagem;
    private String img_postagem; //Você tinha colocado longblob, não sei se String era o correto.
    private String dt_postagem;
}
