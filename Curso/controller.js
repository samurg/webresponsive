var app = angular.module("app", ['LocalStorageModule'])
    .controller("ToDoController", function ($scope, localStorageService) {
        if (localStorageService.get("angular-todoList")) {
            $scope.todo = localStorageService.get("angular-todoList");
        }
        else{
            $scope.todo = [];
        } 
        /*
            {
                usuario: 'nombre del usuario',
                descripcion: 'Tema 1 Superado',
                fecha: '3-07-17 2:00pm'
            }
        */
        $scope.$watchCollection('todo',function(newValue, oldValue){
            localStorageService.set("angular-todoList", $scope.todo);
        });
        $scope.addActv = function(){
            $scope.todo.push($scope.newActv);
            $scope.newActv = {};
        }
    });
/* 
    Este modulo de angular utiliza la libreria local storage.
    Este código es capaz dde comunicarse con el fomulario de la página de inicio al curso
    sacando por pantalla en forma de lista los valores recogidos y además almacenandolos 
    en el pc, de esta forma el usuario podra llevar al dia su curso, guardando los temas 
    que ya a superado/visto.
*/