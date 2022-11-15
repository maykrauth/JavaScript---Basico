//publico
class Persona {
    //private => #
    //private solo se puede acceder desde dentro de la clase
    #nombre
    #edad

    //protected => _
    //protectede se puede acceder desde dentro de clase y desde clases descendientes 
    _isDeveloper = true
    constructor(nom, edad){
        this.#nombre = nom
        this.#edad = edad
    } 

    saludo(){
        console.log(`Hola, me llamo ${this.nombre},tengo ${this.edad}años.`)
    }

    obtenNombre(){ //funcion getter => nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre
    }

    getedad (){
        return this.#edadedad
    }
    setEdad(NuevaEdad) {
        this.#edad = NuevaEdad
    }
}
const persona = new Persona("mayra", 45)
//console.log(persona)
//console.log(persona.nombre)
persona.saludo()
console.log(persona.obtenNombre())

//getter  => son metodos que nos permiten obterner atributos7metodso privado o protegidos 
const edad = persona.getedad()
console.log(edad)
//Setter  => son metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos 
//Cambiar la edad

persona.setEdad(85)
console.log(persona.getedad())