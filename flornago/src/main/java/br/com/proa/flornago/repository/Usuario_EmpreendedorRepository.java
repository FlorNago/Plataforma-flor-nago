package br.com.proa.flornago.repository;

import br.com.proa.flornago.models.Usuario_Empreendedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Usuario_EmpreendedorRepository extends JpaRepository<Usuario_Empreendedor, Integer> {
}
