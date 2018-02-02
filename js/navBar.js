$('#btn-opciones').click(function(){
    $('nav').toggle(500);
    $('#btn-opciones').toggleClass('change');
});

$('#showContact').click(function(){
    $('#contact_form').toggle('slow');
});
$('#close_form').click(function(){
    $('#contact_form').toggle('slow');
});
