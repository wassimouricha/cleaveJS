


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

var ch_type = 'valide';
var cleavus = new Cleave('.heure', {
    heure: true,
    delimiter: '-',
    heurePattern: ['H', 'm', 's'],
    onCreditDateTypeChanged: function (type) {
        console.log(type);
        cd_type = type;
    }
   
});

$('#cartac').click(function(){
    alert(cleave.getFormattedValue() + ' est une ' + 'heure ' +  ch_type );
    
})
