document.getElementById('dodaj').onclick = addText;
document.getElementById('usun').onclick = removeText;


function addText() {
    document.getElementById('p').textContent = 'Nowy tekst';
}

function removeText() {
    document.getElementById('p').textContent = '';
}

