package br.com.proa.flornago.resource;
import br.com.proa.flornago.models.Curtida_Postagem;
import br.com.proa.flornago.repository.Curtida_PostagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/curtida_postagem")
public class Curtida_PostagemResource {
    @Autowired
    Curtida_PostagemRepository curtidaPostagemRepository;

    @GetMapping("/curtidas")
    public ResponseEntity<List<Curtida_Postagem>> getAllCurtidas() {
        try{
            List<Curtida_Postagem>curtida_postagens = new ArrayList<>();
            curtida_postagens.addAll(curtidaPostagemRepository.findAll());
            if(curtida_postagens.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(curtida_postagens, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirCurtidas")
    public ResponseEntity<Curtida_Postagem> createCurtida(@RequestBody Curtida_Postagem curtidaPostagem){
        try {
            Curtida_Postagem _curtida = curtidaPostagemRepository.save(new Curtida_Postagem(
                    curtidaPostagem.getId_curtida(),
                    curtidaPostagem.getId_usuario(),
                    curtidaPostagem.getId_usuario_seguidor(),
                    curtidaPostagem.getCurtida(),
                    curtidaPostagem.getDt_curtida()
            ));
            return new ResponseEntity<>(_curtida, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarCurtida/{id_curtida}")
    public ResponseEntity<Curtida_Postagem> updateCurtida(@PathVariable("id_curtida") Integer id_curtida, @RequestBody Curtida_Postagem curtidaPostagem){
        Optional<Curtida_Postagem> curtidaDados = curtidaPostagemRepository.findById(id_curtida);
        if(curtidaDados.isPresent()){
            Curtida_Postagem _curtida = curtidaDados.get();
            _curtida.setId_usuario_seguidor(curtidaPostagem.getId_usuario_seguidor());
            _curtida.setCurtida(curtidaPostagem.getCurtida());
            _curtida.setDt_curtida(curtidaPostagem.getDt_curtida());
            return new ResponseEntity<>(curtidaPostagemRepository.save(_curtida), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeletarCurtida/{id_curtida}")
    public ResponseEntity<HttpStatus> deleteCurtida(@PathVariable("id_curtida") Integer id_curtida){
        try {
            curtidaPostagemRepository.deleteById(id_curtida);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
