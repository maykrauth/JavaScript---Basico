//trabajar con objetos 
const obj ={
    id: 4,
    nombre: "Juan",
    apellido:"Gonzales",
    isDeveloper: true,
    libros_favoritos:["El metodo", "El codigo  de la manifestación"],
    "4-juegos":[1, 2, 3, 4]
}

console.log(obj["4-juegos"])
console.log(obj.id)

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj;
console.log(obj2);

//al definir el objeto 2 igual que al objeto mantiene las propiedades los dos estan en el mismo sitio de memoria ¿que pasa si cambiamos ?

obj2.nombre = "Pedro"
console.log(obj2.nombre);

//cambia secuencualmente el nombre de los dos objetos aunque solo cambiamos el obj2
console.log(obj.nombre);

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)

///duplicar un objeto {...}
const obj3 ={...obj}

console.log (obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Charlie"

console.log (obj.nombre)
console.log(obj3.nombre)

///////////
//Como ordenar listas de objetos en funcion de una propiedad 
const listaPeliculas = [
    {titulo:"Lo que el viento se llevo", anyo: 1939},
    {titulo:"Titanic", anyo: 1997},
    {titulo:"Mohana", anyo: 2016},
    {titulo:"El efecto mariposa", anyo: 2004},
    {titulo:" Ted", anyo: 2012}
]
console.log (listaPeliculas);

 //El metodo .sort() MUTA EL VALOR ORIGINAL DE LA LISTA 
listaPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log (listaPeliculas)