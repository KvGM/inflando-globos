const zona = document.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling; //Main
cargar();
const tamanioMax = 400;
const tamanioMin = 30;
const aumento = 5;

function explosion(event){
    let tamanioActual = globo.style.fontSize;
    let tecla = event.key;
    if (tecla == 'ArrowUp') {
        if (parseInt(tamanioActual) < tamanioMax) {
            tamanioActual = parseInt(tamanioActual) + aumento + 'px';
            globo.style.fontSize = tamanioActual;
        } else {
            document.removeEventListener('keydown',explosion);
            borrarNodosHijos(zona);
            globo.innerHTML = '💥'; //Cambiar 
            zona.appendChild(generaBoton('reiniciar'));
            document.addEventListener('click', reiniciar);
        }
    } else {
        if (tecla == 'ArrowDown') {
            if (parseInt(tamanioActual) > tamanioMin) {
                tamanioActual = parseInt(tamanioActual) - aumento + 'px';
                globo.style.fontSize = tamanioActual;
            }
        }
    }
}

function generaBoton(nombre){
    let boton = document.createElement('button');
    let txt = document.createTextNode(nombre);
    boton.appendChild(txt);
    boton.id = nombre;
    return boton;
}

function reiniciar(event){
    if(event.target && event.target.id == 'reiniciar'){ //Mal
        borrarNodosHijos(zona);
        cargar();
    }
}

function cargar(){
    borrarNodosHijos(zona);
    let globo = document.createElement('p');
    let code = document.createTextNode('🎈'); //Buscar como cambiar esto
    globo.appendChild(code);
    globo.id = 'globo';
    zona.appendChild(globo);
    globo.style.fontSize = '30px';
    document.addEventListener('keydown', explosion);
}

function borrarNodosHijos(padre) {
    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
}