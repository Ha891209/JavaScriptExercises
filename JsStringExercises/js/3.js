//Írj egy függvényt, ami első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, 
//amik stringeket tartalmaznak!
//A függvény:
//összefűz egy tömbbe az összes elemet,
//eltávolítja az ismétlődő elemeket,
//eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
//eltávolítja a stringek végén lévő white space karaktert
//visszaadja ezt az új tömböt.


'use strict' ;

function customFilter(char, ...arrays) {
    const concatedArray = arrays.flat()
    return concatedArray
        .flat()
        .filter((item, index) => concatedArray.indexOf(item) === index)
        .filter(item => item.indexOf(char) === -1)
        .map(item => item.trimEnd());
}

console.log(customFilter('hello', ['bye ', 'thanks', 'welcome'], ['bye ','thanks', 'love   ', 'hi']));