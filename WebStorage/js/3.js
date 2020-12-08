//Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
//Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, 
//és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, 
//és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.
//Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, 
//úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.