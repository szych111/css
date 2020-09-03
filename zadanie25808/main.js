
function miscMaths(num1, num2) {
    
    if ((num1 + num2) >= 0) {
        console.log('Wynik dodawania wynosi ' + (num1 + num2));
    } else {
        console.log('Wynik jest nieprawidlowy');
    }


    if (num1 - num2 >= 0) {
        console.log('Wynik odejmowania wynosi ' + (num1 - num2));
    } else {
        console.log('Wynik jest nieprawidlowy');
    }

    if (num1 * num2 >= 0) {
        console.log('Wynik mnozenia wynosi ' + (num1 * num2));
    } else {
        console.log('Wynik jest nieprawidlowy');
    }

}

miscMaths(5, 15)


