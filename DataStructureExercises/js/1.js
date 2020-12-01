//Adott az alábbi objektum:
//const user = {
    //firstName: 'John',
    //lastName: 'Doe'
//};
//Mentsd el külön lastName, firstName, és job változókba a fenti objektum property-jeit!
//Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!

'use strict';

const user = {
    firstName: 'John',
    lastName: 'Doe'
};


//let job = user.job || 'unknown';
//let job = 'unknown';
//if (user.job !== undefined) {
    //job = user.job; 
//}
const {firstName = 'unknown',lastName ='unknown', job = 'unknown' } = user;
console.log(firstName,lastName, job);