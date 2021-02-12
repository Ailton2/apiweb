package br.com.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.model.Cliente;

@Repository
public interface ClienteRepository  extends CrudRepository<Cliente, Long> {

	
}
