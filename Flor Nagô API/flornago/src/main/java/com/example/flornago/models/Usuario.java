package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "usuario") //Da nome a uma tabela
public class Usuario {
    private int id_usuario;
    private String nm_usuario;
    private int telefone_usuario;
    private String email_usuario;
    private String senha_usuario;
    private String dt_nascimento; //A maioria das Dates e Datetime coloquei como String.
    private String cpf;
    private int verificacao; //Fiquei em dúvida entre byte e int, por isso nn dei Getter/Setter.
    private String dt_criacao; //String aqui também.
    private String arroba_usuario;
    private int id_genero;
}
