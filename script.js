let globo = document.getElementById('globo');
const zona = document.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
globo.style.fontSize = '30px';
let tamanioActual = globo.style.fontSize;
const tamanioMax = 250;
const tamanioMin = 30;
const aumento = 5;
document.addEventListener('keydown', explosion);

function explosion(event){
    let tecla = event.key;
    if (tecla == 'ArrowUp') {
        if (parseInt(tamanioActual) < tamanioMax) {
            tamanioActual = parseInt(tamanioActual) + aumento + 'px';
            globo.style.fontSize = tamanioActual;
        } else {
            //Boom &#128165;
            document.removeEventListener('keydown',explosion);
            globo.innerHTML = '&#128165';
            zona.appendChild(generaBoton('Reiniciar')); //genera boton
            //document.getElementById('Reiniciar').addEventListener('click',alert('funciona'));
            //?Revisar el boton con evento

            // * Ponerle evento al botón y 
            // * después reiniciar el texto y borrar boton/evento



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