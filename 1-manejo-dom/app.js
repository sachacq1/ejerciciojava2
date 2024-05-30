const $contenido = document.getElementById("contenido");
const $cambiarColor = document.getElementById("cambiar-color");

$contenido.innerHTML = `<h1>Hola mundo</h1>`;

$cambiarColor.addEventListener("click", (e) => {
    const colorSquare = document.getElementById("divColor");
    colorSquare.style.background = 'red'
});



