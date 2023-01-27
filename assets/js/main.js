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
const radio_jahr2020 = document.querySelector("#radio_jahr2020");

const radio_jahr2021 = document.querySelector("#radio_jahr2021");

const radio_jahr2022 = document.querySelector("#radio_jahr2022");
console.log(radio_jahr2022);

// Familienstand
const radio_singel = document.querySelector("#radio_singel");

const radio_verheiratet = document.querySelector("#radio_verheiratet");


// Textfeld Gehalt
let input_zvE_textFeld_GesamtEinkommen = document.querySelector("#input_zvE_textFeld_GesamtEinkommen");

// output
const span_textJahr = document.querySelector("#span_textJahr");

const output_ESt = document.querySelector("#output_ESt");


// Button berechnen
const button_berechnen = document.querySelector("#button_berechnen");

// Ende default Varibalen definition 


// Eventlistener
button_berechnen.addEventListener("click", berechnen);

radio_jahr2020.addEventListener("change", wechselDasJahr);
radio_jahr2021.addEventListener("change", wechselDasJahr);
radio_jahr2022.addEventListener("change", wechselDasJahr);




// Funktion Jahre vergleichen und Text des Jahres unten bei output in den span rein
function wechselDasJahr() {
    console.log("in Funktion wechselDasJahr  +  eventListener geht");


    if (radio_jahr2020.checked === true) {
        span_textJahr.innerHTML = "2020";
        console.log(radio_jahr2020.checked);
        console.log(span_textJahr.innerHTML);
        console.log(radio_jahr2022.checked);
/*         return;
 */    }

    else if (radio_jahr2021.checked === true) {
        span_textJahr.innerHTML = "2021";
/*         return;
 */    }
    else if (radio_jahr2022.checked === true) {
        span_textJahr.innerHTML = "2022";
/*         return;
 */    } else {

    }

};

function berechnen() {
    if (radio_jahr2020.checked === true && radio_verheiratet.checked === true && input_zvE_textFeld_GesamtEinkommen.value > 0) {

        if (radio_verheiratet.checked === true) {

/*             if (radio_verheiratet.checked === true) {
 */            let faktor = 2;               // singel = 1    verheiratet = 2
            /*             return faktor
                        } else {
                            let faktor =1;
                            return faktor
                        } */
            console.log(`faktor singel=1 verheiratet =2  ${faktor}`);

            let ESt = Jahr2020_Fall1(faktor);// Faktor 2 weil verheiratet  
            console.log(`Est = ${ESt}`);
            ESt = ESt / faktor;                      // Faktor 2 hier wieder weg nehmen 
            console.log(`Est /2 bzw Faktor = ${ESt}`);

            output_ESt.innerHTML = ` ${ESt} €`;

        }
    }

};



/* Jahr2020_Fall1(); */

// Funktionen verschiede Szenarien 3 Jahre je 5 St 
function Jahr2020_Fall1(x) {
    console.log("in Funktion Jahr2020_Fall1  +  eventListener")
    let ESt = "";

    /* zvE = zvEVerheiratet();
     */
    let zvE = input_zvE_textFeld_GesamtEinkommen.value;
    console.log(`zvE vom Inputfeld: ${zvE}`);
    zvE = zvE * x;
    console.log(`zve * x(2) = ${zvE}`);
    ESt = zvE * 10; // hier die Formeln von den Homepages
    console.log(`ESt * 10 = ${ESt}`);

    return ESt
};


function zvEVerheiratet() {
    zvE = input_zvE_textFeld_GesamtEinkommen.value * 2
    return zvE;

};