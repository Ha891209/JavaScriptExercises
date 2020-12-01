//Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket! 
//A függvény visszatérési értéke a duplikált elemektől mentes új tömb!

'use strict'

const removeItems = (arr) => arr.filter((item, index) => index === arr.indexOf(item));

console.log(removeItems([1989,12,2020,1,9,4,1990,10,1989,1,9]));