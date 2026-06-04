FORMA ANTIGUA: Estilo CommonJS y Callbacks

### Ejemplo de Sintaxis Antigua (CommonJS)
Usamos `require` para importar módulos:
` ` `javascript
const fs = require('fs');
` ` `

1- CommonJS vs ES Modules: Usar require es como usar un teléfono de disco. Funciona, pero el mundo ahora usa import (el estándar de React y el JavaScript moderno).

2- Callbacks vs Promises: Tu código actual dice: "Node, lee esto y, cuando termines (no importa cuánto tardes), ejecuta esta funcioncita que te paso aquí". Esto puede volverse un caos visual.

3- Flujo de ejecución: El código moderno con async/await se lee de arriba hacia abajo, como una receta de cocina, evitando que el código se desplace tanto hacia la derecha por las llaves {}.
