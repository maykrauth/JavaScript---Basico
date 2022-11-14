function suma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}
//base al exponente
function eleva(a, b) {
    return a ** b
}

//factorial al cual le pasamos un numero ay va devolver el factorial
//ej : factorial de  5: 5 * 4 * 3 * 2 * 1
//vamos hacer un bucle for
//for (let i = 1; i <= a ; i++) i va a valer 1 desp va seguir creciendo
function factorial(a) {
    let factorial = 1;
    for(let i = 2; i <= a; i++){
        factorial *= i
    }
    return factorial;
}
/////
//Todos los archivos por defecto tienen un objeto llamado module(objeto global)
//Desde module le podemos pasar una propiedad exports

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial 
}