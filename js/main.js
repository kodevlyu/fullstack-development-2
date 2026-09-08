// js/main.js

function renderProductos(lista) {
  const contenedor = document.getElementById("lista-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement("article");
    card.className = "card-producto";

    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p class="categoria">${p.categoria}</p>
      <p class="precio">$${p.precio.toLocaleString("es-CL")}</p>
      <a href="detalle-producto.html?codigo=${p.codigo}" class="btn">Ver detalle</a>
    `;

    contenedor.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof productos !== "undefined") {
    renderProductos(productos);
  }

  const select = document.getElementById("categoria");
  if (select && typeof productos !== "undefined") {
    select.addEventListener("change", () => {
      const cat = select.value;
      const filtrados = cat === "todas"
        ? productos
        : productos.filter(p => p.categoria === cat);
      renderProductos(filtrados);
    });
  }
});

function obtenerCodigoProducto() {
  const params = new URLSearchParams(window.location.search);
  return params.get("codigo");
}

function renderDetalleProductoPublico() {
  const cont = document.getElementById("detalle-producto");
  if (!cont || typeof productos === "undefined") return;

  const codigo = obtenerCodigoProducto();
  const p = productos.find(prod => prod.codigo === codigo);

  if (!p) {
    cont.innerHTML = "<p>Producto no encontrado.</p>";
    return;
  }

  cont.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <h1>${p.nombre}</h1>
    <p>${p.descripcion}</p>
    <p>Categoría: ${p.categoria}</p>
    <p>Precio: $${p.precio.toLocaleString("es-CL")}</p>
  `;

  const personalizacion = document.getElementById("personalizacion");
  if (personalizacion) {
    personalizacion.style.display = p.personalizable ? "block" : "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("detalle-producto")) {
    renderDetalleProductoPublico();
  }

  const form = document.getElementById("form-mensaje");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const mensaje = document.getElementById("mensaje").value.trim();
      const estado = document.getElementById("estado-mensaje");

      if (!mensaje) {
        estado.textContent = "Debes ingresar un mensaje.";
        return;
      }

      estado.textContent = "Mensaje guardado (simulación EP1).";
    });
  }
});
