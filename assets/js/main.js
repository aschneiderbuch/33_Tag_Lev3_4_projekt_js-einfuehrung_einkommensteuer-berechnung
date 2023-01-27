console.log("test");

/* 
Frage

Jahr anhand der Input:radio Buttons auswählen
    1.  2020
    2.  2021
    3.  2022
            Umstellen       span im Output auf das jeweilige Jahr

            ja nach Jahr    !!!   Vorsicht   gibt   bei den 5 Fällen unterschiedlich! 
                                    Einkommensgrenzen     und   Unterschiedliche Werte in den Formeln Fällen 1-5

dann 
Familienstand anhand der Input:radio Buttons auswählen
    1. singel
    2. Verheiratet

        wenn Verheiratet   !!! Vorsicht    zvE / 2       und am     Ende    EST * 2



Funktion 
    verschieden Szenarien    sind die Fälle 1 - 5


Output   
        wenn Verheiratet   !!! Vorsicht    zvE / 2       und am     Ende    EST * 2


*/



// Variablen 
// Radio 
const radio_jahr2022 = document.querySelector("#radio_jahr2022");
console.log(radio_jahr2022);

const radio_jahr2020 = document.querySelector("#radio_jahr2020");
const radio_jahr2020___checked = radio_jahr2020.checked;

const radio_jahr2021 = document.querySelector("#radio_jahr2021");
const radio_jahr2021___checked = radio_jahr2021.checked;

// Familienstand
let radio_singel = document.querySelector("#radio_singel");
let radio_singel___checked = radio_singel.checked;

let radio_verheiratet = document.querySelector("#radio_verheiratet");
let radio_verheiratet___checked = radio_verheiratet.checked;








let button_berechnen = document.querySelector("#button_berechnen");




// Eventlistener
button_berechnen.addEventListener("click", test);



function test(){
    let radio_jahr2022___checked = radio_jahr2022.value;
    console.log(radio_jahr2022___checked);


     console.log(radio_jahr2022.checked);
     console.log( radio_jahr2020___checked, radio_jahr2021___checked, radio_jahr2022___checked, radio_singel___checked, radio_verheiratet___checked,)

}


test();