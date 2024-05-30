
const $form = document.getElementById("form");
const $edad = document.getElementById("input");
const $buton = document.getElementById("submit");
const $parrafo = document.querySelector("p");

$form.addEventListener("submit", (e) => {
    e.preventDefault();


    if ($edad.value >= 18) {
        $parrafo.innerHTML = "Puedes pasar";
    } else {
        $parrafo.innerHTML = "No puedes pasar. Eres menor de edad.";
    }
});