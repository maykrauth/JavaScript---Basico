//comparaciones

//igualdad, la igualdad se le asigna el componente == dos veces es debil(solo chequea el valor) y ===fuerte 
if (5 == 5) {
    console.log("5 es igual a 5")
}


if (5 === 5) {
    console.log("5 es igual a 5")
}
//== solo compara el valor
//=== compara el valor y el tipo 
//si al let b le "5" eso aria que cambie el tipo y esa un string lo cual genera que el triple igual no funcione
let a = 5;
console.log(typeof a);
let b = 5;
console.log(typeof a);


if (a ==b ) {
    console.log("a es igual a b - Debil")
}

if ( a === b ) {
    console.log ("a es igual a b - Fuerte")
}
//desigual

let c = 4;
let d = "4";
///hay tres tipo de desigualdad !=, las  mayores, menores y las que no son iguales
//Son iguales pero solo en valor, pero !== es diferente el tipo,fuertemente diferntes, pero debilmente iguales. 
if (c != d) {
    console.log ("c es diferente a d - Debil ");
}

if (c !== d) {
    console.log ("c es diferente a d - Fuerte ");
}

//mayores y menores
//comparar si una es mayor que el otro o si uno es menor que el otro 


let max = 10;
let min = 5; 

if (max > min) {
    console.log("max es mayor que min")
}

if (max >= 10) {
    console.log("max es mayor o igual que min")
}

if (min < max) {
    console.log("min es menor que max")
}

if (min <= max) {
    console.log("min es menor o igual  que max")
}