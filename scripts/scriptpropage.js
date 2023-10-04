// JavaScript Document
console.log("hi");

var next_but_testo = document.querySelector('#propage section:nth-of-type(3) button:last-of-type');
var prev_but_testo = document.querySelector('#propage section:nth-of-type(3) button:first-of-type');
var testo_showing = 1;

function testo_hidden_next(){
    document.querySelector('#propage section:nth-of-type(3) li:nth-of-type(' + testo_showing + ')').classList.add('hidden');
    testo_showing = testo_showing + 1;
    if (testo_showing >= 5 ) {
        testo_showing = 1
    };
    setTimeout(function () {
        document.querySelector('#propage section:nth-of-type(3) li:nth-of-type(' + testo_showing + ')').classList.remove('hidden')}, 500);
    console.log(testo_showing)
};
function testo_hidden_prev(){
    document.querySelector('#propage section:nth-of-type(3) li:nth-of-type(' + testo_showing + ')').classList.add('hidden');
    testo_showing = testo_showing - 1;
    if (testo_showing <= 0 ) {
        testo_showing = 4
    };
    document.querySelector('#propage section:nth-of-type(3) li:nth-of-type(' + testo_showing + ')').classList.remove('hidden');
};

next_but_testo.addEventListener("click", function () { 
    testo_hidden_next()
});
prev_but_testo.addEventListener("click", function () { 
    testo_hidden_prev()
});