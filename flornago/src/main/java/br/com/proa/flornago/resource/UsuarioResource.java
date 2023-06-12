package br.com.proa.flornago.resource;
import br.com.proa.flornago.models.Usuario;
import br.com.proa.flornago.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/usuario")
public class UsuarioResource {
    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>> getAllUsuarios() {
        try{
            List<Usuario>usuarios = new ArrayList<>();
            usuarios.addAll(usuarioRepository.findAll());
            if(usuarios.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(usuarios, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirUsuarios")
    public ResponseEntity<Usuario> createUsuarios(@RequestBody Usuario usuario){
        try {
            Usuario _usuario = usuarioRepository.save(new Usuario(
                    usuario.getId_usuario(),
                    usuario.getNm_usuario(),
                    usuario.getTelefone_usuario(),
                    usuario.getEmail_usuario(),
                    usuario.getSenha_usuario(),
                    usuario.getDt_nascimento(),
                    usuario.getCpf(),
                    usuario.getVerificacao(),
                    usuario.getDt_criacao(),
                    usuario.getArroba_usuario(),
                    usuario.getId_genero()
            ));
            return new ResponseEntity<>(_usuario, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarUsuario/{id_usuario}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable("id_usuario") Integer id_usuario, @RequestBody Usuario usuario){
        Optional<Usuario> usuarioDados = usuarioRepository.findById(id_usuario);
        if(usuarioDados.isPresent()){
            Usuario _usuario = usuarioDados.get();
            _usuario.setNm_usuario(usuario.getNm_usuario());
            _usuario.setTelefone_usuario(usuario.getTelefone_usuario());
            _usuario.setEmail_usuario(usuario.getEmail_usuario());
            _usuario.setSenha_usuario(usuario.getSenha_usuario());
            _usuario.setDt_nascimento(usuario.getDt_nascimento());
            _usuario.setCpf(usuario.getCpf());
            _usuario.setVerificacao(usuario.getVerificacao());
            _usuario.setDt_criacao(usuario.getDt_criacao());
            _usuario.setArroba_usuario(usuario.getArroba_usuario());
            _usuario.setId_genero(usuario.getId_genero());
            return new ResponseEntity<>(usuarioRepository.save(_usuario), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/DeletarUsuario/{id_usuario}")
    public ResponseEntity<HttpStatus> deleteUsuario(@PathVariable("id_usuario") Integer id_usuario){
        try {
            usuarioRepository.deleteById(id_usuario);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
