/*Un modulo no es mas que una parte del codigo que se puede reutilizar 
en diferentes partes de nuestro pograma/desarrollo*/
//Para tener organizado nuestras carpetas de js separamos las funciones de los resultados 
//Debemos exportar el archivo para que se pueda ejecutar la funcion 
//formas de importar/exportar modulos
//1. CommonJS -(palabra clave) require ...es el que tenemos por defecto en este archivo 
//2. Import ES6 - import
//funciones esten disponibles desde el exterior 
//Debemso importar las funciones 
//const moduloMatematicas = require ("./modulo/matematica.js")
//const fact = moduloMatematicas.factorial(5);
//console.log(fact)
//declarar variables con la nueva notacion de js 
//const{ factorial, suma } = moduloMatematicas
//podemos hacerlo aun con menos lineas
const {factorial, suma} = require ("./modulo/matematicas")

const fact = factorial(5);
console.log(fact)

const sum = suma (12, 90);
console.log (sum) 