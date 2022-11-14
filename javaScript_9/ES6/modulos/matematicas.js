//ES6 con la propiedad export ya lo estamos haciendo publica las funciones 
export function suma(a, b) {
    return a + b
}

export function multiplica(a, b) {
    return a * b
}
//base al exponente
export function eleva(a, b) {
    return a ** b
}

export function factorial(a) {
    let factorial = 1;
    for(let i = 2; i <= a; i++){
        factorial *= i
    }
    return factorial;
}
export const nombre = "matematicas"

