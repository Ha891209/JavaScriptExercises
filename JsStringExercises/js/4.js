//Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, 
//hanem minden egyes részfeladat legyen külön függvénybe szervezve, tehát:
//1.függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, 
//amik stringeket tartalmaznak! A függvény összefűzi egy tömbbe az összes elemet és visszaadja ezt az új tömböt
//2.függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket és visszaadja az új tömböt
//3.függvény: egy paraméterként kapott tömb összes elem elejéről és végéről levágja a space karaktereket, visszaad egy új tömböt

//előző feladat: 

//'use strict' ;

//function customFilter(char, ...arrays) {
    //const concatedArray = arrays.flat()
    //return concatedArray
        //.flat()
        //.filter((item, index) => concatedArray.indexOf(item) === index)
        //.filter(item => item.indexOf(char) === -1)
        //.map(item => item.trimEnd());
//}

//console.log(customFilter('hello', ['bye ', 'thanks', 'welcome'], ['bye ','thanks', 'love   ', 'hi']));

'use strict' ;

function customFilter(char, ...arrays) {
    const concatedArray = arrays.flat()
    return concatedArray
        .flat()
        
}

function customFilter2(char, ...arrays) {
    const concatedArray = arrays.flat()
    return concatedArray
    .filter((item, index) => concatedArray.indexOf(item) === index)
        
}

function customFilter3(char, ...arrays) {
    const concatedArray = arrays.flat()
    return concatedArray
    .filter(item => item.indexOf(char) === -1)
        
}

function customFilter4(char, ...arrays) {
    const concatedArray = arrays.flat()
    return concatedArray
    .map(item => item.trimEnd());
        
}

console.log(customFilter('hello', ['bye ', 'thanks', 'welcome'], ['bye ','thanks', 'love   ', 'hi']));
console.log(customFilter2('hello', ['bye ', 'thanks', 'welcome'], ['bye ','thanks', 'love   ', 'hi']));
console.log(customFilter3('hello', ['bye ', 'thanks', 'welcome'], ['bye ','thanks', 'love   ', 'hi']));
console.log(customFilter4('hello', ['bye ', 'thanks', 'welcome'], ['bye ','thanks', 'love   ', 'hi']));