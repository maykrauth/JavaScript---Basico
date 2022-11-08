//Uniendo dos listas arrays .concat(lista2)
const array =["hola", 3,false, null]
const array2 =["adios", 7, true, undefined]

console.log(array.concat(array2));
console.log(array);

const array3 = array.concat(array2)
console.log(array3);

//Como unir dos listas con el factor propagacion
console.log(...array3);

const array4 = [...array, ...array2]
console.log(array4);

//ERROR!! EL CONCEOTO DE FACTOR PROPAGACION ESTA MAL
const array5 = [array, array2]
console.log(array5);
