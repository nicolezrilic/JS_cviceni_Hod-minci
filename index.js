//Hod mincí
//Oživte virtuální minci.
//V souboru index.js si do proměnné padlOrel uložte hodnotu true nebo false na základě náhodné hodnoty z funkce Math.random(). Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou 0.5.

//Pomocí document.querySelector vyberte ze stránky prvek .vysledek a nahraďte jeho obsah textem Padl orel nebo Padla panna na základě náhodné hodnoty z předchozího kroku.

//Vyzkoušejte stránku několikrát načíst a koukněte, jestli se text mění.

//Kromě změny textu ještě přidejte prvku .mince druhou třídu mince--orel nebo mince--panna opět podle hodnoty v proměnné padlOrel.
//Znovu několikrát vyzkoušejte, že obrázek mince odpovídá textu pod ním.


const padlOrel = Math.random() < 0.5;

const vysledek = document.querySelector('.vysledek');
const mince = document.querySelector('.mince');

if (padlOrel) {
    vysledek.textContent = 'Padl orel';
    mince.classList.add('mince--orel');
} else {
    vysledek.textContent = 'Padla panna';
    mince.classList.add('mince--panna');
}