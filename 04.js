/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
 var numero = num.toString()
var numInv = num.toString().split("").reverse().join("")
return  numInv == numero

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico

// SUMAR ARRAY 
// var suma = []

// for (var i = 0; i < array.length; i++) {
//   for (var j=0; j< array.length; j++) {
//     if (i != j) suma.push(array[i] + array[j])
//   }
// }
// return suma.includes(n) // includes para ver si el valor dado esta dentro de la suma (devuelve true o false)