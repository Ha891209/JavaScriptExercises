//Módosítsd úgy a függvényed, hogy paraméterként mind number, 
//mind BigInt típusú adatokat is elfogadjon! 
//Amennyiben valamelyik paraméter BigInt, úgy a number-eket is automatikusan konvertálja BigInt-é!

function SumNumbers(...Numbers) {
    let temp = 0;
    let bigIntSum;
    let bigIntInNumbers = [];                                                    

    Numbers.forEach(element => console.log(element));                                                 

    if (Numbers.some(element => typeof element === "bigInt")) {              
        Numbers.map(element => bigIntInNumbers.push(BigInt(element)));       
        bigIntInNumbers.forEach(element => console.log(element));
    }       
    bigIntSum = BigInt(temp);

    return bigIntSum;
}

    console.log(SumNumbers(Number(1000000000000000), Number(2000000000000000),
    Number.MAX_SAFE_INTEGER, Number(123456789945412),
    Number(98765432198765)));
