angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
     
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/ibiblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/author.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/curriculum.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/book.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'Diminutos', year: '2016', author: 'Willyrex y Staxx', isbn: '9788499985640', editorial: 'Temas De Hoy', cover: 'http://www.planetadelibros.com/usuaris/libros/fotos/216/m_libros/portada___201606141250.jpg' }, 
      { title: 'Wigetta Y Los Gusanos Guasones', year: '2016', author: 'Vegetta777 y Willyrex', isbn: '9788499985534', editorial: 'Temas De Hoy', cover: 'http://www.planetadelibros.com/usuaris/libros/fotos/214/m_libros/portada_wigetta-y-los-gusanos-guasones_vegetta777_201606061157.jpg' },       
      { title: 'Cazadores De Sombras: Ángel Mecánico', year: '2010', author: 'Cassandra Clare', isbn: '9788408096238', editorial: 'Planeta', cover: 'http://vignette3.wikia.nocookie.net/shadowhunters/images/4/4d/1-_%C3%81ngel_Mec%C3%A1nico.jpg/revision/latest?cb=20130104002532&path-prefix=es' },       
      { title: 'Harry Potter Y El Legado Maldito', year: '2016', author: 'J.K. Rowling', isbn: '9788498387544', editorial: 'Salamadra', cover: 'http://image4.casadellibro.com/a/l/t0/44/9788498387544.jpg' },       
      { title: 'Un Monstruo Viene A Verme', year: '2016', author: 'Patrick Ness', isbn: '9788416588114', editorial: 'Nube De Tinta', cover: 'http://es.web.img3.acsta.net/c_215_290/pictures/16/06/17/14/27/277158.jpg' }     
      ];     
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});