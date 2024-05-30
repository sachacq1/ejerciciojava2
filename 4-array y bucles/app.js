const $form = document.getElementById("form");
const $mostrar = document.getElementById("array");
const $lista = document.getElementById("lista");

const frutas = [
    "Manzana",
    "Banana",
    "Cereza",
    "Datil"
]

$lista.innerHTML = "";

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaFrutas = frutas.map((fruta) => {
        return `<li>${fruta}</li>`;


    });
    $lista.innerHTML = listaFrutas.join("")
});

const $form2 = document.getElementById("form2");
const $sumarArray = document.getElementById("sumarArray");
const $parrafo = document.getElementById("p");

const numeros = [1, 2, 3, 4, 5]

$form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultado = numeros.reduce((total, numero) => total + numero, 0);
    console.log(resultado)
});