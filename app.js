const { crearArchivo } = require('./helpers/tablas');
const argv = require('./config/yargs');
const colors = require('colors');

// Imprimir la tabla del 5 utilizando un cilco for
console.clear();

//console.log( process.argv );
//console.log( argv );

//console.log('Tabla: yargs', argv.tabla);

/* La manera de consultar internamente donde se guardan los elementos ejecutados
y donde encontrarlos y la utilización de la función (process.argv) */
// const [ , , arg3 = 'tabla=5' ] = process.argv;
// const [ , tabla = 6 ] = arg3.split('=');

//console.log(tabla);

//let tabla = 2;

crearArchivo( argv.t, argv.m, argv.l )
     .then((nombreArchivo) => { console.log(nombreArchivo.bgRed, 'fue creada'.bgRed);})
     .catch((error) => { console.log(error);});


