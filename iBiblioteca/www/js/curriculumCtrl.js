angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: 'Desde Los 3 Años - Hasta La Fecha', description: 'Estudiante' },
	{ date: '2008-2010', description: 'Sexador de pollos lol' }
]; 
})