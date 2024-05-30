const $form = document.getElementById("form");
const $input = document.getElementById("buscar");
const $button = document.getElementById("encontrar");
const $parrafo = document.getElementById("producto");

const listaProductos = [
    {
        name: "laptot",
        price: "$250000.00"
    },
    {
        name: "escritorio",
        price: "$120000.00"
    },
    {
        name: "teclado",
        price: "$50000.00"
    },
    {
        name: "monitor",
        price: "$135000.00"
    },
    {
        name: "celular",
        price: "$550000.00"
    }
];

listaProductos.map((product) => {
    $parrafo.innerHTML += ` <li>${product.name} | ${product.price}</li>`

});

$button.addEventListener("click", () => {
    const inputValue = $input.value.toLowerCase();

    const filterProduct = listaProductos.find((product) => {
        if (
            product.name.includes(inputValue)
        );
        $parrafo.innerHTML += `<li>${product.name} | ${product.price}<li/>`
    });




});

$form.addEventListener("submit", (e) => {
    e.preventDefault()
})