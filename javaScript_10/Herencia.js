//Inheritance -Herencia con respecto a las class
//atributo protegido con herencia
class persona {
    _nombre
    _edad
    _isDeveloper
    constructor(nombre, edad, isDeveloper){
        this._nombre = nombre
        this._edad = edad
        this._isDeveloper= isDeveloper
    } 
    saludo(){
        console.log(`Hola, me llamo ${this._nombre},tengo ${this._edad} años`)
    }
}
///Con la herencia creamos otro extends, derivada de la clase original persona 
class Desarrollador extends persona {
    constructor(nombre, edad, isDeveloper, lenguaje){
        super (nombre, edad, isDeveloper)
        this.lenguaje = lenguaje
    }
    //sobre escribiendo
    
    saludo(){//override(volver a definir algo que ya esta definido)
        super.saludo()
        console.log(', soy desarrolador ${this.lenguaje}')
    }
}

const nuevodev = new Desarrollador("mayra", 25, true, "JavaScript")
console.log(nuevodev)
nuevodev.saludo()

//¿Que  es el polimorfismo? => poli(muchos) morfismo (formas), las clases de javascript úedetener diferentes/varias formas
//interfaces => duck typing (no hace falta que todo este defindio para poder utilizarlo/declararse)
//types cript => si que podemos utilizar interfaces