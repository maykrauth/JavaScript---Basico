/*funciones asincronas, son esas funciones que cuando hacemos una llamada a una base de datos externa puede tardar algo de tiempo
que no depende de nuestra estructura*/

function miAsinc() {
    //Hace una llamada a una base de datos externa 
    //puede daarnos algun error
}
/*al pasar eso llegamos a las Promesas nuw promise ()=> 
permite una funcion ejecutora, esa funcion a su vez tiene que tener dos parametros(resolve, reject)*/

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    //si esta todo correcto
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})
miPromesa
    .then(() => console.log("se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(()=> console.log("Siempre me voy ha ejecutar"))

    //async await