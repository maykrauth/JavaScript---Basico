//conjuntos sets
//vistas 
const array = [1, 2, 3, 4, 5, 6, 1, 2, 3,]
const miSet = new Set(array)

console.log(array)
console.log(miSet)
//los arrays, es un conjunto ordenado de valores y objetos 
//los sets, es un conjunto no ordenado de valores unicos/elementos unicos 
//añadir valores .add()

miSet.add(9)
console.log(miSet)

//.delete() eliminar

miSet.delete(2)
console.log(miSet)

//eliminar todos los valores .clear()
/* miSet.clear()
console.log(miSet)*/

// .has() si mi set tiene un valor simitar al includes
console.log(array.includes(2))
console.log(miSet.has(6))

//tamaño del set propiedad .size
console.log(miSet.size)

//reiteracion dentro del set .forEach

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet[1])