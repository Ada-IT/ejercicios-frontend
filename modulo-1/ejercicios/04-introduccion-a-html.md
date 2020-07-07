# Introducción a HTML

## Ejercicios

### 01 - Blog

`index.html` debe contener:

- un título `h1` que diga: `El mejor artículo del mundo`.
- un párrafo `p` que diga: `Por Ada Lovelace. Publicado hace 3 días`, con tu nombre en vez de `Ada Lovelace`.
- 4 párrafos con `lorem ipsum`.

---

### 02 - Diario personal

`index.html` debe contener:

- un título `h1` que diga: `Mi diario`.
- por cada día de la semana crear un título `h2` con el nombre del día.
- debajo de cada día de la semana, agregar un párrafo `p` que describa lo que hiciste ese día la semana pasada, por ejemplo: `Miré una nueva serie en Netflix`.

---

### 03 - Enciclopedia

Buscar un artículo de Wikipedia que te interese. `index.html` debe contener:

- un título `h1` con el nombre del artículo (por ejemplo **Ada Lovelace**).
- un párrafo `p` con la introducción o resumen del artículo.
- al menos 2 secciones con título `h2` (por ejemplo, **Biografía** y **Obra**)
- debajo de cada título de sección, al menos 2 subsecciones con título `h3` (por ejemplo, debajo de **Biografía**, incluir **Infancia** y **Adultez**)
- debajo de cada título de subsección, al menos 2 párrafos `p`.

---

### Ejercicio 04 - Receta

Buscar una receta que te interese. `index.html` debe contener:

- un título `h1` con el nombre de la receta.
- un párrafo `p` con la descripción de la receta.
- un título `h2` que diga `Ingredientes`.
- una lista sin ordenar que contenga los ingredientes necesarios para la receta.
- un título `h2` que diga `Instrucciones`.
- una lista ordenada que describa los pasos necesarios para realizar la receta.

---

### 05 - Playlist

`index.html` debe contener:

- un título `h1` que diga: `Mis Playlists`.
- al menos 3 títulos `h2` con nombres de playlists (por ejemplo: `Éxitos de los 80s`).
- debajo de cada nombre de playlist:
  - un párrafo `p` que diga: `Duración: 123 min.` (poner distintas duraciones).
  - al menos 2 elementos en línea `span`, uno por cada género musical que contenga la playlist (por ejemplo: `pop`, `rock`, `grunge`, `90s`)
  - un título h3 que diga: `Canciones`.
  - una lista ordenada con nombres de canciones y bandas / cantantes (por ejemplo: `Africa, Toto`).

---

### 06 - Temario

`index.html` debe contener:

- un título `h1` que diga lo siguiente: `Curso de desarrollo Frontend`
- un párrafo `p` con la introducción o resumen del artículo.
- una lista ordenada, donde cada ítem es un link con el nombre de cada sección, y que al clickearlo te lleve a la sección correspondiente.
- 5 secciones con título `h2` que sean las siguientes: 
  - `Introducción a HTML`.
  - `Introducción a CSS`.
  - `Introducción a Sass`.
  - `Introducción a JavaScript`.
  - `Introducción a React`.
- debajo de cada título de sección: 
  - 10 párrafos `p` con `lorem ipsum`.
  - un enlace que diga `Volver arriba` y que al clickearlo te lleve al título `h1`.

---

### 07 - Portfolio

Crear las siguientes páginas con los siguientes elementos:

#### `index.html`
- un título `h1` con tu nombre.
- un párrafo `p` de introducción.
- una lista desordenada de links que te lleven a las demás páginas (`Conocimientos`, `Experiencia`, `Contacto`).

#### `conocimientos.html`
- un título `h1` que diga `Conocimientos`.
- una lista desordenada de habilidades
- un link que diga `Volver atrás` y que te lleve a `index.html`.

#### `experiencia.html`
- un título `h1` que diga `Experiencia`.
- Agregar 3 veces:
  - un título `h2` con el nombre de una empresa (cualquiera)
  - un elemento `p` con el período de empleo (por ejemplo, `2018-2020`)
  - un elemento `p` con el puesto de trabajo (por ejemplo, `Desarrolladora Frontend`)
- un link que diga `Volver atrás` y que te lleve a `index.html`.

#### `contacto.html`
- un título `h1` que diga `Contacto`.
- un párrafo `p` que diga `Podés escribirme a ada.lovelace@gmail.com` (o cualquier otro mail).
- un párrafo `p` con un número de teléfono (cualquiera)
- un link que lleve a la página de Linkedin (si tenés una cuenta creada, podés hacer que el link sea a tu perfil).
- un link que diga `Volver atrás` y que te lleve a `index.html`.

---

### 08 - Blog con Imágenes

`index.html` debe contener:

- una imagen
- un título `h1` con el nombre del artículo (por ejemplo **El sistema solar**).
- un párrafo `p` con la introducción o resumen del artículo.
- al menos 2 secciones, cada sección debe contener: 
  - un título `h2` (por ejemplo, **El sol** o **Planetas**)
  - al menos 3 párrafos `p`
  - una imagen entre párrafos (entre el 1er y 2do párrafo, o entre el 2do y el 3ro)
  
Las imágenes tienen que estar relacionadas. Usar imágenes con links externos (absolutos).  

---

### 09 - Preview

Usando [IMDb](https://www.imdb.com/) como referencia, `index.html` debe contener:

- un título `h1` con el nombre de una película.
- una imagen con el poster de la película.
- un `h2` que diga: `Elenco`
- un lista desordenada con al menos 5 nombres del elenco. Los nombres deben ser links a la página de IMDb correspondiente (por ejemplo, [Anne Hathaway](https://www.imdb.com/name/nm0004266/?ref_=nv_sr_srsg_0))
- un título `h3` que diga: `Sinopsis`
- un párrafo `p` con la sinopsis de la película
- un `h3` que diga: `Géneros`
- un lista desordenada con al menos 3 géneros de la película. Los nombres deben ser links a la página de IMDb correspondiente de la lista de películas de dicho género (por ejemplo, [Thriller](https://www.imdb.com/search/title/?genres=thriller&explore=title_type,genres&ref_=tt_ov_inf))

---

### 10 - Comentarios

`index.html` debe contener:

- un título `h1` que diga: `Un artículo increíble`.
- un párrafo `p` con `lorem ipsum`.
- un título `h2` que diga `Comentarios`.
- 5 comentarios, con lo siguiente:
  - un título `h3` con el handle de la usuario (por ejemplo **@adalovelace**).
  - un `span` que diga: `Publicado hace 14 minutos` (cambiar el tiempo).
  - un párrafo `p` con `lorem ipsum`.

---

### 11 - Productos

`index.html` debe contener:

- un título `h1` que diga: `Mi tienda`.
- un título `h2` que diga: `Productos más comprados`.
- 5 productos, que contengan:
  - una imagen del producto (usar rutas absolutas).
  - un título `h3` con el nombre del producto.
  - al menos 3 elementos en línea `span` con distintas variaciones de producto. Por ejemplo, colores, tamaños, modelo, etc. Si se elige color, sería un `span` para cada color (rojo, verde, azul, etc). 
  - un párrafo `p` con el precio del producto.
  - un párrafo con un `lorem impsum`  corto

---

### 12 - Películas

Usando [IMDb](https://www.imdb.com/) como referencia, crear los siguientes archivos:

#### `index.html`

- un título `h1` que diga: `Bienvenida a Mis Películas`.
- una lista desordenada con links a las demás páginas (`Populares`, `Top 3`, `Con más recaudación`).

#### `populares.html`
- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Películas populares`.
- un párrafo `p` que diga: `Las películas más exitosas en los últimos tiempos`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

#### `top-3.html`
- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Top 3`.
- un párrafo `p` que diga: `Las películas más exitosas de todos los tiempos`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

#### `mas-recaudacion.html`

- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Películas con más recaudación`.
- un párrafo `p` que diga: `Las películas que más entradas vendieron en los últimos 50 años`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

(+) Cada película debe tener:

- una imagen del poster de la película (usar rutas absolutas).
- un título `h3` con el nombre de la película.
- un párrafo `p` con la fecha de estreno.

---

### 13 - Canciones

#### `index.html`

- un título `h1` que diga: `Mis canciones preferidas`.
- 3 canciones, que consisten en:
  - la imagen del poster del álbum de la canción (usar rutas relativas).
  - un título `h2` con el nombre de la canción
  - un elemento `p` con el nombre de la banda / artista.
  - los 3 elementos anteriores (imagen, título, y banda/artista) deben estar anidados dentro de un único link que lleve a la página de la canción.
  
#### `cancion.html`

- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` con el nombre de la canción
- un elemento en línea `span` con el nombre de la banda / artista.
- un elemento en línea `span` con el nombre del álbum.
- un elemento en línea `span` con el año de publicación del álbum.
- una título `h2` que diga: `Letra`
- párrafos `p` para la letra de la canción.

El archivo no tiene que llamarse `cancion.html` sino el nombre de la canción, por ejemplo: `africa.html`

---

### 14 - Artículo completo

A partir de lo visto ejercicios anteriores, crear en un `index.html` un artículo de blog que tenga:

- Una lista de contenido que lleve a cada sección
- Al menos 3 secciones
- Al menos 3 imágenes
- Una lista desordenada
- Una lista ordenada
- Una sección de comentarios, con al menos 3 comentarios
