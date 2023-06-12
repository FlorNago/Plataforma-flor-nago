package br.com.proa.flornago.repository;

import br.com.proa.flornago.models.Usuario_Seguidor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Usuario_SeguidorRepository extends JpaRepository<Usuario_Seguidor,Integer> {
}
