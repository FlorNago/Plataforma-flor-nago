package br.com.proa.flornago.resource;

import br.com.proa.flornago.models.Genero;
import br.com.proa.flornago.repository.GeneroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/genero")
public class GeneroResource {
    @Autowired
    GeneroRepository generoRepository;

    @GetMapping("/generos")
    public ResponseEntity<List<Genero>> getAllGeneros() {
        try{
            List<Genero>generos = new ArrayList<>();
            generos.addAll(generoRepository.findAll());
            if(generos.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(generos, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirGeneros")
    public ResponseEntity<Genero> createGenero(@RequestBody Genero genero){
        try {
            Genero _genero = generoRepository.save(new Genero(genero.getId_genero(),genero.getNm_genero(),genero.getAbr_genero()));
            return new ResponseEntity<>(_genero, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarGenero/{id_genero}")
    public ResponseEntity<Genero> updateGenero(@PathVariable("id_genero") Integer id_genero, @RequestBody Genero genero){
        Optional<Genero> generoDados = generoRepository.findById(id_genero);
        if(generoDados.isPresent()){
            Genero _genero = generoDados.get();
            _genero.setNm_genero(genero.getNm_genero());
            _genero.setAbr_genero(genero.getAbr_genero());
            return new ResponseEntity<>(generoRepository.save(_genero), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeletarGenero/{id_genero}")
    public ResponseEntity<HttpStatus> deleteGenero(@PathVariable("id_genero") Integer id_genero){
        try {
            generoRepository.deleteById(id_genero);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
