package com.example.flornago.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity //Mostra ao SPRING que é uma tabela
@Table(schema = "usuario_empreendedor") //Da nome a uma tabela
public class Usuario_Empreendedor {
    private int id_usuarioMei;
    private int id_usuario;
    private int telefone_Comercial;
    private int cnpj;
    private String email_Comercial;
    private String localizacao;
    private int horario_Abertura; //Nesse aqui, eu fiquei em dúvida entre int ou String.
    private int horario_Encerramento; // Nesse também, o mesmo de cima.
    private String ds_negocio;
    private String nr_endereco;
    private String complemento_endereco;
    private String arroba_Negocio;
}
