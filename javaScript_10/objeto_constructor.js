//class objeto
//Como declaramos una clase, lo definimos igual que una fuction 
//objeto de class persona
//variabes :nombre,edad,isdeveloper
//funciones tanto en objetos como en clases se denominan metodos
//METODO constructor es el que tenemos por defecto al crear una clase
// .this es palabra reservada que hace referencia al  objeto en cuestion osea la persona
class persona {
    
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper= isDeveloper
    } 

    saludo(){
        console.log(`Hola, me llamo ${this.nombre},tengo ${this.edad}años.`)
    }
}
//new crea de nuevo el objeto y desp se le pone el atributo persona
const Nue_persona =  new persona("mayra", 25, true);
console.log(Nue_persona)
Nue_persona.saludo()

//typeof ===instanceof para class
let numero  = 60 //inicializar
console.log(typeof numero)

let persona2 = new persona ("Maria", 52, false) //instanciar
console.log(typeof persona2)
console.log(persona2 instanceof persona)