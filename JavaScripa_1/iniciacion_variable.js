var variable;
let variablelet_;

//const constante; ctrl+} te lo comenta automaticamente 
const constante="Hola soy una constante";

console.log(constante)
//que pasa si quiero cambiar la constante
//constante="adios", nos marca el error assignment to constant variable

// variable puede cambiar su valor
var a = 1;
console.log(a);

a = 4;
console.log(a);
let b=3;
console.log(b); 

b=5;
console.log(b); 
//var afecta a todo el codigo, y let afecta el bloque donde este siendo declarado
//no es buena practica usar el mismo nombre , aunque enten en distintos bloques
var variable="Hola soy una variable VAR";
for (var i = 0; i < 3;i ++){
    var variable=" Hola soy la segunda variable"
}

console.log(variable)

let variablelet="Hola soy una variable let";
for (var i = 0; i < 3;i ++){
    let variablelet=" Hola soy la segunda variable let"
}
console.log(variablelet);
///no son  buenas practicas
var num = 4;
console.log(typeof num);

num ="Hola soy un num";
console.log(typeof num);