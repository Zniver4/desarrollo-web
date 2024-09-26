const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $loader = d.querySelector("#loader");

d.addEventListener("click", function (e) {
  if (e.target.matches(".btn-agregar")) {
    const $producto = e.target.closest(".producto");
    let nombre = $producto.getAttribute("data-nombre");
    let precio = parseFloat($producto.getAttribute("data-precio"));

    const $itemCarrito = d.createElement("li");
    $itemCarrito.innerHTML = `${nombre} - $${precio} <button class="btn-quitar">-</button>`;

    $listaCarrito.appendChild($itemCarrito);

    let totalActual = parseFloat($totalCarrito.innerText);
    $totalCarrito.innerText = (totalActual + precio).toFixed(2);
  }

  if (e.target.matches(".btn-quitar")) {
    const $item = e.target.closest("li");
    let precio = parseFloat($item.innerText.split("- $")[1]);

    $item.remove();

    let totalActual = parseFloat($totalCarrito.innerText);
    $totalCarrito.innerText = (totalActual - precio).toFixed(2);
  }
});

$btnCompra.addEventListener("click", function (e) {
  if ($listaCarrito.children.length > 0) {
    $loader.classList.remove("hidden");
    setTimeout(() => {
      $loader.classList.add("hidden");
      $mensajeCompra.classList.remove("hidden");
    }, 5000);
  } else {
    alert("El carrito está vacío, no se puede realizar la compra.");
  }
});

