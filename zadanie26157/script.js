let form = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();

    let fstName = document.querySelector('[name="fname"]');
    let lstName = document.querySelector('[name = "lname"]');


    console.log(`Imie: ${fstName.value}, Nazwisko: ${lstName.value}`);


}

form.addEventListener('submit', submitForm); 