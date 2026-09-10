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

function inicializarRegionesComunas(selectRegion, selectComuna) {
  if (!selectRegion || !selectComuna) return;

  llenarSelectRegiones(selectRegion);
  selectComuna.disabled = true;
  selectComuna.innerHTML = '<option value="">Selecciona una región primero</option>';

  selectRegion.addEventListener("change", () => {
    llenarSelectComunas(selectComuna, selectRegion.value);
  });
}