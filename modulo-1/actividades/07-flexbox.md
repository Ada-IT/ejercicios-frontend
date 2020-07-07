# Flexbox

## Actividad

### Estructura

`index.html` debe contener:

1. un `div` con clase `header` que contenga
  - un ícono
  - un `ul` con clase `nav` que contenga
    - 3 `li`, cada uno con un link dentro suyo
    - agregar a cada link, en orden, uno de los siguiente textos:
        - SOBRE MI
        - HABILIDADES
        - CONTACTO
2. un `div` con clase `section` y id `about` que contenga
  - un título `h1` con un saludo de presentación
  - un párrafo `p`
3. un `div` con clase `section` y id `skills` que contenga
  - un título `h2` que diga `Mis habilidades`
  - un `div` con clase `skills-container` que contenga 3 habilidades, las cuales que estar formadas por:
    - `div` con clase `skill`, que contenga
      - un ícono
      - un título `h3`
      - un párrafo `p`
4. un `div` con clase `section` y id `contact` que contenga
  - un título `h2` que diga `Contacto`
  - un `div` con clase `social-icons` que contenga
    - 4 íconos de redes sociales (Linkedin, Github, etc). Cada ícono debe estar dentro de un link que lleve a una página externa (la de la red social)
5. un `div` con clase `footer` contenga
  - un párrafo `p` que diga: `Hecho con ❤️ por ...` reemplazando los puntos suspensivos por sus nombres
<br>

```
- Para los párrafos usar lorem ipsum.
- Para los títulos que no lo indiquen usar lorem ipsum.
- Para los íconos, buscar cualquier ícono en Font Awesome.
- Agregar las clases necesarias en los elementos en los que no esté indicado (para dar estilos).
``` 
<br>
 
### Estilos  

#### General

- Agregar al `body` la siguiente propiedad: `margin: 0`.
- Agregar una tipografía de Google Fonts al `body`.
- Poner a `.section` la propiedad: `height: 100%`.
- Agregar y/o sacar paddings y márgenes dónde lo vean necesario para que no queden tan pegados los elementos, por ejemplo en:
  - `.header`
  - `.section`
  - `.skill`
  - íconos de contacto
  - `.footer`
- Hacer que los íconos queden dentro de un círculos. Para eso:
  - incluirlos dentro de un div
  - dar un ancho y un alto
  - dar un color de fondo
  - dar un color de texto que contraste
  - dar un border-radius de 50%
  - centrarlos con flex

#### Header

- Poner a `.header` con `display: flex` y `justify-content: space-between`.
- Poner a `.nav` `display: flex`.
- Sacar los estilos por defecto de `ul`.
- Hacer que los links lleven a las respectivas secciones al clickearlos.
- Sacar el subrayado por defecto de los links.

#### About

- Usar flex de modo que el texto de `#about` quede centrado verticalmente y horizontalmente a la izquierda.

#### Skills

- Dar a `#skills` un color de fondo diferente (por ejemplo `#F5F5F5`).
- Usar flex de modo que el contenido de `#skills` quede centrado verticalmente y horizontalmente.
- Dar a `.skill` un ancho de 250px, un borde y un margen para que no quede pegado a los demás.
- Usar flex en `.skills-container` de modo que cada `skill` quede una al lado de la otra.

#### Contact

- Usar flex de modo que el contenido de `#contact` quede centrado verticalmente y horizontalmente.
- Usar flex de modo que los íconos queden en línea y centrados horizontalmente.

#### Footer

- Usar flex de modo que el texto de `.footer` quede centrado verticalmente y horizontalmente.
- Dar al texto un tamaño de letra pequeño y un color de más claro que el resto de la página.
