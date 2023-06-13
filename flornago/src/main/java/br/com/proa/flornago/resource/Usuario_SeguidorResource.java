package br.com.proa.flornago.resource;
import br.com.proa.flornago.models.Usuario_Seguidor;
import br.com.proa.flornago.repository.Usuario_SeguidorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/usuario_seguidor")
public class Usuario_SeguidorResource {
    @Autowired
    Usuario_SeguidorRepository usuarioSeguidorRepository;

    @GetMapping("/seguidores")
    public ResponseEntity<List<Usuario_Seguidor>> getAllUsuarioSeguidores() {
        try{
            List<Usuario_Seguidor>usuarioSeguidores = new ArrayList<>();
            usuarioSeguidores.addAll(usuarioSeguidorRepository.findAll());
            if(usuarioSeguidores.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(usuarioSeguidores, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirSeguidor")
    public ResponseEntity<Usuario_Seguidor> createSeguidor(@RequestBody Usuario_Seguidor usuarioSeguidor){
        try {
            Usuario_Seguidor _seguidor = usuarioSeguidorRepository.save(new Usuario_Seguidor(
                    usuarioSeguidor.getId_usuarioSeguidor(),
                    usuarioSeguidor.getId_usuario(),
                    usuarioSeguidor.getDt_follow()
            ));
            return new ResponseEntity<>(_seguidor, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarSeguidor/{id_usuarioSeguidor}")
    public ResponseEntity<Usuario_Seguidor> updateSeguigor(@PathVariable("id_usuarioSeguidor") Integer id_usuarioSeguidor, @RequestBody Usuario_Seguidor usuarioSeguidor){
        Optional<Usuario_Seguidor> seguidorDados = usuarioSeguidorRepository.findById(id_usuarioSeguidor);
        if(seguidorDados.isPresent()){
            Usuario_Seguidor _seguidor = seguidorDados.get();
            _seguidor.setId_usuario(usuarioSeguidor.getId_usuario());
            _seguidor.setDt_follow(usuarioSeguidor.getDt_follow());
            return new ResponseEntity<>(usuarioSeguidorRepository.save(_seguidor), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeletarSeguidor/{id_usuarioSeguidor}")
    public ResponseEntity<HttpStatus> deleteSeguidor(@PathVariable("id_usuarioSeguidor") Integer id_usuarioSeguidor){
        try {
            usuarioSeguidorRepository.deleteById(id_usuarioSeguidor);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
