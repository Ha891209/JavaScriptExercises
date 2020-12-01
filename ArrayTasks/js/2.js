//2. Feladat
//Írj egy olyan függvénykifejezést, ami paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt, 
//és egy tetszőleges primitív értéket.! A függvény visszatérési értéke egy objektum, 
//ami a következő propertyket tartalmazza:
//exists: Értéke true/false attól függően, hogy a második paraméterként megadott érték megtalálható e a tömbben
//index: Értéke egy szám, ha második paraméterként megadott érték megtalálható a tömbben, akkor a tömbben lévő indexe, hanem akkor -1 legyen az értéke
//allElementIsANumber: Értéke true/false attól függően, hogy a tömb minden eleme number típusú e vagy sem
//someElementIsANumber: Értéke true/false attól függően, hogy a tömbben van e number típusú elem vagy sem

'use strict';

const thirdTasks = function (array, value) {
    return {
        exists: array.find(item => item === value),                                     
        index: array.findIndex(item => item === value),                                 
        allElemenetIsNumber: array.every(item => typeof item === 'number'),             
        someElementIsANumber: array.some(item => typeof item === 'number')             
    };
};

const thirdTasksArray = [1,4,33,5,false];
const thirdTasksValue = 299;

console.log(thirdTasks(thirdTasksArray, thirdTasksValue));