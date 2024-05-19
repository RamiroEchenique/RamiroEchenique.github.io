let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function () {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Ingresa a tu cuenta";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function () {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Crea una nueva cuenta";
    signUp.classList.remove("disable");
    signIn.classList.ad("disable");
}