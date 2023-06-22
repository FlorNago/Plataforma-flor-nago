package com.flornago.plataforma.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flornago.plataforma.Model.UserModel;
import com.flornago.plataforma.Services.UsuarioServico;

@RestController
@RequestMapping("/autenticacao")
public class AutenticacaoController {
    
    @Autowired
    private UsuarioServico usuarioServico;

    @PostMapping("/registro")
    public ResponseEntity<?> cadastrarUsuario(@RequestBody UserModel usuario) {
        usuarioServico.criarUsuaio(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> usuarioLogin(@RequestBody UserModel usuario) {
        UserModel usuarioAutenticado = usuarioServico.autenticarUsuario(usuario);
        return ResponseEntity.status(HttpStatus.OK).body(usuarioAutenticado);
    }
}
