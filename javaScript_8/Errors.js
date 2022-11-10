//errores en javaScrpt throw => lanzar
const mifuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error ("El valor debe ser de tipo númerico")
}

//const elDoble = mifuncion ("kd")

//existen palabras claves para prevenir estos casos  try catch() finally{}
//catch tiene una funcion con un parametro
const numero = "8" ;
try {
    //codigo que puede fallar
    console.log("Está ejecutandose de manera correcta")
    const doble =mifuncion (numero)
    console.log(doble)
}catch (e){
    //en caso de fallar, quiero que ejecutes
    console.error(`el valor de e es : ${e}`)
    console.error("ERROR!")
} finally{
    console.log ("se muestra siempre")
}
/////
//errores que podemos ver siempre 
//InternalError, lo lanza el interprete cada vez que hay un problema interno ej: ejercicio de recursividad
//SyntaxError, un fallo de sintaxis
//TypeError, ej:le pasamos una funcion que ya este creada un nuemero y este era un booleano
//RangerError,tratamos de acceder a una posicion que esta sobrepansando
//ReferenceError,no existe la refencia que queremos acceder 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error