// 1. Feladat 
//Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt! 
//(Input ellenőrzést nem kell végezni.) 
//A függvény szorozza meg tömbelemek értékét 1.27-el, majd pedig térjen vissza az elemek összegével!

'use strict';

const intArray = [5,9,12,18,22,66];

const SumProduct = intArray.map(item => item * 1.27);
console.log(SumProduct);

const SumProduct2 = intArray.map(item => item * 1.27).reduce((prev, current) => prev + current);
console.log(SumProduct2);

