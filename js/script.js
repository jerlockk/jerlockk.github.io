$('#btn-opciones').click(function(){
    $('nav').toggle(500);
    $('#btn-opciones').toggleClass('change');
});

$('.buttons').click(function (){
    if (window.innerWidth < 800){
        $('nav').toggle(500);
        $('#btn-opciones').toggleClass('change');
    };
});

$('#showContact').click(function(){
    $('#contact_form').toggle('slow');
    if (window.innerWidth < 800){
        $('nav').toggle(500);
        $('#btn-opciones').toggleClass('change');
    }
});
$('#close_form').click(function(){
    $('#contact_form').toggle('slow');
});
/******************************************** */
function socialElements1 (){
    $('#myNumber').toggle('fast');
    $('#social_1').toggle('fast');
    $('#social_2').toggle('fast');
}
function socialElements2 (){
    $('#myEmail').toggle('fast');
    $('#social_1').toggle('fast');
    $('#social_2').toggle('fast');
}

$('#social_1').click(function (){
    socialElements1 ();
});
$('#myNumber').click(function (){
    socialElements1 ();
});
$('#social_2').click(function (){
    socialElements2 ();
});
$('#myEmail').click(function (){
    socialElements2 ();
});

var contenedor = document.getElementById('contect_social');

contenedor.addEventListener("mouseover", function () {
    contenedor.classList.remove('showSocial');
});
contenedor.addEventListener("mouseout", function () {
    contenedor.classList.add('showSocial');
});

/*****************************************************************/
$('.element_pages').hover(function(){
    $(this).addClass('disable');
},  function (){
    $(this).removeClass('disable');
});
