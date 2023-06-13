package br.com.proa.flornago.resource;

import br.com.proa.flornago.models.Postagem;
import br.com.proa.flornago.repository.PostagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/postagem")
public class PostagemResource {
    @Autowired
    PostagemRepository postagemRepository ;

    @GetMapping("/postagens")
    public ResponseEntity<List<Postagem>> getAllPostagens() {
        try{
            List<Postagem>postagens = new ArrayList<>();
            postagens.addAll(postagemRepository.findAll());
            if(postagens.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(postagens, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirPostagens")
    public ResponseEntity<Postagem> createPostagem(@RequestBody Postagem postagem){
        try {
            Postagem _postagem = postagemRepository.save(new Postagem(
                    postagem.getId_postagem(),
                    postagem.getId_usuario(),
                    postagem.getDs_postagem(),
                    postagem.getImg_postagem(),
                    postagem.getDt_postagem()
            ));
            return new ResponseEntity<>(_postagem, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarPostagem/{id_postagem}")
    public ResponseEntity<Postagem> updatePostagem(@PathVariable("id_postagem") Integer id_postagem, @RequestBody Postagem postagem){
        Optional<Postagem> postagemDados = postagemRepository.findById(id_postagem);
        if(postagemDados.isPresent()){
            Postagem _postagem = postagemDados.get();
            _postagem.setId_usuario(postagem.getId_usuario());
            _postagem.setDs_postagem(postagem.getDs_postagem());
            _postagem.setImg_postagem(postagem.getImg_postagem());
            _postagem.setDt_postagem(postagem.getDt_postagem());
            return new ResponseEntity<>(postagemRepository.save(_postagem), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeletarPostagem/{id_postagem}")
    public ResponseEntity<HttpStatus> deletePostagem(@PathVariable("id_postagem") Integer id_postagem){
        try {
            postagemRepository.deleteById(id_postagem);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
