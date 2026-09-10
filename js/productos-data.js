
// CATÁLOGO DE PRODUCTOS (sitio público + administrador)

const productos = [
  { codigo: "TC001", categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada de Chocolate", precio: 45000, descripcion: "Torta de chocolate con ganache y avellanas.", disponible: true, personalizable: true, imagen: "img/tc001.jpg" },
  { codigo: "TC002", categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada Frutos Rojos", precio: 48000, descripcion: "Bizcocho de vainilla con relleno de frutos rojos y crema.", disponible: true, personalizable: true, imagen: "img/tc002.jpg" },
  { codigo: "TC003", categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada Tres Leches", precio: 50000, descripcion: "Clásica torta tres leches con cobertura de merengue.", disponible: true, personalizable: true, imagen: "img/tc003.jpg" },

  { codigo: "TR001", categoria: "Tortas Circulares", nombre: "Torta Circular de Vainilla", precio: 42000, descripcion: "Bizcocho de vainilla con relleno de crema pastelera.", disponible: true, personalizable: true, imagen: "img/tr001.jpg" },
  { codigo: "TR002", categoria: "Tortas Circulares", nombre: "Torta Circular de Naranja", precio: 43000, descripcion: "Torta húmeda de naranja con glaseado cítrico.", disponible: true, personalizable: true, imagen: "img/tr002.jpg" },
  { codigo: "TR003", categoria: "Tortas Circulares", nombre: "Torta Red Velvet", precio: 52000, descripcion: "Torta red velvet con crema de queso.", disponible: true, personalizable: true, imagen: "img/tr003.jpg" },

  { codigo: "PI001", categoria: "Postres Individuales", nombre: "Cheesecake Individual", precio: 5500, descripcion: "Porción individual de cheesecake con salsa de frambuesa.", disponible: true, personalizable: false, imagen: "img/pi001.jpg" },
  { codigo: "PI002", categoria: "Postres Individuales", nombre: "Mousse de Chocolate", precio: 4800, descripcion: "Mousse de chocolate intenso con virutas de cacao.", disponible: true, personalizable: false, imagen: "img/pi002.jpg" },
  { codigo: "PI003", categoria: "Postres Individuales", nombre: "Tiramisú Individual", precio: 6000, descripcion: "Clásico tiramisú en formato individual.", disponible: true, personalizable: false, imagen: "img/pi003.jpg" },

  { codigo: "SA001", categoria: "Productos Sin Azúcar", nombre: "Torta Sin Azúcar de Limón", precio: 49000, descripcion: "Torta de limón endulzada con stevia.", disponible: true, personalizable: true, imagen: "img/sa001.jpg" },
  { codigo: "SA002", categoria: "Productos Sin Azúcar", nombre: "Brownie Sin Azúcar", precio: 5200, descripcion: "Brownie de cacao sin azúcar añadida.", disponible: true, personalizable: false, imagen: "img/sa002.jpg" },

  { codigo: "PT001", categoria: "Pastelería Tradicional", nombre: "Milhojas Tradicional", precio: 38000, descripcion: "Milhojas con manjar y crema pastelera.", disponible: true, personalizable: false, imagen: "img/pt001.jpg" },
  { codigo: "PT002", categoria: "Pastelería Tradicional", nombre: "Brazo de Reina", precio: 35000, descripcion: "Bizcocho enrollado relleno de manjar.", disponible: true, personalizable: false, imagen: "img/pt002.jpg" },

  { codigo: "VG001", categoria: "Productos Veganos", nombre: "Torta Vegana de Chocolate", precio: 53000, descripcion: "Torta vegana de chocolate con leche vegetal.", disponible: true, personalizable: true, imagen: "img/vg001.jpg" },

  { codigo: "GL001", categoria: "Productos Sin Gluten", nombre: "Torta Sin Gluten de Almendra", precio: 54000, descripcion: "Torta de harina de almendra, apta para celíacos.", disponible: true, personalizable: true, imagen: "img/gl001.jpg" },

  { codigo: "ES001", categoria: "Tortas Especiales", nombre: "Torta Especial Cumpleaños Infantil", precio: 65000, descripcion: "Torta temática infantil con decoración personalizada.", disponible: true, personalizable: true, imagen: "img/es001.jpg" }
];



// ADMIN — TABLA DE PRODUCTOS

function renderTablaProductos() {
  const tbody = document.getElementById("tabla-productos");
  if (!tbody) return;

  tbody.innerHTML = "";

  productos.forEach(producto => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.codigo}</td>
      <td>${producto.categoria}</td>
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.disponible ? "Sí" : "No"}</td>
      <td>
        <button class="btn-accion editar" data-codigo="${producto.codigo}">Editar</button>
        <button class="btn-accion eliminar" data-codigo="${producto.codigo}">Eliminar</button>
        <button class="btn-accion ver" data-codigo="${producto.codigo}">Ver</button>
      </td>
    `;

    tbody.appendChild(fila);
  });
}



// ADMIN — MODALES (confirmación + clave)
const modalConfirmar = document.getElementById("modal-confirmar");
const modalClave = document.getElementById("modal-clave");
const estado = document.getElementById("estado-admin");

let codigoAEliminar = null;

// ADMIN — BOTONES (editar / ver / eliminar)
document.addEventListener("click", (e) => {

  // EDITAR
  if (e.target.classList.contains("editar")) {
    const codigo = e.target.dataset.codigo;
    window.location.href = `editar-producto.html?codigo=${codigo}`;
    return;
  }

  // VER
  if (e.target.classList.contains("ver")) {
    const codigo = e.target.dataset.codigo;
    window.location.href = `mostrar-producto.html?codigo=${codigo}`;
    return;
  }

  // ELIMINAR
  if (e.target.classList.contains("eliminar")) {
    codigoAEliminar = e.target.dataset.codigo;

    // Si NO existen modales → EP1 simple
    if (!modalConfirmar || !modalClave) {
      if (estado) estado.textContent = `Producto ${codigoAEliminar} eliminado (simulación EP1).`;
      e.target.closest("tr").style.opacity = "0.5";
      return;
    }

    // Si existen modales → flujo completo
    modalConfirmar.style.display = "flex";
  }
});

// ADMIN — MODAL 1: Confirmación

document.getElementById("btn-confirmar-no")?.addEventListener("click", () => {
  modalConfirmar.style.display = "none";
});

document.getElementById("btn-confirmar-si")?.addEventListener("click", () => {
  modalConfirmar.style.display = "none";
  modalClave.style.display = "flex";
});


// ADMIN — MODAL 2: Clave administrador

document.getElementById("btn-clave-cancelar")?.addEventListener("click", () => {
  modalClave.style.display = "none";
});

document.getElementById("btn-clave-confirmar")?.addEventListener("click", () => {
  const clave = document.getElementById("clave-admin")?.value;

  if (!clave || clave.trim() === "") {
    estado.textContent = "Debe ingresar una clave.";
    return;
  }

  modalClave.style.display = "none";
  estado.textContent = `Producto ${codigoAEliminar} eliminado (simulación EP1).`;

  const fila = document.querySelector(`button[data-codigo="${codigoAEliminar}"]`)?.closest("tr");
  if (fila) fila.style.opacity = "0.5";
});



// ADMIN — DETALLE DEL PRODUCTO (mostrar-producto.html)

function cargarDetalleProductoAdmin() {
  const contenedor = document.getElementById("detalle-producto-admin");
  if (!contenedor) return;

  const params = new URLSearchParams(window.location.search);
  const codigo = params.get("codigo");
  const producto = productos.find(p => p.codigo === codigo);

  if (!producto) {
    contenedor.innerHTML = `<p>No se encontró el producto solicitado.</p>`;
    return;
  }

  contenedor.innerHTML = `
    <img src="../${producto.imagen}" alt="${producto.nombre}" class="img-detalle-admin">

    <table class="tabla-detalle detalle-edicion-simulada">
      <tr><th>Código</th><td>${producto.codigo}</td></tr>
      <tr><th>Nombre</th><td>${producto.nombre}</td></tr>
      <tr><th>Categoría</th><td>${producto.categoria}</td></tr>
      <tr><th>Precio</th><td>$${producto.precio}</td></tr>
      <tr><th>Disponible</th><td>${producto.disponible ? "Sí" : "No"}</td></tr>
      <tr><th>Descripción</th><td>${producto.descripcion}</td></tr>
    </table>
  `;
}



// ADMIN — EDITAR PRODUCTO (editar-producto.html)

function cargarProductoParaEditar() {
  const form = document.getElementById("form-editar-producto");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const codigo = params.get("codigo");
  const producto = productos.find(p => p.codigo === codigo);

  if (!producto) {
    estado.textContent = "No se encontró el producto para editar.";
    return;
  }

  form.codigo.value = producto.codigo;
  form.categoria.value = producto.categoria;
  form.nombre.value = producto.nombre;
  form.precio.value = producto.precio;
  form.descripcion.value = producto.descripcion;
  form.disponible.value = producto.disponible ? "true" : "false";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    estado.textContent = `Producto ${producto.codigo} actualizado (simulación EP1).`;
  });
}


// INICIALIZACIÓN AUTOMÁTICA

renderTablaProductos();
cargarDetalleProductoAdmin();
cargarProductoParaEditar();
