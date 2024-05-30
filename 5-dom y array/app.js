const $form = document.getElementById("form");
const $input = document.getElementById("filtroNombres");
const $filtrarNombres = document.getElementById("filtrarNombres");
const $lista = document.getElementById("listaNombres");
const $parrafo = document.querySelector("p")

const nombres = [
    "Ana",
    "Carlos",
    "Beatriz",
    "Daniel",
    "Alejandro"
];

nombres.forEach((nombre) => {
    $lista.innerHTML += `<li>${nombre}</li>`;

});

$input.addEventListener("input", () => {
    const nombreValue = $input.value.toLowerCase();

    const nombresFiltrados = nombres.filter((nombre) => {
        return nombre.toLowerCase().includes(nombreValue);
    });
    $lista.innerHTML = "";
    nombresFiltrados.forEach((nombre) => {
        $lista.innerHTML += `<li>${nombre}</li>`
    });

});

$form.addEventListener("submit", (e) => {
    e.preventDefault();
});