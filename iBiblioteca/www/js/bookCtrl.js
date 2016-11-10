angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'Diminutos', year: '2016', author: 'Willyrex y Staxx', isbn: '9788499985640', editorial: 'Temas De Hoy', cover: 'http://www.planetadelibros.com/usuaris/libros/fotos/216/m_libros/portada___201606141250.jpg' }, 
      { title: 'Wigetta Y Los Gusanos Guasones', year: '2016', author: 'Vegetta777 y Willyrex', isbn: '9788499985534', editorial: 'Temas De Hoy', cover: 'http://www.planetadelibros.com/usuaris/libros/fotos/214/m_libros/portada_wigetta-y-los-gusanos-guasones_vegetta777_201606061157.jpg' },       
      { title: 'Cazadores De Sombras: Ángel Mecánico', year: '2010', author: 'Cassandra Clare', isbn: '9788408096238', editorial: 'Planeta', cover: 'http://vignette3.wikia.nocookie.net/shadowhunters/images/4/4d/1-_%C3%81ngel_Mec%C3%A1nico.jpg/revision/latest?cb=20130104002532&path-prefix=es' },       
      { title: 'Harry Potter Y El Legado Maldito', year: '2016', author: 'J.K. Rowling', isbn: '9788498387544', editorial: 'Salamadra', cover: 'http://i1.wp.com/www.canteradelasdescargas.com/wp-content/uploads/2016/09/harry-potter-y-el-legado-maldito-j-k-rowling-traduccion.jpg?resize=185%2C300' },       
      { title: 'Un Monstruo Viene A Verme', year: '2016', author: 'Patrick Ness', isbn: '9788416588114', editorial: 'Nube De Tinta', cover: 'http://es.web.img3.acsta.net/c_215_290/pictures/16/06/17/14/27/277158.jpg' }
      ];   