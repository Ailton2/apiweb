//criaçao do mudulo principal da aplicaçao
var appCliente = angular.module("appCliente",['ngRoute']); 


appCliente.config(function ($routeProvider) {
   $routeProvider
   .when("/clientes",{templateUrl:"view/cliente.html",controller:"clienteController"})
	.otherwise({rediretTo:'/'})
})

