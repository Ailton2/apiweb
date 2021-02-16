appCliente.controller("estadoController",function($scope,$http){
	
	
	$scope.estado={}
	$scope.estados=[]
	
	
	
		
	//carrega os estado ja cadastrados no banco	
	carregarEstados=function(){
		$http({
		method:'GET',
		url   :'http://localhost:8080/estados/'
		})
		.then(function sucess(response){
			$scope.estados=response.data
			console.log(response.data)
			
		},function error(response){
			console.log(response.status)
		})
		
		
		
		
	}	
	
	
	$scope.salvarEstados=function(){
	
		$http({method:'POST',
			      url:'http://localhost:8080/estados/',data:$scope.estado})
		.then(function(response){
			
			$scope.estado={}
		},function(response){
			
			console.log(response.status)
		});	      
		
		
		
		
	}
	
	
	carregarEstados();
	
	
});