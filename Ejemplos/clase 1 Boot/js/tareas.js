"use strict";

var app = angular.module('Lista', [])

ControladorTareas.$inject = ['$scope'];

function ControladorTareas($scope) {

  $scope.tareas = [
      { texto: 'Ser Super Heroico con AngularJs', hecho: true },
      { texto: 'Crear una aplicación con AngularJs', hecho: false }
    ]

  $scope.agregar = function () {
    $scope.tareas.push({texto: $scope.NuevaTarea, hecho: false})
    $scope.NuevaTarea = "";
  }

  $scope.restan = function () {
    var cuenta = 0;
    angular.forEach($scope.tareas, function(tarea) {
      cuenta += tarea.hecho ? 0 : 1;
    })
    return cuenta;
  }

  $scope.eliminar = function () {
    var tareasviejas = $scope.tareas;
    $scope.tareas = [];
    angular.forEach(tareasviejas, function(tarea) {
      if (!tarea.hecho) {
        $scope.tareas.push(tarea);
      }
    })
  }

}

app.controller('ControladorTareas', ControladorTareas)
