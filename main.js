


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



