package br.com.proa.flornago.repository;

import br.com.proa.flornago.models.Logradouro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogradouroRepository extends JpaRepository<Logradouro, Integer> {
}
