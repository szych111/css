const setBackground = () => {
    let pRed = document.querySelector('.red');
    let pYellow = document.querySelector('.yellow');

    pRed.classList.add('redBG');
    pYellow.classList.add('yellowBG');
}

let btnSetBG = document.getElementById('set-background');

btnSetBG.addEventListener('click', setBackground); 


