const zona = document.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling; //Main
cargar();
const tamanioMax = 200;
const tamanioMin = 30;
const aumento = 5;

//Función para inflar o desinflar
function desinflar(event) {
    let tamanioActual = elemento.style.fontSize;
    if (parseInt(tamanioActual) < tamanioMax) {
        let tecla = event.key;
        if (tecla == 'ArrowUp') {
            if (parseInt(tamanioActual) < tamanioMax) {
                tamanioActual = parseInt(tamanioActual) + aumento + 'px';
                elemento.style.fontSize = tamanioActual;
            }
        } else {
            if (tecla == 'ArrowDown') {
                if (parseInt(tamanioActual) > tamanioMin) {
                    tamanioActual = parseInt(tamanioActual) - aumento + 'px';
                    elemento.style.fontSize = tamanioActual;
                }
            }
        }
    } else { //Generar la explosión si el tamaño es el máximo
        borrarNodosHijos(zona);
        document.removeEventListener('keydown', desinflar);
        generarBoom('Reiniciar');
    }
}

//Genera un botón y le añade una función reinciar
function generaBoton(nombre) {
    let boton = document.createElement('button');
    let txt = document.createTextNode(nombre);
    boton.appendChild(txt);
    boton.id = nombre;
    boton.addEventListener('click', reiniciar);
    zona.appendChild(boton);
}

//Reinicia la pantalla
function reiniciar() {
    borrarNodosHijos(zona);
    cargar();
}

//Carga el globo con su evento
function cargar() {
    borrarNodosHijos(zona);
    let globo = document.createElement('p');
    let code = document.createTextNode(String.fromCodePoint(0x1F388));
    globo.appendChild(code);
    globo.id = 'elemento';
    zona.appendChild(globo);
    globo.style.fontSize = '30px';
    document.addEventListener('keydown', desinflar);
}

//Genera la explosión y el botón
function generarBoom(nombre) {
    let elemento = document.createElement('p');
    let txt = document.createTextNode(String.fromCodePoint(0x1F4A5));
    elemento.appendChild(txt);
    zona.appendChild(elemento);
    elemento.style.fontSize = tamanioMax + 'px';
    let reiniciar = generaBoton(nombre);
    zona.appendChild(reiniciar);
}

//Borrar los hijos del padre
function borrarNodosHijos(padre) {
    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
}