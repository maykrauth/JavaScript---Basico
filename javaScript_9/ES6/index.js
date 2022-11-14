//importar ES6
//import { libro } from './modulos/literatura.js';
import { suma, eleva, nombre } from './modulos/matematicas.js';
///import * as (nombre)hsahgdkj from './modulo/matematicas.js'
import getAutor, { libro } from './modulos/literatura.js';

const sum = suma (4, 12)
console.log(sum);

const potencia = eleva( 2, 8)
console.log (potencia);

console.log(nombre)

console.log(getAutor());

console.log(libro)