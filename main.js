


var cc_type = 'inconnue';
var cleave = new Cleave('.visa', {
    creditCard: true,
    delimiter: '-',
    onCreditCardTypeChanged: function (type) {
        console.log(type);
        cc_type = type;
    }
});

$('#cartec').click(function(){
    alert(cleave.getFormattedValue() + ' est une ' + 'carte ' +  cc_type );
    
})


var cd_type = 'inconnue';
var cleaved = new Cleave('.date', {
    date: true,
    delimiter: '-',
    datePattern: ['Y', 'm', 'd'],
    onCreditCardTypeChanged: function (type) {
        console.log(type);
        cd_type = type;
    }
});

$('#cartuc').click(function(){
    alert(cleave.getFormattedValue() + ' est une ' + 'date ' +  cd_type );
    
})



