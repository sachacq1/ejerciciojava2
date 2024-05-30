const $form = document.getElementById("form");
const $numero1 = document.getElementById("number1");
const $numero2 = document.getElementById("number2");
const $sumar = document.getElementById("sumar");
const $parrafo = document.getElementById("resultado");

$form.addEventListener("submit", (e) => {
    e.preventDefault()

    const resultado = Number($numero1.value) + Number($numero2.value);
    $parrafo.innerHTML = `El resultado es ${resultado}`
});

