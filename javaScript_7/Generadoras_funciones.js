//funciones generadoras id incremental
//yield id nos da un numero 
function* generaId(){
    let id = 0;
    while(true){
        id++
        if (id === 10) {
            return id
        }
        yield id// Se queda esperando hasta que se vuelva a llamar
    }
}

//Guardamos la funcion generadora dentro de una constante
//gen es un elemento generator, para obtener un valor tenemos que llamar .next()
// nos devuel un objeto .value
const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


