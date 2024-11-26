/* richiamo le classi del form scritte in html e le salvo in una variabile*/

const namePassenger = document.querySelector('.passeger');
const kmPassenger = document.querySelector('.km');
const agePassenger = document.querySelector('.age');

const bottoneGenerate = document.querySelector('.btn-generate');
const btnReset = document.querySelector('.btn-reset');


/* richiamo le classi scritte in html per il risultato del biglietto e le salvo in una variabile */
const nameP = document.querySelector('.name-p');
const offerP = document.querySelector('.offer-p');
let carriageP= document.querySelector('.carriage-p');
let codeP = document.querySelector('.code-p');
let priceP= document.querySelector('.price-p'); 

/* richiamo il container che mi servirà successivamente */ 
const containerDmNone = document.querySelector('.container-dm')

/* varibiali per calcolare il prezzo del biglietto  */
const priceKm = 0.21;
const youngDiscount = 20;
const silverDiscount = 40;
let message;

/* evento che genera il biglietto  */
bottoneGenerate.addEventListener('click', generateTicket);
btnReset.addEventListener('click', buttonReset);

/* funzione che genera il prezzo del biglietto  */
function generateTicket() {
  price = priceKm * kmPassenger.value;
  let message;

  /* attraverso agePassenger.value riconosce l'opzione che abbiamo inserito, se l'opzione è under applicherà lo sconto del 20%, se è over applicherà lo sconto del 40%, altrimenti non applicherà nessuno sconto */
  
  if (agePassenger.value == "under") {
    price -= price * youngDiscount / 100; 
    message = 'Biglietto Young';
  } else if (agePassenger.value == "over") {
    price -= price * silverDiscount / 100; 
      message = 'Biglietto Over';
  } else if (agePassenger.value == "between") {
    price = price
      message = 'Biglietto Normale';
  }
 console.log(price)


  nameP.innerText = namePassenger.value;
  offerP.innerText = message;
  carriageP.innerText = Math.ceil(Math.random()* 10);
  codeP.innerText = Math.ceil(Math.random()* 1000);
  priceP.innerText = price

  resetForm();
 
  containerDmNone.classList.remove('container-dm-none')
} 

function resetForm () {
  namePassenger.value = '';
  kmPassenger.value = '';
  agePassenger.value = "default";
}

function buttonReset(){
  resetForm();
  containerDmNone.classList.add('container-dm-none');
}

