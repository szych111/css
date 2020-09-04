let inputImie = document.getElementById('imie');
let inputNazwisko = document.getElementById('nazwisko');
let inputTelefon = document.getElementById('telefon');

document.querySelector('button').onclick = getData;

function getData() {
    document.getElementById('name').textContent = inputImie.nodeValue;
    document.getElementById('surname').textContent = inputNazwisko.nodeValue;
    document.getElementById('phone').textContent = inputTelefon.nodeValue;
}
