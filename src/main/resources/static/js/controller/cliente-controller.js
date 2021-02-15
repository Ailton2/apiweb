//criaçao de contrllers

appCliente.controller("clienteController",function($scope,$http){
	
	//$scope.nome="Ailton"
	//$scope.sobrenome="Ferreira"	
		
	$scope.clientes=[]	
	$scope.cliente={}
		


		// Simple GET request example:
	carregarClientes=function(){
	    $http({
			method : 'GET',
			url : 'http://localhost:8080/apiweb/clientes/'
		}).then(function success(response) {
			$scope.clientes= response.data
		    console.log(response.status)
		}, function error(response) {
			
			   console.log(response.status)
		});		
		
	}
	//metodo para salvar cliente
	$scope.salvarCliente=function(){
	    $http({
			method : 'POST',
			url : 'http://localhost:8080/apiweb/clientes/',data:$scope.cliente
		}).then(function success(response) {
			//$scope.clientes.push(response.data)
			carregarClientes();
			$scope.cliente ={};
		    console.log(response.status)
		}, function error(response) {
			
			   console.log(response.status)
		});		
		
	}
	
	//metodo para excluir cliente
	$scope.deletarCliente=function(cliente){
	    $http({
			method : 'DELETE',
			url : 'http://localhost:8080/apiweb/clientes/'+cliente.id})
		.then(function success(response) {
			pos = $scope.clientes.indexOf(cliente);
		    $scope.clientes.splice(pos , 1);
		}, function error(response) {
			
			   console.log(response.status)
		});		
		
	}
	
	$scope.alterarCliente=function(cli){
		$scope.cliente =angular.copy(cli);
		
	}
	
	$scope.cancelarCliente=function(){
		$scope.cliente ={};
		
	}
	
	//metodo para alterar cliente
	$scope.editarCliente=function(cliente){
	    $http({
			method : 'PUT',
			url : 'http://localhost:8080/apiweb/clientes/'+cliente.id})
		.then(function success(response) {
			pos = $scope.clientes.indexOf(cliente);
		    $scope.clientes.splice(pos , 1);
		}, function error(response) {
			
			   console.log(response.status)
		});		
		
	}
	
	carregarClientes();
	
	
	
});

