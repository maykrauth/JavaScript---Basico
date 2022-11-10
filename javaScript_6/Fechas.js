//Fechas
const fecha = new Date()
console.log (fecha)

// lOS MESES AL IGUAL QUE LAS LISTAS EMPÍEZAN EN 0
//las fechas se compone de milisegundos 

const fecha2 = new Date(1996, 11, 10, 10, 23, 52, 158)
console.log (fecha2)

const fecha3 = new Date(-2000000000)
console.log(fecha3)

//Definir fechas atraves de string
const fecha4 = new Date("oct 13,1979 13:25:55")
console.log(fecha4)

////////
//Comprar si una nefra es posterior a otra 
console.log (fecha > fecha2)

///comparar a milisegundos .getTime()
const fecha5 = new Date(1996, 11, 10, 10, 23, 52, 158)
//la fecha 2 y la 5 son iguales 
console.log (fecha2 === fecha5);

//Esta es la forma para comprar igualdad entre las fechas
console.log(fecha2.getTime() === fecha5.getTime());


//////Obtener el dia, el mes y el año de una fecha 
//Obtener el dia .getDate()
console.log(fecha2.getDate());

//Obtener un mes .getMonth() le sumamos un mas uno por como toma  las fechas (0-enero, 11-dicembre)
console.log(fecha2.getMonth()+1);

//Obtener el año  .getFullYear() 

console.log(fecha2.getFullYear());

///Podemos mostrar una fecha en un string .toLocalleDateString()=> tenemos que pasarle el local=lenguaje/idioma
//url = https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2)
console.log(fecha2.toLocaleDateString('en-GB'))