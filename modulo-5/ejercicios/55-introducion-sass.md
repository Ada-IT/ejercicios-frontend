# Sass primeros pasos

## Introducción

### Ejercicio 1 - Creando un módulo

### Parte I - Primeros pasos

**Contexto:**
Vamos a empezar a utilizar para nuestro proyecto, queremos hacer un botón funcional . Para empezar a crear un archivo `"index.html"` y otro llamado `"main.css"`. Luego vamos a ejecutar Sass para que nos cree el archivo dé `"style.css"`.

**Pasos:**

1. Creamos el archivo index.html y lo completamos con el contenido mínimo y colocamos un botón con la clase button y el texto `"Nuevo boton"`.
2. Creamos el archivo main.scss y le damos estilos siguientes estilos

```scss
padding: 0.35rem;
background-color: #007bff;
color: #fff;
border-radius: 0.25rem;
border: solid 1px #007bff;
```

3. Ahora con la consola compilamos el sass para convertirlo en css, para esto ejecutamos sass
   > sass main.scss style.css
4. Si nos fijamos se creó un archivo style.css, lo vamos a importar en el html
5. Revisamos que el botón se ve de forma correcta
6. Modificamos el padding a 0.25rem y volvemos a ejecutar el comando sass en la consola.
7. Revisamos que se efectuó el cambio.

### Parte II - Modo observador

**Contexto:**
Se vuelve tedioso ejecutar el comando en la consola por cada modificación.
Para evitar esto vamos a ejecutar sass en modo observador para que cada cambio cuando guardamos me modifique el archivo de css.

**Pasos:**

1. Vamos a ejecutar sass en modo observador
   > sass --watch main.scss style.css
2. Cambiamos el color de fondo y el de borde por el siguiente valor #17a2b8
3. Actualizamos la página en el navegador para ver los cambio realizados.
4. Ahora vamos a cambiar el border-radius por 0.3rem
5. Volvemos a repetir el paso 3.

### Parte III - Compresión de CSS

**Contexto:**
Antes de entregar el proyecto sería bueno comprimir todo lo posible para que sea más liviano para el cliente final.Con sass podemos remover todo los espacios en blanco y salto de línea para que el archivo final sea más liviano

**Pasos:**

1. Vamos mitificamos el archivo
   > sass --style=compressed main.scss style.css
2. Revisamos el archivo style.css, veremos que está todo en una sola linea

### Ejercicio 2 - El Patrón 7-1

### Parte 1 - Creación de básica de carpeta

**Contexto:**
Es indispensable usar una arquitectura para facilitar la creación y modificación de un proyecto.Para esto separamos por partes cada pieza y la clasificamos con el fin de que sean independientes y reutilizables.
Vamos a crear una lista de cards([Bootstrap example](https://getbootstrap.com/docs/4.5/examples/album/)) con un footer.Adaptamos la arquitectura a la profundidad del proyecto.

**Pasos:**

1. Creamos un archivo `"index.html"`, adentro creamos la estructura base y las clases necesarias para la cards.
2. Creamos una carpeta llamada `"sass"` con las siguientes archivos y carpetas:

```
├─ sass
│    ├─ base
│    │    ├── _typography.scss
│    ├─ components              # Carpeta con archivos parciales por componentes
│    │    ├── _card.scss
│    ├── layout                  # Carpeta con archivos parciales por layouts (secciones de páginas)
│    │   ├── _footer.scss
└── main.scss    # Archivo principal donde se importan los demás archivos parciales
```

### Parte 2 - Importación de archivos y estilos de card

**Contexto:**
Dado que cada archivo va a tener una sola responsabilidad, vamos a tener que importarlo para que se pueda unir al archivo principal.

**Pasos:**

1. En el archivo `"main.scss"` vamos a importar cada uno de los archivos

```scss
@import 'base/typography',
@import 'components/card',
@import 'layout/footer',
```

2. Ejecutamos sass en la consola y lo dejamos en modo observador
   > sass --watch sass/main.scss style.css
3. Importamos en el archivo de html la hoja de estilos.
4. Ahora modificamos el archivo de scss correspondientes a la cards y empezamos a darle estilos.
5. Cuando guardamos refrescamos el navegador y deberíamos ver los estilos aplicados

### Parte 3 - Finalización del modelado

**Contexto:**
Para terminar cambiar los estilos de la tipografía como pueden ser el color y la familia.Y por último agregar un Footer que sea de un color oscuro y que diga `"Creado por su nombre"`

**Pasos:**

1. Modificamos el archivo typography y realizamos lo cambio que creamos necesario
2. Agregamos un footer en el html y le damos las clases en el archivo de footer
