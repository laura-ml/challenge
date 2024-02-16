/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca
  var masLargo = ""
   for (var i=0; i < strings.length; i++){
    if (strings[i].length > masLargo.length){
    masLargo = strings[i]
    }
    
   }
   return masLargo
}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga

// MISMA CANTIDAD DE CARACTERES
// var arr = []
// for (var i=0; i < strings.length;i++){
//   var str = strings[i]
//   if (str.length === cacteres){  //length para saber la cantidad de caracteres que tiene el str
//     arr.push(str)
//   }
//   return arr
// }


// SUMAR NUM PRIMOS 
// var suma = 0
// for (var i = 0; i < array.length; i++){
//  if(array[i] % 1 === 0 && array[i] != 0 && array[i] != 1){
//   suma += array[i]
//  }
//  return suma
// }