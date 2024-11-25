/* richiamo le classi scritte in html e le salvo in una variabile*/

const namePassenger = document.querySelector('.passeger');
const kmPassenger = document.querySelector('.km');
const agePassenger = document.querySelector('.age');

const bottoneGenerate = document.querySelector('.btn-generate');

/* varibiali per calcolare il prezzo del biglietto  */
const priceKm = 0.21;
const youngDiscount = 20;
const silverDiscount = 40;
let message;

/* evento che genera il biglietto  */
bottoneGenerate.addEventListener('click', generateTicket);

/* funzione che genera il prezzo del biglietto  */
function generateTicket() {
  const namePassengerValue = namePassenger.value;
  const kmPassengerValue = kmPassenger.value
  const agePassengerValue = agePassenger.value

  price = priceKm * kmPassengerValue;


  /* attraverso agePassenger.value riconosce l'opzione che abbiamo inserito, se l'opzione è under applicherà lo sconto del 20%, se è over applicherà lo sconto del 40%, altrimenti non applicherà nessuno sconto */
  
  if (agePassenger.value == "under") {
    price -= price * youngDiscount / 100; 
  } else if (agePassenger.value == "over") {
    price -= price * silverDiscount / 100; 
  } else if (agePassenger.value == "between") {
    price = price
  }
 console.log(price)
  
} 