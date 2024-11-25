/* richiamo le classi scritte in html e le salvo in una variabile*/

const namePassenger = document.querySelector('.passeger');
const kmPassenger = document.querySelector('.km');
const agePassenger = document.querySelector('.age');
const over65 = document.querySelector('.over');
const under18 = document.querySelector('.under');
const btn = document.querySelector('.button');

console.log(namePassenger, kmPassenger, agePassenger)

/* varibiali per calcolare il prezzo del biglietto */
const priceKm = 0.21;
const youngDiscount = 20;
const silverDiscount = 40;

/* evento che genera il biglietto */
btn.addEventListener('click', generateTicket);

/* funzione che genera il prezzo del biglietto */
function generateTicket() {

}