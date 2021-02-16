package br.com.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.model.Estado;

@Repository
public interface EstadoRepository extends CrudRepository<Estado, Long> {
	

}
