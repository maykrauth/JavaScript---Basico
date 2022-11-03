//Metodos mas utilizados con cedena de caracteres
//Como obtener la longitud de un string
let str ="Hola soy un string";
//propiedad
console.log (str.length);

//Obetener partes de cadena de caracteres
// slice() substring() la ultima ya no  se utiliza en javascript quedo obsoleto substr()
//metodos
let slice_str= str.slice(5 ,12);
console.log (slice_str)

let substring_str = str.substring( 5, 12);
console.log(substring_str)

let substr_str = str.substr (5, 12)
console.log(substr_str)


//Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es mayra"
console.log(cadena);
//Por defecto el metoido replace solo actua solo en la primera instancia (lo primero que encuentre)
console.log(cadena.replace("mayra", "santiago"));

let text_largo = "Tito es un mono cualquiera. A tito no le gusta trepar por los arboles y odia la comer platanos.Él prefiere pasear por el bosque, oler flores y recoger las nueces que se caen de los árboles."
//solo sustituyo uno de los "los"
//Al utilizar string solo reemplaza la primera instancia
console.log (text_largo.replace("los", "cinco")); 

// Para cambiar todas las instancias las expresiones regulares 
//al utilizar la expresion regular /algo/g (global), reemplaza todas las instancias 
console.log(text_largo.replace (/los/g, "cinco"));

