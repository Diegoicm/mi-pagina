function mostrarMensaje() {
    // Crear un elemento para el mensaje
    let mensaje = document.createElement("p");
    mensaje.innerText = "Te amo muchísimo, mi amor ❤️";
    mensaje.style.fontSize = "50px";
    mensaje.style.color = "red";
    mensaje.style.fontWeight = "bold";
    mensaje.style.marginTop = "20px";

    // Crear un corazón animado
    let corazon = document.createElement("div");
    corazon.innerHTML = "❤️";
    corazon.style.fontSize = "300px";
    corazon.style.animation = "latido 1s infinite";
    corazon.style.marginTop = "10px";

    // Agregar los elementos al cuerpo del documento
    let contenedor = document.getElementById("mensaje-container");
    contenedor.innerHTML = ""; // Limpiar mensaje anterior
    contenedor.appendChild(mensaje);
    contenedor.appendChild(corazon);
}

