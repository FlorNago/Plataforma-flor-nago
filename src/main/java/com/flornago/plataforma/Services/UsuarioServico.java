package com.flornago.plataforma.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.flornago.plataforma.Exception.UnauthorizedException;
import com.flornago.plataforma.Model.UserModel;
import com.flornago.plataforma.Repository.UserRepository;

@Service
public class UsuarioServico {
    
    @Autowired
    private UserRepository userRepository;

    public void verificarSeContaExiste(UserModel usuario)  {
        UserModel usuarioExistente = userRepository.findByEmail(usuario.getEmail());

        if (usuarioExistente != null) {
            throw new UnauthorizedException("Já existe uma conta com essas credenciais");
        }
    }

    public UserModel encontrarUsuarioPorEmail(String email) {
        UserModel usuarioExistente = userRepository.findByEmail(email);

        if (usuarioExistente == null) {
            throw new UnauthorizedException("Não existe uma conta com essas credenciais");
        }
        
        return usuarioExistente;
    }

    public void verificarSenha(UserModel usuarioInput, UserModel usuarioEntidade) {
       BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
       boolean senhaCorreta = passwordEncoder.matches(usuarioInput.getSenha(), usuarioEntidade.getSenha());
       
       if (!senhaCorreta) {
        throw new UnauthorizedException("A senha está incorreta");
       }
    }
    

    public void criptografarSenha(UserModel usuario) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String senhaCriptografada = passwordEncoder.encode(usuario.getSenha());
        usuario.setSenha(senhaCriptografada);
    }

    public UserModel autenticarUsuario(UserModel usuario) {
        UserModel usuarioExistente = encontrarUsuarioPorEmail(usuario.getEmail());
        verificarSenha(usuario, usuarioExistente);
        return usuarioExistente;
    }

    public void criarUsuaio(UserModel usuario) {
        verificarSeContaExiste(usuario);
        criptografarSenha(usuario);
        userRepository.save(usuario);
    }
}
