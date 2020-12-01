//Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú, 
//tetszőlegesen méretű egész számot összead, 
//és visszatér az összeadás végeredményével! 
//A paraméterként kapott értékek egyszerű number típusúak legyenek! 
//Amennyiben bármelyik paraméter értéke, vagy a részeredmény meghaladja a biztonságos tartomány, 
//automatikusan konvertáljad BigIntbe, és így számoljunk tovább, 
//és természetesen a visszatérési érték is BigInt legyen!

function SumNumbers(...numbers) {

    let temp = 0;
    let bigIntSum;
    temp = numbers.reduce((a, b) => a + b);         
    if (temp > Number.MAX_SAFE_INTEGER) {
        bigIntSum = BigInt(temp);
    }
    return bigIntSum;
}

console.log(SumNumbers(Number(1000000000000000), Number(2000000000000000),
    Number.MAX_SAFE_INTEGER, Number(123456789945412),
    Number(98765432198765)));
