package br.com.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {
	
	
	
	@GetMapping(value = "/")
	public void buscar() {
		
		System.out.println("chamou");
		
	}

}
