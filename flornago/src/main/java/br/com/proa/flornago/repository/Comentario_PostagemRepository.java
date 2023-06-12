package br.com.proa.flornago.repository;

import br.com.proa.flornago.models.Comentario_Postagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Comentario_PostagemRepository extends JpaRepository<Comentario_Postagem, Integer> {
}
