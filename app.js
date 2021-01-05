// VARIABLES
const bttn = document.querySelector('#bttn');
const sorpresa = document.querySelector('#sorpresa');



cargarEventListeners();
function cargarEventListeners() {
    bttn.addEventListener('click', agregarSorpresa)
}

// FUNCIONES
function agregarSorpresa() {
    const mensajeSorpresa = document.createElement('p');
    mensajeSorpresa.textContent = 'Feliz cumpleaños xd';
    mensajeSorpresa.classList.add('center-text');
    

    const imgSorpresa = document.createElement('img');
    imgSorpresa.setAttribute("src", "img/hb.gif");
    imgSorpresa.setAttribute("alt", "img Sorpresa");
    imgSorpresa.setAttribute("class", "ancho sorpresa");
    

    const noRepeat = document.querySelectorAll('.center-text');
    if(noRepeat.length === 0) {
        sorpresa.appendChild(mensajeSorpresa);
        document.body.appendChild(imgSorpresa);
    }
}