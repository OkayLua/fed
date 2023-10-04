// JavaScript Document
console.log("hi");

var hamburger_button = document.querySelector('header>button');
var hamburger_button_close = document.querySelector('header nav button:first-of-type');
var highcontrastbut = document.querySelector('header nav button:nth-of-type(2)');
var textsizebut = document.querySelector('header nav button:last-of-type');
var highcontraststate = localStorage.getItem("highcontraststate") === "true";
var largetextsate = localStorage.getItem("largetextstate") === "true";



function hamburgermenu(){
    document.querySelector('header nav').classList.toggle('hidden');
};
function highcontrastmode(){
    document.querySelector('body').classList.toggle('highcontrast');
};
function largetextmode(){
    document.querySelector('body').classList.toggle('textlarge');
};
function updateUI(){
    if (highcontraststate){
        highcontrastmode();
    }
    if (largetextsate){
        largetextmode();
    }
}
updateUI();


hamburger_button.addEventListener("click", function () { 
   hamburgermenu();
        setTimeout(() => {document.querySelector('header nav ul').style.fontSize = "1em";
}, 10);

});

hamburger_button_close.addEventListener("click", function () { 
    document.querySelector('header nav ul').style.fontSize = "0em";
    hamburgermenu();
});

highcontrastbut.addEventListener("click", function(){
    highcontrastmode();
    hamburgermenu();
    highcontraststate = !highcontraststate;
    localStorage.setItem("highcontraststate", highcontraststate);
});
textsizebut.addEventListener("click", function(){
    largetextmode();
    hamburgermenu();
    largetextsate = !largetextsate
    localStorage.setItem("largetextstate", largetextsate);
});

