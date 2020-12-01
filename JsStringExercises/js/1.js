//Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot merge-öl össze, majd visszatér ezzel az objektummal! 
//Az összefűzést úgy hajtsa végre, hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2, stb.) amik tartalmazzák a részobjektumokat!

// A két objektum:
'use strict';

const johnDoe = { 
    firstName: 'Jonh',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

const merge = ( ...objects ) => ( { ...objects } );

console.log(merge(johnDoe,janeDoe));



//function mergeObj(...obj) {
    //const newObject = {};
    //for (let i = 0; i < obj.length; i +=1) {
        //newObject[i] = obj[i];
   // }
    //return newObject;
//}
//console.log(mergeObj(johnDoe));
//console.log(mergeObj(johnDoe, janeDoe));


//function map(...objects) {
  //  return {
   //     ...[...objects]
   // }}
//console.log(map(johnDoe, janeDoe));



//A végeredmény:
//{
 //   0: { 
 //       firstName: 'Jonh',
  //    lastName: 'Doe'
 // }
  // 1:  { 
  //      firstName: 'Jane',
  //     lastName: 'Doe'
 //  }
//}