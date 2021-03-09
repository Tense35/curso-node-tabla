const { options, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');


console.clear();



crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado') )
    .catch ( err => console.log(err) );