//criaçao do mudulo principal da aplicaçao
var appCliente = angular.module("appCliente",[]); 

//criaçao de contrllers

appCliente.controller("indexController",function($scope,$http){
	
	$scope.nome="Ailton"
	$scope.sobrenome="Ferreira"	
		
	$scope.clientes=[]	
		


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
	
	$scope.carregarClientes();
	
})


