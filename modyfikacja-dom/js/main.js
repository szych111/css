$(document).ready(function(){
    $('#lastToFirst').click(function(){
        
    })
    
    $('#firstToLast').click(function(){
        $('p:last').after($('p:first'));
    })

});