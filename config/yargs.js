
const argv = require('yargs')
.option('t', {
     alias: 'tabla',
     type: 'number',
     demandOption: true,
     describe: 'Número a multiplicar'
})
.option('l', {
     alias: 'longitud',
     type: 'number',
     default: 10,
     describe: 'Cantidad de veces a multiplicar'
})
.option('m', {
     alias: 'mostrar',
     type: 'boolean',
     default: false,
     describe: 'Mostrar la tabla '
})
.check(( argv, options) => {
     if(isNaN(argv.t)) {
          throw 'Debe ingresar un número';
     } else {
          return true;
     }
})
.argv;

module.exports = argv;