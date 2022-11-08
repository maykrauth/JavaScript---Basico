//Iterar los valores de una lista, como ir accediendo a los valores de las arrays
const array = ["hola", 2, 3, 90, false, undefined]

//forma antigua (poco eficiente)
for(let i = 0; i < array.length; i++) {
    console.log(array [i])
}

//forma ES6 (mas eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 77, 2, 3, 93, 19]
arrayNums.forEach (valor =>{
    suma += valor;
    console.log  (valor)
})
console.log (suma);

//busqueda de un valor dentroi de una lista .find()
//Quiero encontrar el elemento 90
const variable = array.find( valor => {
    if(valor === 90){
        return true
    }
})
console.log( variable)

const listaObjetos =[
    {nombre: "mayra", edad: 25},
    {nombre: "santiago", edad: 28},
    {nombre: "miguel", edad: 30},
    {nombre: "lucia", edad: 3},
    {nombre: "micaela", edad: 29},
    {nombre: "natasha", edad: 22}
]
const objeto = listaObjetos.find(  o =>{
    if(o.nombre ==="miguel"){
        return true
    }
})

console.log(objeto.edad)

//mas facil 
const obj = listaObjetos.find(  o =>{
    return o.nombre === "mayra"
})
console.log(obj.edad)

//eficiente 
const objet = listaObjetos.find(  o => o.nombre === "santiago")
console.log(objet.edad)

//con menos lineas 
const { edad } =listaObjetos.find(o => o.nombre === "lucia")
console.log(edad);
