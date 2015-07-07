# ¿Que es angularjs?

AngularJS es un framework de desarrollo de aplicaciones Web en JavaScript basado en el patrón ***Modelo-Vista-Controlador***. A diferencia de otros métodos, AngularJS nos proporciona una herramienta sencilla para hacer que el código HTML5 sea dinámico, es decir, que se actualice en tiempo real, gracias a las técnicas de data-binding. Además, AngularJS está preparado para tests y proporciona métodos para combinarlo fácilmente con Testacular (es un modulo de node para testear codigo javascript).

## Modelo Vista Controlador en AngularJS

El patrón Modelo Vista Controlador se sigue en AngularJS, separando la parte visual de la funcionalidad y las estructuras de datos.

El archivo HTML de la aplicación representa la vista y debe ser separada del controlador y el modelo.

El controlador es un objeto JavaScript que debe ser importado en el HTML que se encarga de capturar los eventos de la vista y realizar las acciones pertinentes sobre el modelo para modificar los datos.

El modelo es un objeto de JavaScript nombrado como elemento del controlador $scope. Contiene los datos a los que va a acceder la vista y deberá contener tambien métodos de acceso y modificación para separar totalmente la forma a la que se acceden o modifican los datos del controlador.

Para establecer un enlace bidireccional de datos entre la vista y el controlador: un cambio en la vista se refleja automáticamente en el controlador y viceversa. Veamos la sintaxis angular que usaremos:

- con `ng` indicamos a las etiquetas de la vista que van a llevar sintaxis de angular.

- `ng-app`: indica que nuestra aplicación es AngularJS.

- `ng-model`: define un modelo.

[Ejemplo del modelo-vista-controlador](../Ejemplos/clase 1/Index.html)

## ¿Que es Data-binding?

Data binding es un mecanismo mediante el cual podemos enlazar los elementos de la interfaz de usuario con los objetos que contienen la información a mostrar. El caso más típico de data binding es el enlazar un control de la interfaz de usuario con un valor o registro de una base de datos.

Ejemplos de Data-binding:

1. Utilizando la directiva ng-bind
```html
<p> Hello <span ng-bind="name"></span>! </p>
```

2. Sin utilizar la directiva ng-bind
```html
<p>
	Hello {{name}}!
</p>
```
