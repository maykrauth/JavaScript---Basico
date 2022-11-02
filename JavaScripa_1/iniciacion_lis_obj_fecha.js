//¿Que son las listas, objetos y fechas? ¿como se definen?
/*listas, se puede llamar array o arreglo.
una lista no es mas que un conjunto de variables puestas en orden, agregando las listas empiezan en 0,1,2,etc*/
const lista = [1, "hola", true, undefined, null];
/*new array, tienen varias opciones  le podemos pasar un number,
que nos va a decir que logitud va hacer esta nueva lista que va estar llena de valores vacios,
o los items de la list 1*/
const lista2=new Array(2, "hola", true, undefined, null);
const lista3=new Array(3);
const lista4=[lista, lista2, lista3];
lista3[0]="soy el primer elemento, index 0";


console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


/*objeto javaScript esta orienda a objetos,
los objetos de js son representaciones de datos de objetos de la visa real
Se definio el objeto movil con 4 atributos,una array contactos y
tambien se puede definir un objeto dentro de otro objeto*/
const movil={
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite:false,
    contactos:["Mayra", "Santiago","Charli"],
    tarjeta:{
        marca:"BBVA",
        almacenamiento: 32,
    }
    
}
//agregando un nuevo propiedades aunque nop este dentro del objeto y editar el valor de otras propiedades
movil.anyo = 2022;
movil.marca = "Samsung";

console.log(movil.tarjeta);
console.log(movil.contactos);
console.log(movil.tarjeta.marca);
console.log(movil.anyo);
console.log(movil.marca)

//fechas se pueden definir de 3 maneras diferentes
//lioibrerias de apoyo Moment.js
//fecha en el momento que se haya definido esta variable 
const ahora= new Date();
console.log(ahora);
/* se podria crear una nueva fecha basandonos en los milisegundos segundos desde,
el 1 de enero 1970(se considera la fecha 0)*/
const fecha_milis = new Date(10);
console.log(fecha_milis)
// se escribe en ingles 
const fecha_cadena= new Date("march 25 2020");
console.log(fecha_cadena);
// los meses en la fecha, aprecen igual que en las listas osea en 0(enero) empezaria a contar.
const fecha_valores= new Date(2022, 10, 2);
console.log(fecha_valores);
// vamos a obtener el dia, el mes y el año. al empezar el mes en 0, y lo queremos en formato "humano" debemos agregar el +1
const dia = ahora.getDate();
const mes = ahora.getMonth() +1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo)
