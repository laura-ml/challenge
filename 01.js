/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  var arr = []
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i]) == "number") {
      arr.push(array[i])
    }
  }
   return arr
}

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros

// MAYOR-MENOR
// var mayor = -infinity // por si hay numeros negativos
// var menor = infinity
//for(var i = 0; i < numeros.length; i++) {
//  var num = numeros[i]
//  if (num > mayor){
//  mayor = num
// }
// if (num < menor){
//   menor = num
// }
// return [menor,mayor]
// }
// TAMBIEN:
// return [Math.min(...numeros), Math.max(...numeros)] // los puntos sirven para convertir los arreglos de numeros en num,num