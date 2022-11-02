//Notacion
/*; => Delimitar el final de una linea, aunque en las actualizaciones
el punto y coma no es necesario agregarlo al codigo, es muy buena practica*/
const b = 4;
/*. ==> El . se utiliza en los objetos para acceder a los atributos. 
A su vez un objeto puede tener varios atributos (movil: anchura,altura,profuindidad)
movil.anchura*/
//[] ==> Se utiliza para las listas,arreglos o arrays. Se utiliza para definirlos ejem:
const ar =[1 , 2, 3, 4]
console.log(ar[2])
//() ==> Se utiliza para funciones, para definir una funcion 
function suma(a, b){
    //aca escribiriamos la funcion 
}
/*{} ==>Las llaves se utilizan para los objetos, funciones y estructuras de control
aca utilizamos la llave para delimitar el alcance del objeto movil la definicion*/
const movil ={
    anchura: 5,
    altura:10
}
//estructuras de control
if (true) {
    //todo lo que haya entre llaves
    const constante2="hola"
}