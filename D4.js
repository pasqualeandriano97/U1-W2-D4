/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  formula = l1 * l2;
  return formula;
};
const areaOfRectangle = area(2, 5);
console.log("L'area del rettangolo è ", areaOfRectangle);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1, num2) {
  sum = num1 + num2;
  if (sum !== num1 + num2) {
    sum = num1 + num2;
  } else {
    sum = sum * 3;
  }
  return sum;
};

const resultOfSum = crazySum(2, 2);
console.log("il risultato della somma pazza è ", resultOfSum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num1) {
  let diff = num1 - 19;
  if (num1 > 19) {
    diff = diff * 3;
  }

  return diff;
};

const resultOfDiff = crazyDiff(18);
console.log("Il risultato della differenza pazza è ", resultOfDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  const condition = n === 400 || (n > 20, n <= 100);
  return condition;
};

console.log(
  "Il numero inserito rispetta le condizioni di inserimento",
  boundary(30)
);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (str) {
  const firstword = "EPICODE";

  if (str.indexOf("EPICODE") === 0) {
    str = str;
  } else {
    str = firstword + str;
  }
  return str;
};
console.log(epify(" PROVA"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  const check = n >= 0 && (n % 3 === 0 || n % 7 === 0);
  return check;
};
console.log(check3and7(5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (str) {
  const stringa = str.split("").reverse().join("");

  return stringa;
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (str) {
  const word = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return word;
};

console.log(upperFirst("ciao a tutti sono pasquale"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (str) {
  const stringa = str.split("");
  stringa.splice(0, 1);
  stringa.pop();
  const frase = stringa.join("");
  return frase;
};
console.log(cutString("Io sono pasquale"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const array = [n];
  for (i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
};
console.log(giveMeRandom(10));
