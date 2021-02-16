package br.com.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.api.model.Estado;
import br.com.api.repository.EstadoRepository;

@Controller
@RequestMapping(value = "/estados")
public class EstadoController {
	
	@Autowired
	private EstadoRepository estadoRepository;

	
	@PostMapping(value = "/",produces = "application/json")
	public ResponseEntity<Estado> salvarEstado(@RequestBody Estado estado){
		
		Estado est= estadoRepository.save(estado);
		
		return new ResponseEntity<Estado>(est, HttpStatus.OK);
		
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Estado> buscarEstadoId(@PathVariable Long id){
		
		Optional<Estado> est = estadoRepository.findById(id);
		
		return new ResponseEntity(est, HttpStatus.OK);
		
	}
	
	
	@GetMapping(value = "/",produces = "application/json")
	public ResponseEntity<List<Estado>> buscarTodos(){
		
		List<Estado> list = (List<Estado>) estadoRepository.findAll();
		
		return new ResponseEntity<List<Estado>>(list, HttpStatus.OK);
	}
	
}
