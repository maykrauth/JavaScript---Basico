//funciones tipo flecha-funciones anonimas
//=> devuelve un valor, se pueden guardar en let, var y const
const array = [1, 5, 12, 21, 15, 58, 90]

const array2 = array.map((valor)=> valor *2)

console.log(array2)

/*const dobleDelValor = valor => {
    return valor * 2
}
es lo mismo que decir */
const dobleDelValor = valor => valor * 2

console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)
console.log(array3)

function doble(valor) {
    return valor * 2
}