//Írj reguláris kifejezést Visa típusú bankkártyák bankszámlaszámának validálására! Teszteld is a megoldásod!
'use strict';
const pattern = /^(\d{4} ){3}\d{4}$/;
const visaCard = '1234 0000 5678 2233';
console.log(visaCard.match(pattern) ? true : false);