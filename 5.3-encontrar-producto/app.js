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

// listaProductos.map((product) => {
//     $parrafo.innerHTML += ` <li>${product.name} | ${product.price}</li>`

// });
listaProductos.find((product) => {
    $parrafo.innerHTML += `<li>${product.name} | ${product.price} </li>`;
});

$input.addEventListener("input", () => {
    const inputValue = $input.value.toLowerCase();

    const filterProduct = listaProductos.filter((product) => {
        if (
            product.name.includes(inputValue) || String(product.price).includes(inputValue)
        ) {
            return product;
        }

    });
    $parrafo.innerHTML = "";
    filterProduct.forEach((product) => {
        $parrafo.innerHTML += `<li>${product.name} | ${product.price}<li/>`
    })


});



$form.addEventListener("submit", (e) => {
    e.preventDefault()
})

