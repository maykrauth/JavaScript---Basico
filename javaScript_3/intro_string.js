//string (Cadena de caracteres)
/* string es texto variables de text*/
let str_sng ='Hola soy un text con comillas simples';
let str_dbl = "Hola sou un text con comillas dobles";

console.log(str_sng);
console.log(str_dbl);


let srt_comillas = "El otro dia me dijo \"ve a sacar la basura\""
let srt_comillas_simples ='El otro dia me dijo "ve a sacar la basura"'
let srt_comillas_dobles = "El otro dia me dijo 've a sacar la basura'"

console.log(srt_comillas);
console.log(srt_comillas_simples);
console.log(srt_comillas_dobles);


/////// Comillas invertidas (backticks) introdicir variables dentro de nuestro text, permite los saltos entre lineas
let str_backticks =`Hola esto es un strind con backticks`
console.log(str_backticks);

let nombre = "Mayra rocio"
let saludo = `Hola, ${nombre} bienvenido`
console.log(saludo)

let plantilla = `
<html>
    <h1>Pagina web ${nombre}</h1>
    <p> Este es un parrafo </p>
</html>
`;
console.log(plantilla);


////Introduccion de variables en html
 let libro = ["Empieza por el por qué ", "El monje vendió su auto", "El poder del ahora"]