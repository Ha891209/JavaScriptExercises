//Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket! 
//A függvény visszatérési értéke a duplikált elemektől mentes új tömb!

'use strict'

const removeItems = (arr) => arr.filter((item, index) => index === arr.indexOf(item));

console.log(removeItems([23,5,34,5,34,5,2,4,6,7,6]));
