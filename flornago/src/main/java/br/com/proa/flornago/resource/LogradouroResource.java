package br.com.proa.flornago.resource;
import br.com.proa.flornago.models.Logradouro;
import br.com.proa.flornago.repository.LogradouroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/logradouro")
public class LogradouroResource {
    @Autowired
    LogradouroRepository logradouroRepository;

    @GetMapping("/logradouros")
    public ResponseEntity<List<Logradouro>> getAllLogradouros() {
        try{
            List<Logradouro>logradouros = new ArrayList<>();
            logradouros.addAll(logradouroRepository.findAll());
            if(logradouros.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(logradouros, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirLogradouros")
    public ResponseEntity<Logradouro> createGenero(@RequestBody Logradouro logradouro){
        try {
            Logradouro _logradouro = logradouroRepository.save(new Logradouro(
                    logradouro.getId_logradouro(),
                    logradouro.getCep(),
                    logradouro.getNome_rua()
            ));
            return new ResponseEntity<>(_logradouro, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarLogradouro/{id_logradouro}")
    public ResponseEntity<Logradouro> updateLogradouro(@PathVariable("id_logradouro") Integer id_logradouro, @RequestBody Logradouro logradouro){
        Optional<Logradouro> logradouroDados = logradouroRepository.findById(id_logradouro);
        if(logradouroDados.isPresent()){
            Logradouro _logradouro = logradouroDados.get();
            _logradouro.setCep(logradouro.getCep());
            _logradouro.setNome_rua(logradouro.getNome_rua());
            return new ResponseEntity<>(logradouroRepository.save(_logradouro), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeletarLogradouro/{id_logradouro}")
    public ResponseEntity<HttpStatus> deleteLogradouro(@PathVariable("id_logradouro") Integer id_logradouro){
        try {
            logradouroRepository.deleteById(id_logradouro);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
