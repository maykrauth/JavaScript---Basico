//Ordenar listas .sort()->MODIFICA EL ARRAY
const array = [2, 5, 9, 15, 1, 2, 0, 4]

console.log (array)

array.sort((a, b) => {
    if (a < b){
        return -1
    }else if (a > b){
        return +1
    } else{ //a ===b
        return 0
    }
})
console.log(array)

//Ordenar unicamente arrays numericos 
const arrayNumerico = [1, 2, 85, 156, 3168, 654, 65, 5, 32, 16, 8]
arrayNumerico.sort((a, b) => b - a)
console.log(arrayNumerico)

////arrays de objetos 
const listaObjetos =[
    {nombre: "mayra", edad: 25},
    {nombre: "santiago", edad: 28},
    {nombre: "miguel", edad: 30},
    {nombre: "lucia", edad: 3},
    {nombre: "micaela", edad: 29},
    {nombre: "natasha", edad: 22}
]

listaObjetos.sort ((a, b)=>{
    if(a.edad < b.edad){
        return -1
    }else if (a.edad > b.edad) {
        return +1
    }else {
        return 0
    }
})
//mas corto aun  listaObjeto.sort((a,b)=> a.edad -b.edad)
console.log(listaObjetos)