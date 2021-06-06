const btnAdd = document.getElementById('btnCrearCuadrilla'); //Trae el evento click
const container = document.getElementById('container'); //Trae el div contenedor
const inputColumna = document.getElementById('numero-columnas'); //Trae lo que ingresamos en el input de columnas
const inputFilas = document.getElementById('numero-filas'); //Trae lo que ingresamos en el input de filas
const inputFondo = document.getElementById('fondo'); // Trae el color que seleccionamos para el fondo
const inputColorLapiz = document.getElementById('colorLapiz'); // Trae el color que seleccionamos para el lapiz
const btnLapiz = document.getElementById('btnLapiz'); // Activa el lapiz
const btnGoma = document.getElementById('btnGoma'); // Activa la goma
let modoLapiz = true;
const inputCheck = document.getElementById('bordes');
const inputTamanio = document.getElementById('tamanio');


btnAdd.addEventListener('click', function() {
    //Vaciar el html
    container.innerHTML = '';
    inputTamanio.value = 15;
    //Estilo de css que crea el pixelArt
    container.style.gridTemplateColumns = `repeat(${inputColumna.value}, 1fr)`;
    // Agrega color de fondo
    //container.style.backgroundColor = inputFondo.value;
    //Calculo del producto de filas y columnas
    const producto = parseInt(inputColumna.value * inputFilas.value);
    //Inicio del for
    for (let i = 0; i < producto; i++) {
        //Crea el elemento div
        const nuevoDiv = document.createElement('div');
        //Agrega al div una clase "caja"
        nuevoDiv.classList.add('caja');
        nuevoDiv.style.backgroundColor = inputFondo.value;
        //Agrega el div creado al contenedor
        container.appendChild(nuevoDiv);
        //Creamos la funcion
        nuevoDiv.addEventListener('click', function() {
            if (modoLapiz === true) {
                nuevoDiv.style.backgroundColor = inputColorLapiz.value;
            } else {
                nuevoDiv.style.backgroundColor = inputFondo.value;
            }

        });
    }
});

/*inputFondo.addEventListener('input', function () {
 container.style.backgroundColor = inputFondo.value;
});*/

btnLapiz.addEventListener('click', function() {
    modoLapiz = true;
    btnGoma.style.opacity = 0.5;
    btnLapiz.style.opacity = 1;
});

btnGoma.addEventListener('click', function() {
    modoLapiz = false;
    btnGoma.style.opacity = 1;
    btnLapiz.style.opacity = 0.5;
});

inputCheck.addEventListener('change', function() {
    const celdas = document.getElementsByClassName('caja');
    for (let index = 0; index < celdas.length; index++) {
        const celda = celdas[index];
        if (inputCheck.checked) {
            celda.style.border = "1px solid black";
        } else {
            celda.style.border = "none";
        }

    }
})
inputTamanio.addEventListener('change', function () {
    const celdas = document.getElementsByClassName('caja');
    for (let index = 0; index < celdas.length; index++) {
        const celda = celdas[index];
        celda.style.width = `${inputTamanio.value}px`;
        celda.style.height = `${inputTamanio.value}px`;
    }
})