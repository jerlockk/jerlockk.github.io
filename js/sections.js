var sections = new Array(3);
sections[0] = 'home';
sections[1] = 'aboutme';
sections[2] = 'port';

var show;
var search;
var backg_body;
var borde;

function colors(color) {
    var fondo = document.getElementsByTagName('body')[0];
    var bordeNav = document.getElementById('navBar_');
    var bordeTitte = document.getElementById('header');
    search = document.getElementById(sections[i]);
    if (color == "home") {
        backg_body = "#107363";
        borde = "2px solid white";
    }else {
        backg_body = "#d8d9d9";
        borde = "none";
    }
    fondo.style.background = backg_body;
    bordeNav.style.borderBottom = borde;
    bordeTitte.style.borderBottom = borde;
}


function nav_section(nav) {
    for (var i = 0; i < 3; i++) {
        console.log('I', i);
        search = document.getElementById(sections[i]);
        search.style.display = 'none';
        if (nav == sections[i]) {
            search.style.display = 'block';
            var color = sections[i];
            // arreglar el color hay que sacar el valor de la variable i
        }
    }
    colors(color);
    console.log('COLOR', color)
}
