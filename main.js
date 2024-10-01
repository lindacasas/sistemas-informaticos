/*let numero1=15;

const NUMERO2=5;

//Resultado es una variable global
let resultado=numero1+NUMERO2;


function sumar(){
    //numero3 es una varible local
    let numero3=8;

}

//Bucle For
//    i=0    0<4
//           2<4  i=0+2 
//           4<4  i=2+2 
/*for(let i=0; i<4; i=i+2){
    console.log("Valor de i ="+i);
}*/

//otras lineas de codigo

//Bucle For
// Ini       Condi Actualizacion/incremento
//     i=3   3<=6
//           6<=6  i=3+3 
//           9<=6  i=6+3
/*for(let i=3; i<=6; i=i+3){
    console.log("Valor de i ="+i);
}*/


//otras lineas de codigo

//Ejercicio 1
/*let numero = 1;
//      1    < 5
//      3    < 5
//      5    < 5
while(numero < 5){
    console.log("valor actual = "+numero);
    numero=numero + 2;
//  numero=  1    + 2
//  numero=  3    + 2
}

//otras lineas de codigo*/

//Variables globales
let resultado;

//Funciones
//Ejercicio 1
//       nombreFuncion (parametros)
function      suma     (numero1, numero2, numero3){
    resultado = numero1+numero2+numero3;
    return (resultado);
}

function resta (numero1, numero2){
    resultado = numero1 - numero2;
    return (resultado);
}

//Invocar las Funciones
let sumaDeNumeros = suma(5, 10, 1);
console.log("Resultado de la suma: " + sumaDeNumeros);

let restaDeNumeros = resta(16, 4);
console.log("Resultado de la resta: " + restaDeNumeros);

//Ejercicio 2
const MULTIPLICACION = function (numero1, numero2){
    resultado = numero1 * numero2;
    return(resultado);
};

console.log("Resultado de la multiplicacion: " + MULTIPLICACION(5, 2));


//Ejercicio 3
const DIVISION = (numero1, numero2) => {
    resultado = numero1 / numero2;
    return(resultado);
};

console.log("Resultado de la division: " + DIVISION(16, 2));


