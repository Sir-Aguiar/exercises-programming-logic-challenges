/*

11 - Array de notas musicais - 3 

Relembrando, dada a escala natural de Dó, cada uma das 7 notas possui um grau representado por um algarismo romano conforme abaixo:

| Dó | Ré | Mi  | Fá | Sol | Lá | Si  |
| I  | II | III | IV |  V  | VI | VII |

Além disso, cada nota forma um acorde chamado tríade.

A tríade é composta por uma sequência a partir dela com a "primeira" nota, a "terça" e a "quinta".

Exemplos:

Tríade de Dó: Dó (a primeira), Mi (a terça), Sol (a quinta).
Tríade de Ré: Ré (a primeira), Fá (a terça), Lá (a quinta).

Escreva um algoritmo que recebe um array de notas, e retorne um outro array de objetos com os graus das notas na escala de dó e as notas que formam sua tríade.

Por exemplo:
-------------------------------
Entrada: 
['Ré', 'Sol', 'Dó']

Saída:
 [
   {
     degree: 'II',
     triad: ['Ré', 'Fá', 'Lá']
   },
   {
     degree: 'V',
     triad: [ 'Sol', 'Si', 'Ré' ]
   },
   {
     degree: 'I',
     triad: ['Dó', 'Mi', 'Sol']
   },
 ]
--------------------------------

*/

function musicalNotes3(notes){
  const Notes = {
    'Dó' : {degree : 'I', triad : ['Dó','Mi', 'Sol']},
    'Ré' : {degree : 'II', triad : ['Ré','Fá', 'Lá']},
    'Mi' : {degree : 'III', triad : ['Mi','Sol', 'Si']},
    'Fá' : {degree : 'IV', triad : ['Fá','Lá', 'Dó']},
    'Sol' : {degree : 'V', triad : ['Sol','Si', 'Ré']},
    'Lá' : {degree : 'VI', triad : ['Lá','Dó', 'Mi']},
    'Si' : {degree : 'VII', triad : ['Si','Ré', 'Fá']}
  }
  let triads = []
  notes.forEach(note => {
    triads.push(Notes[note])
  });
  return triads
}

module.exports = musicalNotes3;
