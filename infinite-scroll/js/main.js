let pageEnd = 0;

let preloading = false;

const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log(`showPreloader()`);
    preloader.style.display = 'block';
    preloading = true;
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log(`hidePreloader()`);
    preloader.style.display = 'none';
    preloading = false;
}

const getData = () => {

    if (!preloading) {

        showPreloader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {

            let body = document.body;
            let hr = document.createElement('hr');
            body.appendChild(hr);

            for (let user of data) {
                let pID = document.createElement('p');
                let pName = document.createElement('p');
                let pWebsite = document.createElement('p');

                pID.innerText = `User ID: ${user.id}`;
                pName.innerText = `User name: ${user.name}`;
                pWebsite.innerHTML = `User URL: ${user.url}<br>-----------`;

                body.appendChild(pID);
                body.appendChild(pName);
                body.appendChild(pWebsite);

            }
            
            hidePreloader();

            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

    }
    
}

const scrollToEndOfPage = () => {
    
    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    console.log(scrollHeight);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);

    if (sumScrollTopClientHeight >= scrollHeight) {

        pageEnd += 1;

        console.log(`Page end reached ${pageEnd} times`);

        getData();

    }

}

window.addEventListener('scroll', scrollToEndOfPage);