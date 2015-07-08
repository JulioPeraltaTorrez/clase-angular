
## ¿que es "use strict;", que implica, y que tan relevante es?

Algunas personas agregan "use strict"; en su código JavaScript, y algunos analizadores de código, como JSLint de Crockford, nos pueden lanzar un error del tipo:

```
Problem at line 1 character 1: Missing "use strict" statement.
```

El modo estricto es una nueva característica de ECMAScript 5 (mas conocido como JavaScript) que permite a un programa, o función, operar en un contexto de operaciones "estricto". Esto previene ciertas acciones y lanza mas excepciones.

Esto nos ayuda en un varias formas:

- Atrapa muchos errores comunes de programación, lanzando excepciones.

- Previene, lanzando excepciones, que acciones relativamente inseguras sean llevadas a cabo, como obtener acceso al objeto global.

- Deshabilita algunas características que son confusas o que no son recomendables.

- Ejemplo: Si usas foo = "bar" sin definir foo primero, tu código va a fallar.
