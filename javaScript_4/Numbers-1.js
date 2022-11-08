//principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;
// suma (+)
console.log(a + b);
// resta (-)
console.log(a - b);
// multiplicacion (*)
console.log(a * b);
// division (/)
console.log(a / b);
//representacion de los numeros en cadena de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//redondeo de numeros decimal
let c = 3.3;
let d = c * 3;
console.log (d);
console.log(typeof d);

//toFixed(X), la cantidad de ceros-Limitar el numerop de decimales al valor x

console.log(d.toFixed(2));
console.log(typeof d.toFixed());

let e = 1889.2123668468;
let f = 1996;
console.log( e.toFixed(2));
console.log( f.toFixed(2));
/*toPrecision(x), redondeo cientifico-cuantos digitos tome como presicion.
Limita el numero de cifras significativas*/
let g = 2213556153215;
console.log(e.toPrecision(5));
// Nos devuelve el mismo numero,e+12significa multiplicado por 10, elevado a 12
//quiere decir multiplicado por 1, seguido de 12 ceros
console.log (g.toPrecision(7));
console.log(typeof f.toPrecision());