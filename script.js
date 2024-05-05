document.addEventListener('DOMContentLoaded', function () {
    const formCodigoPostal = document.getElementById('form-codigo-postal');
    const formMatricula = document.getElementById('form-matricula');
    const formCorreo = document.getElementById('form-correo');
    const formTexto = document.getElementById('form-texto');
    const formDNI = document.getElementById('form-dni');
    const formContrasena = document.getElementById('form-contrasena');

    // Cuatro dígitos
    formCodigoPostal.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputValue = this.querySelector('input').value;
        inputValue.match(/^\d{4}$/) ? alert("Has cumplido la instrucción. Enviando datos.") : alert("Valor incorrecto, merluzo!");
    });

    // Una matrícula
    formMatricula.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputValue = this.querySelector('input').value;
        inputValue.match(/^\d{3,4}[A-Z]{3}$/) ? alert("Has cumplido la instrucción. Enviando datos.") : alert("Valor incorrecto, merluzo!");
    });

    // Dirección de email
    formCorreo.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputValue = this.querySelector('input').value;
        inputValue.match(/^\S+@\S+\.\S+$/) ? alert("Has cumplido la instrucción. Enviando datos.") : alert("Valor incorrecto, merluzo!");
    });

    // comienza con mayuscula nombre completo
    formTexto.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputValue = this.querySelector('input').value;
        !inputValue.match(/^\s+$/) && inputValue.length ? alert("Has cumplido la instrucción. Enviando datos.") : alert("Valor incorrecto, merluzo!");
    });

    // Número de DNI
    formDNI.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputValue = this.querySelector('input').value;
        inputValue.match(/^\d{7,8}[A-Z]|X\d{7,8}[A-Z]$/) ? alert("Has cumplido la instrucción. Enviando datos.") : alert("Valor incorrecto, merluzo!");
    });

    // Contraseña
    formContrasena.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputValue = this.querySelector('input').value;
        inputValue.match(/[0-9]/) && inputValue.match(/[A-Z]/) && inputValue.match(/[a-z]/) && inputValue.match(/[!$*]/) && inputValue.length >= 7 ? alert("Has cumplido la instrucción. Enviando datos.") : alert("Valor incorrecto, merluzo!");
    });
});
