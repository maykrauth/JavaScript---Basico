//funciones, como se declaran y como se utiliza
// Las funciones son bloques de codigo, que se ejecutan con un fin especifico 
//funcion saludar 


const nom = "Mayra"

//saludar("miguel")
saludar (nom)

function saludar (nombre) {
    console.log(`Hola ${nombre}`)
}

////Dato primitivo 
let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}

//// Datos como objetos
//al cambiar el objeto apellido, nos cambia el objeto original ERROR
/*NO DIFENCIAR, CUANDO SE ESTA PASANDO UNA VARIABLE POR VALOR,DE
 CUANDO SE ESTA PASANDO UNA VARIABLE POR PREFERENCIA  */
let persona = {nombre: "Mayra", apellido: "Krauth"}
console.log(persona)
saludarP(persona)

console.log(persona)

function saludarP(objeto) {
    objeto.apellido = "Espinoza"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}
//UN VALOR POR DEFECTO PARAMETROI OPCIONALES 

function saludarUsuario(persona = "Buenos dias") {
    console.log(persona)
}
saludarUsuario()

function imprimeNumero(numero = 7) {
    console.log (numero)
}
imprimeNumero(9)

///// Definir funciones con pametros indeterminados (factor de propagacion como parametros)

function imprimir(...params) {
    console.log(params)
}

imprimir(1, 2, 3, 4, "hola", {id: 9})

///suma return nos devuelva un valor
function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const sum = suma(1, 2, 3, 5, 15, 36,)

console.log(sum)

//////
// ambito de una funcion parametros a y b 
/* adentro de las llaves podemos definir una variable que este por fuera de las llaves 
pero no podemos sacar la variable si la misma se  puso adeentro */
let variable = "Hola"

function multiplicar( a = 0, b = 0) {
    console.log(variable)
    let variable_int = 'adios'
    console.log(variable_int)
    return a * b
}

console.log(multiplicar(5, 5))