//Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek száma!

'use strict' ;

const secondsFromThisYear = () => {
    const now = new Date();
    const thisYear = now.getFullYear();
    const thisMonth = now.getMonth();
    const thisDay = now.getDate();
    const jan01InMilliseconds = Date.UTC(thisYear, 0, 1);
    const nowInMilliseconds = Date.UTC(thisYear, thisMonth, thisDay);
    return (nowInMilliseconds - jan01InMilliseconds) / 1000;
}
console.log(secondsFromThisYear() / 3600 / 24);

//const elapsedSecondsInYear = () => {
    //const dateNewYear = new Date();
    //dateNewYear.setMonth(0);
    //dateNewYear.setDate(1);
    //const elapsedSecondsFrom1970TillNow = Date.now()/1000;
    //const elapsedSecondsFrom1970TillNewYear = dateNewYear.getTime()/1000;
    //return elapsedSecondsFrom1970TillNow - elapsedSecondsFrom1970TillNewYear;
//}

//console.log(elapsedSecondsInYear());