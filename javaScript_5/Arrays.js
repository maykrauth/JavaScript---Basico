//Listas (arrays, arrelos, vectores ...)
let var1 = 45;
let arrays = [1, "hola", false, {id: 5}, null, undefined, var1]

console.log(arrays);

//Acceder a los valores array a traves de su posicion
//array [indice] => 0, 1, 2, 3, 4, 5, ...
console.log(arrays[0]);
console.log(arrays[1]);
console.log(arrays[2]);
console.log(arrays[6]);

//metodos para introducir nuwvos valores en nuestros arrays
//.push() .unshift() => Mutan el valor del array

// valores al final -> push
arrays.push("final", 3)
console.log(arrays);

//valores al principio -> Unshift
arrays.unshift("inicio", {id : 7})
console.log(arrays);
//Metods para eliminar valores de la arrays
//.pop() .shift() => Mutan el valor del array

const array2 = [1, 2, "hola", false];
//valores al final -> pop
array2.pop();
console.log(array2);

//valores al principio ->shift
array2.shift();
console.log(array2);

//Metodo para eliminar, modificar o añadir valores en nuestro arrays
//.splice (x, y, z)
const array3 =[1, 2, 3, 4, 5, 6]
//Eliminar valores .space (indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3);

//Añadir valores .splice (indice, 0, valores)
array3.splice( 2,  0, "hola");
console.log(array3);
//modificar valores .splice (indice, 1, valores)
array3.splice(2, 1, 3);
console.log(array3);
