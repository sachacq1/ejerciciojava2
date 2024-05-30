const $form = document.getElementById("form");
const $lista = document.getElementById("listaPrecios");
const $button = document.getElementById("mostrarIva");
const $parrafo = document.getElementById("parrafo");

const listaPrecio = [
    {
        name: "pc",
        price: "$450000"

    },
    {
        name: "teclado",
        price: "$43000"

    },
    {
        name: "monitor",
        price: "$120000"

    }
];

listaPrecio.forEach((product) => {


    $parrafo.innerHTML += (`<li>${product.name} | ${product.price}</li>`);
});
$form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Calcular precios con IVA
    const listaPrecioIva = listaPrecio.map((product) => {
        const precio = parseInt(product.price.replace("$", "").replace(",", ""));
        const precioConIva = (precio * 1.21).toFixed(2);
        return { name: product.name, price: `$${precioConIva}` };
    });

    // Mostrar lista de precios con IVA
    $parrafo.innerHTML = ""; // Limpiar el contenido anterior
    listaPrecioIva.forEach((product) => {
        $parrafo.innerHTML += `<li>${product.name} | ${product.price}</li>`;
    });
});