// js/regiones-comunas.js
// Datos de las 16 regiones de Chile y sus comunas, para usar en selects
// dependientes (región -> comuna) en formularios como registro.html.

const regiones = [
  {
    region: "Arica y Parinacota",
    comunas: ["Arica", "Camarones", "General Lagos", "Putre"]
  },
  {
    region: "Tarapacá",
    comunas: ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"]
  },
  {
    region: "Antofagasta",
    comunas: ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"]
  },
  {
    region: "Atacama",
    comunas: ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"]
  },
  {
    region: "Coquimbo",
    comunas: ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paiguano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"]
  },
  {
    region: "Valparaíso",
    comunas: ["Algarrobo", "Cabildo", "Calera", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quilpué", "Quillota", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar", "Zapallar"]
  },
  {
    region: "Metropolitana de Santiago",
    comunas: ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Til Til", "Vitacura"]
  },
  {
    region: "Libertador General Bernardo O'Higgins",
    comunas: ["Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchihue", "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "San Vicente", "Santa Cruz"]
  },
  {
    region: "Maule",
    comunas: ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañé", "Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"]
  },
  {
    region: "Ñuble",
    comunas: ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Trehuaco", "Yungay"]
  },
  {
    region: "Biobío",
    comunas: ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualqui", "Laja", "Lebu", "Los Álamos", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"]
  },
  {
    region: "La Araucanía",
    comunas: ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Teodoro Schmidt", "Temuco", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"]
  },
  {
    region: "Los Ríos",
    comunas: ["Corral", "Futrono", "Lago Ranco", "Lanco", "La Unión", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"]
  },
  {
    region: "Los Lagos",
    comunas: ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldón", "Purranque", "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"]
  },
  {
    region: "Aysén del General Carlos Ibáñez del Campo",
    comunas: ["Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"]
  },
  {
    region: "Magallanes y de la Antártica Chilena",
    comunas: ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"]
  }
];

/**
 * Llena un <select> con el nombre de todas las regiones.
 * @param {HTMLSelectElement} selectRegion
 */
function llenarSelectRegiones(selectRegion) {
  if (!selectRegion) return;

  selectRegion.innerHTML = '<option value="">Selecciona una región</option>';

  regiones.forEach(r => {
    const opcion = document.createElement("option");
    opcion.value = r.region;
    opcion.textContent = r.region;
    selectRegion.appendChild(opcion);
  });
}

/**
 * Llena un <select> de comunas según la región elegida.
 * @param {HTMLSelectElement} selectComuna
 * @param {string} nombreRegion
 */
function llenarSelectComunas(selectComuna, nombreRegion) {
  if (!selectComuna) return;

  const region = regiones.find(r => r.region === nombreRegion);

  if (!region) {
    selectComuna.innerHTML = '<option value="">Selecciona una región primero</option>';
    selectComuna.disabled = true;
    return;
  }

  selectComuna.disabled = false;
  selectComuna.innerHTML = '<option value="">Selecciona una comuna</option>';

  region.comunas.forEach(c => {
    const opcion = document.createElement("option");
    opcion.value = c;
    opcion.textContent = c;
    selectComuna.appendChild(opcion);
  });
}

/**
 * Conecta un select de región con uno de comuna para que este último
 * se actualice automáticamente al cambiar la región.
 * @param {HTMLSelectElement} selectRegion
 * @param {HTMLSelectElement} selectComuna
 */
function inicializarRegionesComunas(selectRegion, selectComuna) {
  if (!selectRegion || !selectComuna) return;

  llenarSelectRegiones(selectRegion);
  selectComuna.disabled = true;
  selectComuna.innerHTML = '<option value="">Selecciona una región primero</option>';

  selectRegion.addEventListener("change", () => {
    llenarSelectComunas(selectComuna, selectRegion.value);
  });
}

// VALIDACIONES PARA PRODUCTOS (nuevo-producto.html / editar-producto.html)

// Código obligatorio, sin espacios, máximo 10 caracteres
function validarCodigoProducto() {
  const input = document.getElementById("codigo");
  if (!input) return true; // en editar-producto es readonly

  const valor = input.value.trim();

  if (!valor) {
    mostrarError("codigo", "El código es obligatorio.");
    return false;
  }
  if (/\s/.test(valor)) {
    mostrarError("codigo", "El código no puede contener espacios.");
    return false;
  }
  if (valor.length > 10) {
    mostrarError("codigo", "Máximo 10 caracteres.");
    return false;
  }

  limpiarError("codigo");
  return true;
}

// Nombre obligatorio, máximo 100 caracteres
function validarNombreProducto() {
  const valor = document.getElementById("nombre").value;
  if (!validarTextoObligatorio(valor, 100)) {
    mostrarError("nombre", "El nombre es obligatorio (máximo 100 caracteres).");
    return false;
  }
  limpiarError("nombre");
  return true;
}

// Precio mayor a 0
function validarPrecioProducto() {
  const input = document.getElementById("precio");
  const valor = Number(input.value);

  if (!valor || valor <= 0) {
    mostrarError("precio", "El precio debe ser mayor a 0.");
    return false;
  }

  limpiarError("precio");
  return true;
}

// Descripción obligatoria, máximo 500 caracteres
function validarDescripcionProducto() {
  const valor = document.getElementById("descripcion").value;
  if (!validarTextoObligatorio(valor, 500)) {
    mostrarError("descripcion", "La descripción es obligatoria (máximo 500 caracteres).");
    return false;
  }
  limpiarError("descripcion");
  return true;
}

// Categoría debe ser una opción válida del select
function validarCategoriaProducto() {
  const valor = document.getElementById("categoria").value;
  if (!valor) {
    mostrarError("categoria", "Selecciona una categoría.");
    return false;
  }
  limpiarError("categoria");
  return true;
}

// Disponibilidad debe ser true o false
function validarDisponibleProducto() {
  const valor = document.getElementById("disponible").value;
  if (valor !== "true" && valor !== "false") {
    mostrarError("disponible", "Selecciona disponibilidad.");
    return false;
  }
  limpiarError("disponible");
  return true;
}

// Inicializa validaciones para nuevo-producto.html
function inicializarFormularioNuevoProducto() {
  const form = document.getElementById("form-nuevo-producto");
  if (!form) return;

  const validadores = {
    codigo: validarCodigoProducto,
    categoria: validarCategoriaProducto,
    nombre: validarNombreProducto,
    precio: validarPrecioProducto,
    descripcion: validarDescripcionProducto,
    disponible: validarDisponibleProducto
  };

  Object.keys(validadores).forEach(id => {
    const campo = document.getElementById(id);
    if (!campo) return;
    const evento = campo.tagName === "SELECT" ? "change" : "blur";
    campo.addEventListener(evento, validadores[id]);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const resultados = Object.values(validadores).map(fn => fn());
    const valido = resultados.every(Boolean);
    const estado = document.getElementById("estado-admin");

    if (!valido) {
      estado.textContent = "Revisa los campos marcados en rojo.";
      return;
    }

    estado.textContent = "Producto creado (simulación EP1).";
    form.reset();
  });
}

// Inicializa validaciones para editar-producto.html
function inicializarFormularioEditarProducto() {
  const form = document.getElementById("form-editar-producto");
  if (!form) return;

  const validadores = {
    categoria: validarCategoriaProducto,
    nombre: validarNombreProducto,
    precio: validarPrecioProducto,
    descripcion: validarDescripcionProducto,
    disponible: validarDisponibleProducto
  };

  Object.keys(validadores).forEach(id => {
    const campo = document.getElementById(id);
    if (!campo) return;
    const evento = campo.tagName === "SELECT" ? "change" : "blur";
    campo.addEventListener(evento, validadores[id]);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const resultados = Object.values(validadores).map(fn => fn());
    const valido = resultados.every(Boolean);
    const estado = document.getElementById("estado-admin");

    if (!valido) {
      estado.textContent = "Revisa los campos marcados en rojo.";
      return;
    }

    estado.textContent = "Producto actualizado (simulación EP1).";
  });
}

// Inicialización automática según la página
document.addEventListener("DOMContentLoaded", () => {
  inicializarFormularioNuevoProducto();
  inicializarFormularioEditarProducto();
});
