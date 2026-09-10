
// CATÁLOGO PÚBLICO — RENDER DE TARJETAS (productos.html)
function renderProductos(lista) {
  const contenedor = document.getElementById("lista-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement("article");

    // Clase unificada para evitar conflictos entre versiones
    card.className = "producto-card";

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



// CATÁLOGO PÚBLICO — FILTRO POR CATEGORÍA
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

// DETALLE PÚBLICO — OBTENER CÓDIGO DESDE URL
function obtenerCodigoProducto() {
  const params = new URLSearchParams(window.location.search);
  return params.get("codigo");
}


// DETALLE PÚBLICO — RENDER DE INFORMACIÓN (detalle-producto.html)

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

  // Mostrar personalización solo si el producto lo permite
  const personalizacion = document.getElementById("personalizacion");
  if (personalizacion) {
    personalizacion.style.display = p.personalizable ? "block" : "none";
  }
}


// DETALLE PÚBLICO — FORMULARIO DE PERSONALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {

  // Render del detalle
  if (document.getElementById("detalle-producto")) {
    renderDetalleProductoPublico();
  }

  // Manejo del formulario de mensaje personalizado
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

      // Simulación EP1
      estado.textContent = "Mensaje guardado (simulación EP1).";
    });
  }
});
