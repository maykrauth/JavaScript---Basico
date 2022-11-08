//si solo algunos de los elemtos de la lista cumplen la condicion 
//.some ()
//te de vuelve true si un valro cumple
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]
const res = array.some(valor => valor < 0)

console.log(res)

const existe =array.some(valor => valor === 7865)

console.log (existe)

const listaObjetos =[
    {nombre: "mayra", edad: 25},
    {nombre: "santiago", edad: 28},
    {nombre: "miguel", edad: 30},
    {nombre: "lucia", edad: 3},
    {nombre: "micaela", edad: 29},
    {nombre: "natasha", edad: 22}
]
const existmayra = listaObjetos.some (persona => persona.nombre === "mayra")
console.log(existmayra)

const existmarcos = listaObjetos.some (persona => persona.nombre === "marcos")
console.log(existmarcos)
// Como obtener una lista a partir de un objeto iterable string

const str = "Hola soy mayra"
console.log(str [5])

const ar_str = Array.from(str)
console.log(ar_str)

const set =new Set ([2, 3, "hola", 4])
const ar_set =Array.from(set)
console.log (ar_set)

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log (ar_keys)