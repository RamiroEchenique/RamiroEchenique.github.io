let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function () {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Ingresa a tu cuenta";
    signUp.classList.ad("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function () {
    nameInput.style.maxHeight = "initial";
    title.innerHTML = "Crea una nueva cuenta";
    signUp.classList.remove("disable");
    signIn.classList.ad("disable");
}

/* validacion formulario */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = form.querySelector('input[placeholder="Nombre"]');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");

    // validacion del nombre
    function validarNombre() {
        if (nameInput.value.trim() === "") {
            mostrarError(nameInput, "El nombre es obligatorio.");
            return false;
        }
        ocultarError(nameInput);
        return true;
    }

    // validacion del email
    function validarEmail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            mostrarError(emailInput, "Ingrese un correo electrónico válido.");
            return false;
        }
        ocultarError(emailInput);
        return true;
    }

    // validacion de la contraseña
    function validarContrasena() {
        if (passwordInput.value.length < 6) {
            mostrarError(passwordInput, 'La contraseña debe tener al menos 6 caracteres.');
            return false;
        }
        ocultarError(passwordInput);
        return true;
    }

    // al perder el foco se valida el campo
    nameInput.addEventListener("blur", validarNombre);
    emailInput.addEventListener("blur", validarEmail);
    passwordInput.addEventListener("blur", validarContrasena);

    // mostrar un mensaje de error
    function mostrarError(input, mensaje) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('span');
            errorElement.className = 'error';
            input.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = mensaje;
    }

    // ocultar el mensaje de error mostrado
    function ocultarError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.textContent = '';
        }
    }

    // evento de validacion en el envio del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombreValido = validarNombre();
        const correoValido = validarEmail();
        const contrasenaValida = validarContrasena();

        if (nombreValido && correoValido && contrasenaValida) {
            console.log('¡Formulario enviado!');
        }
    });

    signUpButton.addEventListener('click', () => {
        if (validarNombre() && validarEmail() && validarContrasena()) {
            form.submit();
        }
    });
    
    // metodo para quitar los mensajes de error cuando hacemos click entre registrar e ingresar
    function ocultarErrores() {
        const errorElements = form.querySelectorAll('.error');
        errorElements.forEach(element => element.textContent = '');
    }

    // para que se borren los campos cuando hacemos click 
    signUpButton.addEventListener('click', () => {
        ocultarErrores();
        title.innerHTML = "Crea una nueva cuenta";
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        nameInput.style.maxHeight = "";
        signUpButton.classList.remove("disable");
        signInButton.classList.add("disable");
    });
    // para que se borren los campos cuando hacemos click 
    signInButton.addEventListener('click', () => {
        ocultarErrores();
        title.innerHTML = "Ingresa a tu cuenta";
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        nameInput.style.maxHeight = "0";
        signUpButton.classList.add("disable");
        signInButton.classList.remove("disable");
    });
});