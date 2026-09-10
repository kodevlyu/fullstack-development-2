// js/validaciones.js
// Funciones de validación reutilizables para los formularios del sitio
// (registro, login, contacto, mantenedores de admin) según las reglas
// definidas en el README del proyecto.

const DOMINIOS_CORREO_PERMITIDOS = ["duoc.cl", "profesor.duoc.cl", "gmail.com"];

function validarRun(run) {
  if (typeof run !== "string") return false;

  const limpio = run.trim().toUpperCase();

  // No se aceptan puntos ni guion: solo dígitos y, al final, un dígito o K
  if (!/^[0-9]+[0-9K]$/.test(limpio)) return false;
  if (limpio.length < 7 || limpio.length > 9) return false;

  const cuerpo = limpio.slice(0, -1);
  const dv = limpio.slice(-1);

  let suma = 0;
  let multiplo = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i], 10) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }

  const resto = 11 - (suma % 11);
  let dvEsperado;
  if (resto === 11) dvEsperado = "0";
  else if (resto === 10) dvEsperado = "K";
  else dvEsperado = String(resto);

  return dv === dvEsperado;
}

/**
 * Valida que el correo tenga un dominio permitido y no supere el largo máximo.
 * @param {string} correo
 * @param {number} largoMaximo
 * @returns {boolean}
 */
function validarCorreo(correo, largoMaximo = 100) {
  if (typeof correo !== "string" || !correo.trim()) return false;
  if (correo.length > largoMaximo) return false;

  const patron = new RegExp(
    `^[^\\s@]+@(${DOMINIOS_CORREO_PERMITIDOS.map(d => d.replace(".", "\\.")).join("|")})$`,
    "i"
  );

  return patron.test(correo.trim());
}

/**
 * Valida que un texto no esté vacío y no supere un largo máximo.
 * @param {string} texto
 * @param {number} largoMaximo
 * @returns {boolean}
 */
function validarTextoObligatorio(texto, largoMaximo) {
  if (typeof texto !== "string") return false;
  const limpio = texto.trim();
  return limpio.length > 0 && limpio.length <= largoMaximo;
}

/**
 * Valida que una contraseña tenga entre 4 y 10 caracteres.
 * @param {string} clave
 * @returns {boolean}
 */
function validarContrasena(clave) {
  if (typeof clave !== "string") return false;
  return clave.length >= 4 && clave.length <= 10;
}

/**
 * Muestra un mensaje de error bajo un campo (span con id "error-<idCampo>").
 * @param {string} idCampo
 * @param {string} mensaje
 */
function mostrarError(idCampo, mensaje) {
  const campo = document.getElementById(idCampo);
  const error = document.getElementById(`error-${idCampo}`);

  if (campo) campo.classList.add("campo-invalido");
  if (error) error.textContent = mensaje;
}

/**
 * Limpia el mensaje de error de un campo.
 * @param {string} idCampo
 */
function limpiarError(idCampo) {
  const campo = document.getElementById(idCampo);
  const error = document.getElementById(`error-${idCampo}`);

  if (campo) campo.classList.remove("campo-invalido");
  if (error) error.textContent = "";
}

// ---------------------------------------------------------------------
// Lógica específica del formulario de registro (registro.html)
// ---------------------------------------------------------------------

function obtenerUsuarios() {
  try {
    const datos = localStorage.getItem("usuarios");
    return datos ? JSON.parse(datos) : [];
  } catch (error) {
    console.error("No se pudo leer 'usuarios' desde localStorage:", error);
    return [];
  }
}

function guardarUsuarios(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

/**
 * Valida el campo RUN y muestra/limpia su error. Devuelve true si es válido.
 */
function validarCampoRun() {
  const input = document.getElementById("run");
  const valor = input.value.trim().toUpperCase();

  if (!valor) {
    mostrarError("run", "El RUN es obligatorio.");
    return false;
  }
  if (!validarRun(valor)) {
    mostrarError("run", "RUN inválido. Ingresa entre 7 y 9 caracteres, sin puntos ni guion (ej: 187654321).");
    return false;
  }

  limpiarError("run");
  return true;
}

function validarCampoNombre() {
  const valor = document.getElementById("nombre").value;
  if (!validarTextoObligatorio(valor, 50)) {
    mostrarError("nombre", "El nombre es obligatorio (máximo 50 caracteres).");
    return false;
  }
  limpiarError("nombre");
  return true;
}

function validarCampoApellidos() {
  const valor = document.getElementById("apellidos").value;
  if (!validarTextoObligatorio(valor, 100)) {
    mostrarError("apellidos", "Los apellidos son obligatorios (máximo 100 caracteres).");
    return false;
  }
  limpiarError("apellidos");
  return true;
}

function validarCampoCorreo() {
  const valor = document.getElementById("correo").value.trim();
  if (!validarCorreo(valor, 100)) {
    mostrarError(
      "correo",
      "Correo inválido. Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com (máximo 100 caracteres)."
    );
    return false;
  }
  limpiarError("correo");
  return true;
}

function validarCampoContrasena() {
  const valor = document.getElementById("contrasena").value;
  if (!validarContrasena(valor)) {
    mostrarError("contrasena", "La contraseña debe tener entre 4 y 10 caracteres.");
    return false;
  }
  limpiarError("contrasena");
  return true;
}

function validarCampoConfirmarContrasena() {
  const clave = document.getElementById("contrasena").value;
  const confirmacion = document.getElementById("confirmar-contrasena").value;

  if (!confirmacion) {
    mostrarError("confirmar-contrasena", "Debes confirmar la contraseña.");
    return false;
  }
  if (clave !== confirmacion) {
    mostrarError("confirmar-contrasena", "Las contraseñas no coinciden.");
    return false;
  }
  limpiarError("confirmar-contrasena");
  return true;
}

function validarCampoDireccion() {
  const valor = document.getElementById("direccion").value;
  if (!validarTextoObligatorio(valor, 300)) {
    mostrarError("direccion", "La dirección es obligatoria (máximo 300 caracteres).");
    return false;
  }
  limpiarError("direccion");
  return true;
}

function validarCampoRegion() {
  const valor = document.getElementById("region").value;
  if (!valor) {
    mostrarError("region", "Selecciona una región.");
    return false;
  }
  limpiarError("region");
  return true;
}

function validarCampoComuna() {
  const valor = document.getElementById("comuna").value;
  if (!valor) {
    mostrarError("comuna", "Selecciona una comuna.");
    return false;
  }
  limpiarError("comuna");
  return true;
}

function inicializarFormularioRegistro() {
  const form = document.getElementById("form-registro");
  if (!form) return;

  const selectRegion = document.getElementById("region");
  const selectComuna = document.getElementById("comuna");
  inicializarRegionesComunas(selectRegion, selectComuna);

  const mensajeEstado = document.getElementById("estado-registro");

  // Validación en tiempo real al salir de cada campo
  const validadores = {
    run: validarCampoRun,
    nombre: validarCampoNombre,
    apellidos: validarCampoApellidos,
    correo: validarCampoCorreo,
    contrasena: validarCampoContrasena,
    "confirmar-contrasena": validarCampoConfirmarContrasena,
    direccion: validarCampoDireccion,
    region: validarCampoRegion,
    comuna: validarCampoComuna
  };

  Object.keys(validadores).forEach(idCampo => {
    const campo = document.getElementById(idCampo);
    if (!campo) return;
    const evento = campo.tagName === "SELECT" ? "change" : "blur";
    campo.addEventListener(evento, validadores[idCampo]);
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (mensajeEstado) mensajeEstado.textContent = "";

    const resultados = Object.values(validadores).map(validar => validar());
    const formularioValido = resultados.every(Boolean);

    if (!formularioValido) {
      if (mensajeEstado) {
        mensajeEstado.textContent = "Revisa los campos marcados en rojo.";
        mensajeEstado.classList.remove("mensaje-exito");
        mensajeEstado.classList.add("mensaje-error-general");
      }
      return;
    }

    const run = document.getElementById("run").value.trim().toUpperCase();
    const correo = document.getElementById("correo").value.trim().toLowerCase();
    const usuarios = obtenerUsuarios();

    if (usuarios.some(u => u.run === run)) {
      mostrarError("run", "Ya existe una cuenta registrada con este RUN.");
      return;
    }
    if (usuarios.some(u => u.correo === correo)) {
      mostrarError("correo", "Ya existe una cuenta registrada con este correo.");
      return;
    }

    const nuevoUsuario = {
      run,
      nombre: document.getElementById("nombre").value.trim(),
      apellidos: document.getElementById("apellidos").value.trim(),
      correo,
      contrasena: document.getElementById("contrasena").value,
      direccion: document.getElementById("direccion").value.trim(),
      region: document.getElementById("region").value,
      comuna: document.getElementById("comuna").value,
      fechaRegistro: new Date().toISOString()
    };

    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);

    form.reset();
    llenarSelectComunas(selectComuna, "");

    if (mensajeEstado) {
      mensajeEstado.classList.remove("mensaje-error-general");
      mensajeEstado.classList.add("mensaje-exito");
      mensajeEstado.textContent = "¡Cuenta creada con éxito! Ya puedes iniciar sesión.";
    }
  });
}

// ---------------------------------------------------------------------
// Lógica específica del formulario de login (login.html)
// ---------------------------------------------------------------------

const CLAVE_SESION = "sesionActiva";

/**
 * Busca un usuario registrado que coincida con correo y contraseña.
 * @param {string} correo
 * @param {string} contrasena
 * @returns {object|null}
 */
function buscarUsuarioPorCredenciales(correo, contrasena) {
  const usuarios = obtenerUsuarios();
  return (
    usuarios.find(
      u => u.correo === correo.trim().toLowerCase() && u.contrasena === contrasena
    ) || null
  );
}

/**
 * Guarda la sesión activa (usuario sin su contraseña) en localStorage.
 * @param {object} usuario
 */
function iniciarSesion(usuario) {
  const { contrasena, ...usuarioSinClave } = usuario;
  localStorage.setItem(CLAVE_SESION, JSON.stringify(usuarioSinClave));
}

/**
 * Devuelve el usuario con sesión activa, o null si no hay nadie logeado.
 * @returns {object|null}
 */
function obtenerSesionActiva() {
  try {
    const datos = localStorage.getItem(CLAVE_SESION);
    return datos ? JSON.parse(datos) : null;
  } catch (error) {
    console.error("No se pudo leer la sesión activa:", error);
    return null;
  }
}

/**
 * Cierra la sesión activa.
 */
function cerrarSesion() {
  localStorage.removeItem(CLAVE_SESION);
}

function inicializarFormularioLogin() {
  const form = document.getElementById("form-login");
  if (!form) return;

  const mensajeEstado = document.getElementById("estado-login");

  const validadores = {
    correo: validarCampoCorreo,
    contrasena: () => {
      const valor = document.getElementById("contrasena").value;
      if (!valor) {
        mostrarError("contrasena", "Debes ingresar tu contraseña.");
        return false;
      }
      limpiarError("contrasena");
      return true;
    }
  };

  Object.keys(validadores).forEach(idCampo => {
    const campo = document.getElementById(idCampo);
    if (!campo) return;
    campo.addEventListener("blur", validadores[idCampo]);
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (mensajeEstado) mensajeEstado.textContent = "";

    const resultados = Object.values(validadores).map(validar => validar());
    if (!resultados.every(Boolean)) {
      if (mensajeEstado) {
        mensajeEstado.textContent = "Revisa los campos marcados en rojo.";
        mensajeEstado.classList.remove("mensaje-exito");
        mensajeEstado.classList.add("mensaje-error-general");
      }
      return;
    }

    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value;
    const usuario = buscarUsuarioPorCredenciales(correo, contrasena);

    if (!usuario) {
      if (mensajeEstado) {
        mensajeEstado.classList.remove("mensaje-exito");
        mensajeEstado.classList.add("mensaje-error-general");
        mensajeEstado.textContent = "Correo o contraseña incorrectos.";
      }
      return;
    }

    iniciarSesion(usuario);

    if (mensajeEstado) {
      mensajeEstado.classList.remove("mensaje-error-general");
      mensajeEstado.classList.add("mensaje-exito");
      mensajeEstado.textContent = `¡Bienvenido/a, ${usuario.nombre}! Redirigiendo...`;
    }

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarFormularioRegistro();
  inicializarFormularioLogin();
});
// ---------------------------------------------------------------------
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ---------------------------------------------------------------------

// Comprueba que el nombre tenga contenido y no supere 100 caracteres
function validarNombreContacto() {
  const nombre = document.getElementById("nombre-contacto").value;

  if (!validarTextoObligatorio(nombre, 100)) {
    mostrarError(
      "nombre-contacto",
      "El nombre es obligatorio y permite hasta 100 caracteres."
    );
    return false;
  }

  limpiarError("nombre-contacto");
  return true;
}

// Comprueba que el correo pertenezca a uno de los dominios permitidos
function validarCorreoContacto() {
  const correo = document.getElementById("correo-contacto").value;

  if (!validarCorreo(correo, 100)) {
    mostrarError(
      "correo-contacto",
      "Ingresa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com."
    );
    return false;
  }

  limpiarError("correo-contacto");
  return true;
}

// Comprueba que el comentario tenga contenido y no supere 500 caracteres
function validarComentarioContacto() {
  const comentario = document.getElementById(
    "comentario-contacto"
  ).value;

  if (!validarTextoObligatorio(comentario, 500)) {
    mostrarError(
      "comentario-contacto",
      "El comentario es obligatorio y permite hasta 500 caracteres."
    );
    return false;
  }

  limpiarError("comentario-contacto");
  return true;
}

// Conecta las validaciones con los campos y el botón del formulario
function inicializarFormularioContacto() {
  const formulario = document.getElementById("form-contacto");

  // Detiene la función cuando la página no contiene el formulario
  if (!formulario) return;

  const nombre = document.getElementById("nombre-contacto");
  const correo = document.getElementById("correo-contacto");
  const comentario = document.getElementById(
    "comentario-contacto"
  );
  const estado = document.getElementById("estado-contacto");

  // Valida cada campo cuando el usuario sale de él
  nombre.addEventListener("blur", validarNombreContacto);
  correo.addEventListener("blur", validarCorreoContacto);
  comentario.addEventListener("blur", validarComentarioContacto);

  // Valida todos los campos al presionar el botón
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombreValido = validarNombreContacto();
    const correoValido = validarCorreoContacto();
    const comentarioValido = validarComentarioContacto();

    estado.classList.remove(
      "mensaje-error-general",
      "mensaje-exito"
    );

    if (nombreValido && correoValido && comentarioValido) {
      estado.textContent =
        "La consulta fue validada correctamente.";
      estado.classList.add("mensaje-exito");
    } else {
      estado.textContent =
        "Revisa los campos marcados antes de continuar.";
      estado.classList.add("mensaje-error-general");
    }
  });
}

// Ejecuta la preparación del formulario cuando termina de cargar la página
document.addEventListener(
  "DOMContentLoaded",
  inicializarFormularioContacto
);
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

