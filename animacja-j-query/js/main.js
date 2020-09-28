$(document).ready(function () {

    $('#myButton').click(function () {

        $('.square').animate({
            marginLeft: 125, width: 100, height: 100
        }, 3000, function () {
            $('.square').css({backgroundColor: 'blue', 'transition': '2s'});
            setTimeout(function(){
                $('#header').text('Animacja zakonczona');
            }, 2000);
            /* $('.square').animate({backgroundColor: 'blue', 'transition': '2s'}, 1000, function () {

                $(this).find('h2').text('Animacja zakonczona')
            }

            ) */
        },
        );
    });
});