//criaçao do mudulo principal da aplicaçao
var appCliente = angular.module("appCliente",[]); 

//criaçao de contrllers

appCliente.controller("indexController",function($scope,$http){
	
	//$scope.nome="Ailton"
	//$scope.sobrenome="Ferreira"	
		
	$scope.clientes=[]	
	$scope.cliente={}
		


		// Simple GET request example:
	$scope.carregarClientes=function(){
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
			$scope.clientes.push(response.data)
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
	
	$scope.carregarClientes();
	
	
	
})


