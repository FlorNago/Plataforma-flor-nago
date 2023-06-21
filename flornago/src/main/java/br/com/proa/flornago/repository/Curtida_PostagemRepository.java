package br.com.proa.flornago.repository;

import br.com.proa.flornago.models.Curtida_Postagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Curtida_PostagemRepository extends JpaRepository<Curtida_Postagem, Integer> {
}
