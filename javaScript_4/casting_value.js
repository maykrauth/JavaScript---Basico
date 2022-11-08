//Operador .valueof() - obterner valores numericos a partir de literales
let a = 2;
let b = new Number(3);
console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un String");
console.log(str);
console.log(str.valueOf());
//NaN (not a numbers) - Infinity
let  n = Number('adios')
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);
//como convertir los string a valores numericos con number, perseint y parsefloat
let numero ='5.89';
let num2 = 17.2;
console.log(typeof numero);
console.log( numero +num2);//error esta concadenando numbers
console.log(Number(numero) + num2);
//numero entero lo convierta
console.log(parseInt(numero));
console.log(typeof parseInt(numero));
//lo convierta con decimales
console.log (parseFloat(numero));
console.log(typeof parseFloat(numero));

let num3 = 4;
console.log (parseFloat(num3));
console.log( parseInt(num3));
//Numeros hexadecimales(base 16) empiezan con 0x
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16))

//obtener los valores maximo y minimo en javaScript
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);//es como decir 16ceros 0.00000000000000000222
console.log(min_valor_js);
console.log(max_valor_js);