//Az előző három reguláris kifejezést és a validálást egy objekten belül készítsd el. 
//Az objektnek egyen egy rules property-e ami objektmunban tárolja a mintákat, 
//és egy validate metódusa, ami paraméterként kap egy string értéket, és azt, 
//melyik mintát kell ráilleszteni. A visszatérési értéke egy boolean legyen, 
//amnek az értéke attól függ, illeszkedik e a minta.

const Validator = {
    rules: {
        visaCard: /^(\d{4} ){3}\d{4}$/,
        IP: /^(\d{3}.){2}\d{1,3}.\d{1,3}$/,
        MAC: /^00:([A-Z\d]{2}:){4}[A-Z\d]{2}$/,
    },
    validate(text, type) {
        return text.match(this.rules[type]) ? true: false;

    }
};

console.log(Validator.validate('1234 0000 5678 2233', 'visaCard'));
console.log(Validator.validate('192.168.1.1', 'IP'));
console.log(Validator.validate('09:4B:55:74:8A:B7', 'MAC'));
