//Írj reguláris kifejezést IP cím validálására! Teszteld is a megoldásod!
'use strict';
const pattern = /^(\d{3}.){2}\d{1,3}.\d{1,3}$/;
const IP = '192.168.1.1';
console.log(IP.match(pattern) ? true : false);