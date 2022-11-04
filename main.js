/*-----------------
    FUNCTIONS
-----------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };
function clockhide() {
    const numhide = document.querySelectorAll('.numbers');
    numhide.style.display = 'none';
}
/*-----------------
    MAIN
-----------------*/
// 1. Creo 5 numeri randomici in un arrey senza numeri duplicati
// Creo un arrey vuoto
const numberList = [];

// Creo un ciclo che crei 5 numeri casuali da 1 a 100 senza duplicarli
while( numberList.length < 5 ) {
    const numberRandom = getRndInteger(1, 100);
    // SE il numero NON è contenuto nella lista lo aggiungo all'arrey
    if( numberList.includes(numberRandom) === false) {
        numberList.push(numberRandom);
    }
}
console.log(numberList)
// 2. Stampo nella pagina html il mio arrey
// Seleziono un elemento della pagina
document.querySelector('.numbers').innerHTML = numberList;
// 3. Parte il timer di 30 secondi
setTimeout(clockhide, 3000)