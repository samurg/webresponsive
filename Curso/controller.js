var app = angular.module("ToDoList", ['LocalStorageModule'])
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
