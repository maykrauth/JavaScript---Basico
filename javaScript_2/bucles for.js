//Declaracion de bucles For se declara :
/* al inicio del bucle,
se va ejecutar todo lo que este denttro de la llave mientras que la condicion se vaya satisfaciendo y 
se va ejecutar la actualizacion*/
/*for("inicializacion; condicin; actualizacion"){
    esto es el bucle
}*/
/* tanto en java como js la funcion  i=i+1 se puede acortar de otras maneras 
1 += 1
i++
*/
for (let  i = 0; i < 10; i++) {
    console.log(i);
}
for (let  i = 0; i < 10; i +=3) {
    console.log(i);
}

//lista de objetos
//longitud de la lista
let lista =[1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0;i < lista.length; i++) {
    console.log(lista[i] * 2);  
}
/*similar al primero pero mucho mas especifico, 
esta obteniendo en cada una de las ejecuciones del bucle esta declarando valor 
a cada uno de los elementos de la lista*/
//Estructura for..of
for (let valor of lista) {
    console.log(valor);
    
}

//Estructura forEach, funcion flecha

lista.forEach(valor=> {
    console.log(valor);
})

/*Existen estructuras for para ir evaluando cada uno de 
los atributos de un objeto o los parametros de un objeto */
//Estructura for..in
let persona={
    nombre: "mayra",
    apellido: "Krayth",
    edad: 25,
    isDeveloper: true,
}
/*al ser propiedades dinamicas 
variable*/
let prop = "edad";
console.log(persona[prop]);

console.log(persona.nombre);

for (let propiedad in persona){
    console.log (propiedad);
    console.log (persona[propiedad])
}