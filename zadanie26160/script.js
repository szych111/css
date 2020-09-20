let newsletterForm = document.getElementById('newsletter-form');
let agreeAllChckbx = document.getElementById('agree-all');

const validate = (event) => {

    let fldName = document.getElementById('name');
    let fldEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (fldName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imie i nazwisko';
        errors.appendChild(liError);
    }

    if (fldEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail';
        errors.appendChild(liError);
    }

    if (!fldEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz poprawny adres e-mail';
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Konieczna Zgoda 1';
        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }

    }

    const agreeAll = (event) => {
        let agree1 = document.getElementById('agree-1');
        let agree2 = document.getElementById('agree-2');

        agree1.checked = event.target.checked;
        agree2.checked = event.target.checked;

        agree1.disabled = event.target.checked;
        agree2.disabled = event.target.checked;

        /*     console.log(event.target.checked);
         */
    }

    newsletterForm.addEventListener('submit', validate);
    agreeAllChckbx.addEventListener('change', agreeAll);

