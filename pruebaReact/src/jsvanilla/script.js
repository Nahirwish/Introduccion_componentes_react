
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");

function cambiarTexto() {
    mensaje.textContent = "El texto fue cambiado";
}

boton.addEventListener("click", cambiarTexto);
