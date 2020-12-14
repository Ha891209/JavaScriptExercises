//Írj reguláris kifejezést MAC cím validálására! Teszteld is a megoldásod!
'use strict;'
const pattern = /^00:([A-Z\d]{2}:){4}[A-Z\d]{2}$/;
        const MAC = '09:4B:55:74:8A:B7';
        console.log(MAC.match(pattern) ? true : false);