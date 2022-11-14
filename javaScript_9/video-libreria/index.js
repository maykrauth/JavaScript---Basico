//instalar axios para hacer llamadas a servicios externos axios
//https://www.npmjs.com/package/axios
//servicio externo es una Apis pokeapi
//nos permire tener datos de deferentes poke
//https://pokeapi.co/
//axios. get(pegamos la url que queremos chequear)
//para chequear la info .data

import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
.then(function (response) {
    // handle success
    console.log("Success!!!")
    console.log(response.data);
})
.catch(function (error) {
    // handle error
    console.log("Error !!!")
    console.log(error.message);
})
.finally(function () {
    // always executed
    console.log("Hola")
});
/*
librerias jquery interactuar con pag html (DOM es lo que nos muestra por pantalla) 
javaScript mas  utilizado reactjs 
three las app aparezcan en 3D*/