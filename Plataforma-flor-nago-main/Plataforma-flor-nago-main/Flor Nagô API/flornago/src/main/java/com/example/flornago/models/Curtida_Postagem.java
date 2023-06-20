package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "curtida_postagem") //Da nome a uma tabela
public class Curtida_Postagem {
    private int id_UsuarioPostagem;
    private int id_UsuarioSeguidor;
    private int curtida; //Mesma dúvida do byte ou int
    private String dt_curtida;
}
