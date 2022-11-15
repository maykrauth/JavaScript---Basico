//Objeto
const persona = {
    nombre: "Mayra",
    edad: 25,
    isDeveloper: true,
    saludo: function () {
        console.log('Hola')
    }
}
console.log(persona)

//creando otra persona
const Newpersona = {
    nombre: "Santiago",
    edad: 29,
    isDeveloper: true,
    saludo: function () {
        console.log('Hola')
    }
}
console.log(Newpersona)
//Es demasiado codigo una forma mas facil es creando una funcion 
//funcion factory
const creaPersona = (nombre, edad, isDeveloper) =>{
    return{
        nombre, //nombre :nombre,
        edad,
        isDeveloper,
        saludo: function (){
            console.log('Hola')
        }
    }
}

const nuevo = creaPersona("charlie", 20, false)
console.log(nuevo)

const nuevo_2 =creaPersona("Juan", 52, false)
console.log(nuevo_2)