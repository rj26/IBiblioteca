angular.module('BibliotecaController',[])

.controller('ibibliotecaCtrl',function($scope,bookService){

	$scope.books = bookService.getBooks();

})
