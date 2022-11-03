//casos especificos-break, continue
let lista =[1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    //continue hace que vuelva por arriba 
    //break saltarse todo lo demas
    if  (lista[i] ===3){
        continue;
    }

    console.log(lista[i]);
//la lista i es mayor a 5, que salga del bucle
    if (lista[i] > 5){
        break;
    }

}

//cual es el ambito de un bucle 
/* al alcance que tienen las variables dentro del bucle*/