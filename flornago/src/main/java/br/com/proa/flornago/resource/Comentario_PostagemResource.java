package br.com.proa.flornago.resource;
import br.com.proa.flornago.models.Comentario_Postagem;
import br.com.proa.flornago.repository.Comentario_PostagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/comentario_postagem")
public class Comentario_PostagemResource {
    @Autowired
    Comentario_PostagemRepository comentarioPostagemRepository;

    @GetMapping("/comentarios")
    public ResponseEntity<List<Comentario_Postagem>> getAllComentarios() {
        try{
            List<Comentario_Postagem>comentarioPostagens = new ArrayList<>();
            comentarioPostagens.addAll(comentarioPostagemRepository.findAll());
            if(comentarioPostagens.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(comentarioPostagens, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirComentario")
    public ResponseEntity<Comentario_Postagem> createSeguidor(@RequestBody Comentario_Postagem comentarioPostagem){
        try {
            Comentario_Postagem _comentario = comentarioPostagemRepository.save(new Comentario_Postagem(
                    comentarioPostagem.getId_UsuarioPostagem(),
                    comentarioPostagem.getId_UsuarioSeguidor(),
                    comentarioPostagem.getDs_comentario(),
                    comentarioPostagem.getDt_comentario()
            ));
            return new ResponseEntity<>(_comentario, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarComentario/{id_UsuarioPostagem}")
    public ResponseEntity<Comentario_Postagem> updateComentario(@PathVariable("id_UsuarioPostagem") Integer id_UsuarioPostagem, @RequestBody Comentario_Postagem comentarioPostagem){
        Optional<Comentario_Postagem> comentarioDados = Comentario_PostagemRepository.findById(id_UsuarioPostagem);
        if(comentarioDados.isPresent()){
            Comentario_Postagem _comentario = comentarioDados.get();
            _comentario.setDs_comentario(comentarioPostagem.getDs_comentario());
            _comentario.setId_UsuarioSeguidor(comentarioPostagem.getId_UsuarioSeguidor());
            _comentario.setDt_comentario(comentarioPostagem.getDt_comentario());
            return new ResponseEntity<>(Comentario_PostagemRepository.save(_comentario), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeletarComentario/{id_UsuarioPostagem}")
    public ResponseEntity<HttpStatus> deleteComentario(@PathVariable("id_UsuarioPostagem") Integer id_UsuarioPostagem){
        try {
            Comentario_PostagemRepository.deleteById(id_UsuarioPostagem);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
