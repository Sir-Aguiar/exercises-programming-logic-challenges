
/*

05 - Encontre o filho mais velho

Dada a idade de Pedro e um array com as idades de três de seus filhos, escreva um algoritmo que irá receber esses dados para computar e retornar a idade do filho mais velho de Pedro.

Considere as premissas abaixo:
* Pedro é pai de 4 filhos que têm idades diferentes;
* Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele.

A saída deve ter o seguinte formato:
--------------------------------
"O filho mais velho tem x anos."
--------------------------------

*/

const { getMaxNumber } = require("./Gabaritos/1-5");

function findOldestSon(pedrosAge,kidsAge){
  let sumOfAge = 0
  kidsAge.forEach(age => {
    sumOfAge += age
  });
  let olderSon = pedrosAge - sumOfAge
  return `O filho mais velho tem ${olderSon} anos.`
  
}

module.exports = findOldestSon;
