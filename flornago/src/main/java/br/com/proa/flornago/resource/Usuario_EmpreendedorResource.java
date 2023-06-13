package br.com.proa.flornago.resource;
import br.com.proa.flornago.models.Usuario_Empreendedor;
import br.com.proa.flornago.repository.Usuario_EmpreendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/usuario-empreendedor")
public class Usuario_EmpreendedorResource {
    @Autowired
    Usuario_EmpreendedorRepository usuarioEmpreendedorRepository;

    @GetMapping("/usuariosMei")
    public ResponseEntity<List<Usuario_Empreendedor>> getAllUsuariosEmpreendedores() {
        try{
            List<Usuario_Empreendedor>usuarios_empreendedores = new ArrayList<>();
            usuarios_empreendedores.addAll(usuarioEmpreendedorRepository.findAll());
            if(usuarios_empreendedores.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(usuarios_empreendedores, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/InserirUsuariosMei")
    public ResponseEntity<Usuario_Empreendedor> createUsuariosEmpreendedores(@RequestBody Usuario_Empreendedor usuarioEmpreendedor){
        try {
            Usuario_Empreendedor _usuarioEmp = usuarioEmpreendedorRepository.save(new Usuario_Empreendedor(
                    usuarioEmpreendedor.getId_usuarioMei(),
                    usuarioEmpreendedor.getId_usuario(),
                    usuarioEmpreendedor.getTelefone_Comercial(),
                    usuarioEmpreendedor.getCnpj(),
                    usuarioEmpreendedor.getEmail_Comercial(),
                    usuarioEmpreendedor.getLocalizacao(),
                    usuarioEmpreendedor.getHorario_Abertura(),
                    usuarioEmpreendedor.getHorario_Encerramento(),
                    usuarioEmpreendedor.getDs_negocio(),
                    usuarioEmpreendedor.getNr_endereco(),
                    usuarioEmpreendedor.getComplemento_endereco(),
                    usuarioEmpreendedor.getArroba_Negocio()
            ));
            return new ResponseEntity<>(_usuarioEmp, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/AtualizarUsuarioMei/{id_usuarioMei}")
    public ResponseEntity<Usuario_Empreendedor> updateUsuarioEmpreendedor(@PathVariable("id_usuarioMei") Integer id_usuarioMei, @RequestBody Usuario_Empreendedor usuarioEmpreendedor){
        Optional<Usuario_Empreendedor> usuarioEmpDados = usuarioEmpreendedorRepository.findById(id_usuarioMei);
        if(usuarioEmpDados.isPresent()){
            Usuario_Empreendedor _usuarioEmp = usuarioEmpDados.get();
            _usuarioEmp.setId_usuario(usuarioEmpreendedor.getId_usuario());
            _usuarioEmp.setTelefone_Comercial(usuarioEmpreendedor.getTelefone_Comercial());
            _usuarioEmp.setCnpj(usuarioEmpreendedor.getCnpj());
            _usuarioEmp.setEmail_Comercial(usuarioEmpreendedor.getEmail_Comercial());
            _usuarioEmp.setLocalizacao(usuarioEmpreendedor.getLocalizacao());
            _usuarioEmp.setHorario_Abertura(usuarioEmpreendedor.getHorario_Abertura());
            _usuarioEmp.setHorario_Encerramento(usuarioEmpreendedor.getHorario_Encerramento());
            _usuarioEmp.setDs_negocio(usuarioEmpreendedor.getDs_negocio());
            _usuarioEmp.setNr_endereco(usuarioEmpreendedor.getNr_endereco());
            _usuarioEmp.setComplemento_endereco(usuarioEmpreendedor.getComplemento_endereco());
            _usuarioEmp.setArroba_Negocio(usuarioEmpreendedor.getArroba_Negocio());

            return new ResponseEntity<>(usuarioEmpreendedorRepository.save(_usuarioEmp), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/DeletarUsuarioMei/{id_usuarioMei}")
    public ResponseEntity<HttpStatus> deleteUsuarioEmpreendedor(@PathVariable("id_usuarioMei") Integer id_usuarioMei){
        try {
            usuarioEmpreendedorRepository.deleteById(id_usuarioMei);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
