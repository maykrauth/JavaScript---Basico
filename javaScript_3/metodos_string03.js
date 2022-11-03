//Métodos de cadenas de text caracteres  (parte 3)
//https://regexr.com para seguir practicando 

let text_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia la comer platanos.Él prefiere pasear por el bosque, oler flores y recoger las nueces que se caen de los árboles."

//buscamos saber cuantas veces se repite la palabra(cadena de carcteres)
console.log(text_largo.match(/no/g));

//Buscamos si existe o no la palabra del text_largo booleano
console.log(text_largo.includes("odia"));

//busqueda muestra si es o no la primera palabra de texto, Es importante tener en cuenta si es minuscula o mayuscula.
//siempre entre comillas 
 console.log(text_largo.startsWith("Tito"));
 console.log(text_largo.endsWith("árboles."));