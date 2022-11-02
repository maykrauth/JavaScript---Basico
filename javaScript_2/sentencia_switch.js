//setencias switch en funcion de un valor tener varias condiciones 
let nota = 10;
//vamos a poener diferentes casos, cuando usamos switch tenemos que tener un caso por defecto y poner un caso default
//usamos el operador break, para que no tome todas las opciones  
switch(nota) {
    case 5:
        console.log("Obtuviste un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo");
        break;
    case 3:
        console.log("Bien");
        break;
    case 2:
        console.log("Desaprobado");
        break;
    case 1:
        console.log("No has estudidado nada");
        break;
    default:
        console.log("Error")
        break;
}