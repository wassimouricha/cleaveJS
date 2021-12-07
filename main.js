


var cc_type = 'inconnue';
// credit card
var cleaveCarte = new Cleave('.visa', {
    creditCard: true
});


$('#cartec').click(function(){
    alert(cleaveCarte.getFormattedValue() + ' est une ' + 'carte ' +  cc_type );
    
})


// date
var cleaveDate = new Cleave('.date', {
    date: true
});



//heure
var cleaveHeure = new Cleave('.heure', {
    time: true,
    timePattern: ['h', 'm', 's']
});


