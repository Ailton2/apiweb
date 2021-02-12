package br.com.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.model.Cliente;
import br.com.api.repository.ClienteRepository;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	
	
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<Cliente> buscarClientes(@PathVariable Long id) {
		
		Optional<Cliente> cliente = clienteRepository.findById(id);
		
		return new ResponseEntity<Cliente>(cliente.get(), HttpStatus.OK);
		
		
	}
	
	@PostMapping(value = "/",consumes  = "application/json")
	public ResponseEntity<Cliente> salvarCliente(@RequestBody Cliente cliente){
		
		Cliente clienteSalvo = clienteRepository.save(cliente);
		
		
		return new ResponseEntity<Cliente>(clienteSalvo, HttpStatus.CREATED);
	}

	
	@GetMapping(value = "/" ,produces = "application/json")
	public ResponseEntity<List<Cliente>>  buscarTodos(){
		
		List<Cliente> list = (List<Cliente>) clienteRepository.findAll();
		
		return new ResponseEntity<List<Cliente>>(list, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Cliente> deletarCliente(@PathVariable Long id){
		
		clienteRepository.deleteById(id);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
		
	}
}
