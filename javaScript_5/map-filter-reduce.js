//diferentes metodos 
//.map() .filter() .reduce()
const array = ["San Sebastián", "Madris", "Barcelona", "Alicante", "Bilbao"]

const val =array.forEach ( v =>{
    console.log (v)
    return 4
})
console.log (val)

//agregar contenido a las listas
const newArray =array.map((valor, indice ) => {
    console.log (indice)
    return `${indice + 1} - ${valor}`
})
console.log(newArray)
/*mas eficiente 
const newArray =  array.map((valor, indice)=>`${indice + 1} - ${valor}` )
console. log(newArray) */

const listaObjetos =[
    {nombre: "mayra", edad: 25},
    {nombre: "santiago", edad: 28},
    {nombre: "miguel", edad: 30},
    {nombre: "lucia", edad: 3},
    {nombre: "micaela", edad: 29},
    {nombre: "natasha", edad: 22}
]
const personas =listaObjetos.filter (obj =>{
    if (obj.edad >20 ){
    return true 
    } else {
        return false
    }
})
console.log(personas)


const personasmayores =listaObjetos.filter(obj => obj.edad > 25)
console.log(personasmayores)

const nuevalista = listaObjetos.filter(obj => obj.nombre !== "mayra")
console.log(nuevalista)

const valores =[3, 56, 23, 5, 90, 100]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado +cur
})
console.log(suma)