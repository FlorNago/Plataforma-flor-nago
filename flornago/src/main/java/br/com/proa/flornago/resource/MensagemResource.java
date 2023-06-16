package br.com.proa.flornago.resource;

import br.com.proa.flornago.models.Mensagem;
import br.com.proa.flornago.repository.MensagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/mensagem")
public class MensagemResource {
    @Autowired
    MensagemRepository mensagemRepository ;

    @GetMapping("/mensagens")
    public ResponseEntity<List<Mensagem>> getAllMensagens() {
        try{
            List<Mensagem>mensagens = new ArrayList<>();
            mensagens.addAll(mensagemRepository.findAll());
            if(mensagens.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(mensagens, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirMensagens")
    public ResponseEntity<Mensagem> createMensagem(@RequestBody Mensagem mensagem){
        try {
            Mensagem _mensagem = mensagemRepository.save(new Mensagem(
                    mensagem.getId_mensagem(),
                    mensagem.getDs_mensagem(),
                    mensagem.getDt_mensagem(),
                    mensagem.getId_usuario(),
                    mensagem.getId_usuario_seguidor()
            ));
            return new ResponseEntity<>(_mensagem, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarMensagem/{id_mensagem}")
    public ResponseEntity<Mensagem> updateMensagem(@PathVariable("id_mensagem") Integer id_mensagem, @RequestBody Mensagem mensagem){
        Optional<Mensagem> mensagemDados = mensagemRepository.findById(id_mensagem);
        if(mensagemDados.isPresent()){
            Mensagem _mensagem = mensagemDados.get();
            _mensagem.setDs_mensagem(mensagem.getDs_mensagem());
            _mensagem.setDt_mensagem(mensagem.getDt_mensagem());
            _mensagem.setId_usuario(mensagem.getId_usuario());
            _mensagem.setId_usuario_seguidor(mensagem.getId_usuario_seguidor());
            return new ResponseEntity<>(mensagemRepository.save(_mensagem), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeletarMensagem/{id_mensagem}")
    public ResponseEntity<HttpStatus> deleteMensagem(@PathVariable("id_mensagem") Integer id_mensagem){
        try {
            mensagemRepository.deleteById(id_mensagem);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
