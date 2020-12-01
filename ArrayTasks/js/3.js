//3. Feladat
//Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket tartalmazó tömböt kap  (Input ellenőrzést nem kell végezni.), és visszaad egy html template-et (string)! A html template egy felsorolt lista, aminek a listaelemei a kapott tömb értékeit tartalmazzák.
//Pl.:
// ha ez a tömb
//const content = ['első', 'második', 'harmadik'];
// akkor ez legyen a visszatérési érték (nem kellenek a behúzások, lehet egysoros string a kimenet):
//<ul>
    //<li>első</li>
    //<li>második</li>
    //<li>harmadik</li>
//</ul>
        
        const content = ['első', 'második', 'harmadik', 'negyedik', 'ötödik'];
        let arrayContent = [];

        const htmlTemplateGenerator = function (stringInput) {

            arrayContent = stringInput.map(item => ('<li>' + item + '</li>'));      
            arrayContent.unshift('<ul>');       
            arrayContent.push('</ul>');        

            return arrayContent.join('');                           
        };

        console.log(htmlTemplateGenerator(content));