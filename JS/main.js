const correo = document.querySelector('#correo');
const boton = document.querySelector('.boton__submit');
const textoError = document.querySelector('.pError');
const iconError = document.querySelector('.main__info--error');

const validar = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/;

function validarCorreo() {

    if (!validar.test(correo.value)) {
        document.getElementsByClassName('main__submit')[0].style.borderColor = '#ff0000';
        textoError.classList.remove('inactive');
        iconError.classList.remove('inactive');
    }
}

boton.addEventListener('click', validarCorreo);