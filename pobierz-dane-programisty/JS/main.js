$(document).ready(function() {
    
    $('#get-data').click(function() {
        
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        
            .done(function(data) {
                console.log(data);

                let pImie = $('<p></p>').text(`Imie: ${data.imie}`);
                let pNazwisko = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let pZawod = $('<p></p>').text(`Zawod: ${data.zawod}`);
                let pFirma = $('<p></p>').text(`Firma: ${data.firma}`);

                let targetDiv = $('#dane-programisty'); 

                targetDiv.append(pImie);
                targetDiv.append(pNazwisko);
                targetDiv.append(pZawod);
                targetDiv.append(pFirma);

            })
            .fail(function(error) {
                console.error(error);
            })
        
    })
        
})

