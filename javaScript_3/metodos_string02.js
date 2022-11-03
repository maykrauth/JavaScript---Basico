//metodos de cadenas de texto 2
//cuando escribimos con mayuscula o minuscula y el codigo no esta familiarizado podemos utilizar

let input = "SaGitarIo"
let db = "sagitario"

//lo compara nos devuelve un false
console.log(input === db)

//para eso utilizamos 
// toLowerCase() -toUpperCase()
console.log( input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase()=== db.toLowerCase());
console.log(input.toUpperCase()=== db.toUpperCase());

//Formas de concadenar dos cadenas de caracteres
let str_1 ="hola soy la primera cadena."
let str_2 =  "Y esta es la segunda cadena."

console.log(str_1.concat(" ", str_2));
//el signo + tambien se usa con numeros tener cuidado 
console.log( str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

//Eliminar espacios que pueden dejar los usuarios 
let str_3 = "    Hola soy un string con espacios al princio y final.   "
console.log(str_3.length);
//trim() para eliminar espaciode los dos lados
console.log(str_3.trim().length);
//trimStart() elimina solo los espacios vacios del principio 
console.log(str_3.trimStart().length);
//trimEnd() elimina los espacios vacios del final 
console.log (str_3.trimEnd().length);


//Obtener el caracter que hay en cierta posicion 
let str_4 = "Hola soy un tring número 4"
console.log(str_4.charAt(5));

//lista lo podemos ver como ["H", "O", "L", "A", " ", " S"....]
console.log(str_4[5]);

//Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Mayra y me gusta programar. Mi nombre es Mayra y apellido es Krauth"
//vamos a buscar mayra y con index of nos dira en que posicion va estar
console.log(str_5.indexOf("Mayra"))
//si lo buscamos 
console.log(str_5.charAt(9))
//si tenemos en la oracion dos caracteres iguales, la segunda se buscara 
console.log(str_5.lastIndexOf("Mayra"))

