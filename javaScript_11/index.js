/* Depuración ejecutando el codigo de una forma controlada
para ver si se esta comportando tal y como debe*/
/*visual studio code podemos ejecutar los cambios como si estuvieramos viendolo en la consola  */
const persona = {
    nombre: "Mayra",
    edad: 25
}
console.log(persona)

function obtenDobleEdad(edad) {
    return 2 * edad
}
const DobleEdad = obtenDobleEdad(persona.edad)
console.log(DobleEdad)
function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numeros = edad + i;
        console.log(numeros)
        arrayNums = [...arrayNums, numeros]
    }
    return arrayNums
}
const array = obtenArray(persona.edad)
console.log (array)