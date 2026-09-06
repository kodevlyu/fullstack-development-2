# Pastelería Mil Sabores – Tienda Online (Entrega 1)

Proyecto de la Evaluación Parcial 1 (30%) de **DSY1104 – Desarrollo Fullstack II**,
basado en el caso "Forma C: Pastelería Mil Sabores".

Tienda online básica desarrollada con (PONER AL FINAL).

## Estructura del proyecto

```
pasteleria-mil-sabores/
├── index.html                 Página principal (home) de la tienda
├── productos.html              Listado de productos con filtro por categoría
├── detalle-producto.html       Detalle de un producto + añadir al carrito
├── registro.html                Registro de usuario
├── login.html                   Inicio de sesión
├── nosotros.html                 Quiénes somos, misión y visión
├── blogs.html                    Listado de noticias / casos curiosos
├── detalle-blog-1.html           Detalle del caso curioso #1
├── detalle-blog-2.html           Detalle del caso curioso #2
├── contacto.html                 Formulario de contacto
├── carrito.html                  Carrito de compras (usa localStorage)
├── admin/                        Vista administrador (protegida en futuras entregas)
│   ├── index.html                 Home del administrador
│   ├── productos.html              Listado de productos
│   ├── nuevo-producto.html          Crear producto
│   ├── editar-producto.html         Editar producto
│   ├── usuarios.html                Listado de usuarios
│   ├── nuevo-usuario.html            Crear usuario
│   └── editar-usuario.html           Editar usuario
├── css/
│   └── styles.css                Hoja de estilos externa (paleta y tipografía del brief)
├── js/
│   ├── productos-data.js          Arreglo de productos + utilidades
│   ├── regiones-comunas.js         Datos de regiones/comunas para selects dependientes
│   ├── carrito.js                  Lógica del carrito (localStorage)
│   ├── validaciones.js             Validaciones de formularios en tiempo real
│   └── main.js                     Render de listados y utilidades generales
└── img/                            Imágenes del sitio (agregar assets propios)
```

## Reglas de validación implementadas (JavaScript)

- **Inicio de sesión:** correo obligatorio (máx. 100 caracteres, solo dominios
  `@duoc.cl`, `@profesor.duoc.cl` y `@gmail.com`) y contraseña obligatoria (4 a 10
  caracteres).
- **Contacto:** nombre obligatorio (máx. 100), correo con los mismos dominios
  permitidos (máx. 100) y comentario obligatorio (máx. 500 caracteres).
- **Registro / mantenedor de usuario:** RUN validado con dígito verificador (7 a 9
  caracteres, sin puntos ni guion), nombre (máx. 50), apellidos (máx. 100), correo
  (dominios permitidos, máx. 100), contraseña con confirmación (4 a 10 caracteres)
  y dirección (máx. 300 caracteres).
- **Mantenedor de producto:** código (mínimo 3 caracteres), nombre (máx. 100),
  descripción opcional (máx. 500), precio (mínimo 0, permite decimales), stock
  (entero, mínimo 0) y categoría obligatoria.


## Equipo
-Lucía Salazar
-Christian Quiroz
-Rimsky Farias

**DSY1104 – Desarrollo Fullstack II**, Duoc UC.
