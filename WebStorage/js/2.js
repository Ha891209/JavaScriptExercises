// Az alábbi cookie-k vannak a böngésződben tárolva (hozd létre őket):

// viewed: 5
// uid: 354774631237
// ssid: Bx55OWbHJ0Vt_IGIFÍ

// Írj egy olyan objectet, amely az alábbi három metódust megvalósítja:
// - kiolvassa a sütik nevét és értékét,
// - átmenti őket sessionStorage-ba,
// - törli a sütiket.

'use strict';

document.cookie = 'viewed=5';
document.cookie = 'uid=354774631237';
document.cookie = 'ssid=Bx55OWbHJ0Vt_IGIFÍ';

const cookieHandler = {
    getCookies() {
        const cookies = document.cookie
            .split('; ')
            .map(cookie => ({ name: `${cookie.substr(0, cookie.indexOf('='))}`, value: `${cookie.substr(cookie.indexOf('=') + 1)}` }));
        return cookies;
    },
    storeInSessionStorage() {
        const cookies = cookieHandler.getCookies();
        cookies.forEach(obj => sessionStorage.setItem(`${obj.name}`, `${obj.value}`));
    },
    deleteCookies() {
        const cookies = cookieHandler.getCookies();
        cookies.forEach(obj => document.cookie = `${obj.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/';`)
    },
}