// js/usuarios-admin.js
// Lógica del mantenedor de usuarios en el panel de administrador.
// Reutiliza obtenerUsuarios/guardarUsuarios y las funciones de validación
// definidas en validaciones.js (comparten los mismos id de campo).

function obtenerRunDesdeUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("run");
}

// ---------------------------------------------------------------------
// Listado (admin/usuarios.html)
// ---------------------------------------------------------------------

function renderTablaUsuarios() {
  const tabla = document.getElementById("tabla-usuarios");
  if (!tabla) return;

  const usuarios = obtenerUsuarios();
  tabla.innerHTML = "";

  if (usuarios.length === 0) {
    tabla.innerHTML = `<tr><td colspan="5">Aún no hay usuarios registrados.</td></tr>`;
    return;
  }

  usuarios.forEach(u => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${u.run}</td>
      <td>${u.nombre} ${u.apellidos}</td>
      <td>${u.correo}</td>
      <td>${u.comuna || "-"}</td>
      <td>
        <a href="mostrar-usuario.html?run=${encodeURIComponent(u.run)}" class="btn">Ver</a>
        <a href="editar-usuario.html?run=${encodeURIComponent(u.run)}" class="btn">Editar</a>
        <button type="button" class="btn btn-eliminar" data-run="${u.run}">Eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });

  tabla.querySelectorAll(".btn-eliminar").forEach(boton => {
    boton.addEventListener("click", () => {
      const run = boton.dataset.run;
      if (!confirm(`¿Seguro que quieres eliminar al usuario con RUN ${run}?`)) return;

      const restantes = obtenerUsuarios().filter(u => u.run !== run);
      guardarUsuarios(restantes);
      renderTablaUsuarios();
    });
  });
}

// ---------------------------------------------------------------------
// Nuevo usuario (admin/nuevo-usuario.html)
// ---------------------------------------------------------------------

function inicializarNuevoUsuarioAdmin() {
  const form = document.getElementById("form-nuevo-usuario");
  if (!form) return;

  const selectRegion = document.getElementById("region");
  const selectComuna = document.getElementById("comuna");
  inicializarRegionesComunas(selectRegion, selectComuna);

  const mensajeEstado = document.getElementById("estado-nuevo-usuario");

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

    const formularioValido = Object.values(validadores)
      .map(validar => validar())
      .every(Boolean);

    if (!formularioValido) {
      if (mensajeEstado) {
        mensajeEstado.classList.remove("mensaje-exito");
        mensajeEstado.classList.add("mensaje-error-general");
        mensajeEstado.textContent = "Revisa los campos marcados en rojo.";
      }
      return;
    }

    const run = document.getElementById("run").value.trim().toUpperCase();
    const correo = document.getElementById("correo").value.trim().toLowerCase();
    const usuarios = obtenerUsuarios();

    if (usuarios.some(u => u.run === run)) {
      mostrarError("run", "Ya existe un usuario con este RUN.");
      return;
    }
    if (usuarios.some(u => u.correo === correo)) {
      mostrarError("correo", "Ya existe un usuario con este correo.");
      return;
    }

    usuarios.push({
      run,
      nombre: document.getElementById("nombre").value.trim(),
      apellidos: document.getElementById("apellidos").value.trim(),
      correo,
      contrasena: document.getElementById("contrasena").value,
      direccion: document.getElementById("direccion").value.trim(),
      region: document.getElementById("region").value,
      comuna: document.getElementById("comuna").value,
      fechaRegistro: new Date().toISOString()
    });

    guardarUsuarios(usuarios);
    window.location.href = "usuarios.html";
  });
}

// ---------------------------------------------------------------------
// Ver detalle (admin/mostrar-usuario.html)
// ---------------------------------------------------------------------

function renderDetalleUsuarioAdmin() {
  const contenedor = document.getElementById("detalle-usuario-admin");
  if (!contenedor) return;

  const run = obtenerRunDesdeUrl();
  const usuario = obtenerUsuarios().find(u => u.run === run);

  if (!usuario) {
    contenedor.innerHTML = "<p>Usuario no encontrado.</p>";
    return;
  }

  contenedor.innerHTML = `
    <p><strong>RUN:</strong> ${usuario.run}</p>
    <p><strong>Nombre:</strong> ${usuario.nombre} ${usuario.apellidos}</p>
    <p><strong>Correo:</strong> ${usuario.correo}</p>
    <p><strong>Dirección:</strong> ${usuario.direccion}</p>
    <p><strong>Región:</strong> ${usuario.region}</p>
    <p><strong>Comuna:</strong> ${usuario.comuna}</p>
    <p><strong>Fecha de registro:</strong> ${new Date(usuario.fechaRegistro).toLocaleString("es-CL")}</p>
    <a href="editar-usuario.html?run=${encodeURIComponent(usuario.run)}" class="btn">Editar</a>
  `;
}

// ---------------------------------------------------------------------
// Editar usuario (admin/editar-usuario.html)
// ---------------------------------------------------------------------

function inicializarEditarUsuarioAdmin() {
  const form = document.getElementById("form-editar-usuario");
  if (!form) return;

  const run = obtenerRunDesdeUrl();
  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find(u => u.run === run);
  const mensajeEstado = document.getElementById("estado-editar-usuario");

  if (!usuario) {
    form.innerHTML = "<p>Usuario no encontrado.</p>";
    return;
  }

  const selectRegion = document.getElementById("region");
  const selectComuna = document.getElementById("comuna");
  inicializarRegionesComunas(selectRegion, selectComuna);

  // Precargar los datos actuales del usuario
  document.getElementById("run").value = usuario.run;
  document.getElementById("nombre").value = usuario.nombre;
  document.getElementById("apellidos").value = usuario.apellidos;
  document.getElementById("correo").value = usuario.correo;
  document.getElementById("direccion").value = usuario.direccion;
  selectRegion.value = usuario.region;
  llenarSelectComunas(selectComuna, usuario.region);
  selectComuna.value = usuario.comuna;

  const validadores = {
    nombre: validarCampoNombre,
    apellidos: validarCampoApellidos,
    correo: validarCampoCorreo,
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

    const formularioValido = Object.values(validadores)
      .map(validar => validar())
      .every(Boolean);

    if (!formularioValido) {
      if (mensajeEstado) {
        mensajeEstado.classList.remove("mensaje-exito");
        mensajeEstado.classList.add("mensaje-error-general");
        mensajeEstado.textContent = "Revisa los campos marcados en rojo.";
      }
      return;
    }

    const correoNuevo = document.getElementById("correo").value.trim().toLowerCase();
    const correoRepetido = usuarios.some(
      u => u.run !== usuario.run && u.correo === correoNuevo
    );
    if (correoRepetido) {
      mostrarError("correo", "Ya existe otro usuario con este correo.");
      return;
    }

    usuario.nombre = document.getElementById("nombre").value.trim();
    usuario.apellidos = document.getElementById("apellidos").value.trim();
    usuario.correo = correoNuevo;
    usuario.direccion = document.getElementById("direccion").value.trim();
    usuario.region = document.getElementById("region").value;
    usuario.comuna = document.getElementById("comuna").value;

    guardarUsuarios(usuarios);
    window.location.href = `mostrar-usuario.html?run=${encodeURIComponent(usuario.run)}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTablaUsuarios();
  inicializarNuevoUsuarioAdmin();
  renderDetalleUsuarioAdmin();
  inicializarEditarUsuarioAdmin();
});