const fs = require('fs');
// Importamos 'fs', la herramienta nativa para manipular archivos en tu PC.
const manejador= require('./errores/gestionErrores.js');
/* ../ significa: "Sube un nivel (sal de la carpeta actual)".
./ significa: "Busca dentro de la carpeta donde estoy". */
const contarPalabras = require('./1-SeparandoFunciones.js');

const contenidoArchivo = process.argv;
const argumentos = contenidoArchivo[2]; 

fs.readFile(argumentos, 'utf-8', (error, texto) => {
    // 1. Verificación inicial: Si Node detectó un problema al abrir el archivo, 
    // "lanzamos" ese error para que se encargue el bloque catch.
    try {
         if(error)
            throw error; 
    // 2.significa que no hubo errores y podemos procesar el texto.
        contarPalabras(texto);
    }catch (error) {
    console.log(manejador(error));
    }
});

//para ejecutar: npm init -y   Crea: el archivo.json 