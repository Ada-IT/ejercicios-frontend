# Accesibilidad avanzada

## Ejercicios

### Collapse

Un `collapse` es un componente que consiste en un control (por lo general un botón) que muestra/oculta un cierto contenido (por lo general texto), y puede o no contener un título, como [este ejemplo](https://codepen.io/pablohHoc/full/ExKExXq).

Hacer un `collapse` como el ejemplo y volverlo accesible, de la siguiente manera:

- el título tiene que tener un `id`
- el contenido tiene que tener un `id`
- el botón tiene que tener un atributo `aria-controls` cuyo valor es el `id` del contenido, para indicar que controla dicho contenido
- el boton tiene que tener un atributo `aria-expanded` y ser `true` cuando el contenido está mostrándose (expandido) y `false` cuando no
- el contenido tiene que tener un atributo `aria-labelledby` cuyo valor es el `id` del título, para relacionar el contenido con su título
- el contenido tiene que tener un atributo `aria-hidden` y ser `true` cuando está oculto y `false` cuando no

### Footer accesible

Replicar el siguiente footer (con estilos aproximados).

![](https://i.ibb.co/GWy0dWg/Screen-Shot-2020-09-07-at-17-26-15.png)

- Poner los links de navegación dentro de etiqueta `nav`
- Usar listas para los íconos y los links
- Poner a los íconos de contacto el atributo `aria-hidden`
- Poner a los íconos de redes sociales el atributo `aria-hidden` y a los links que la contienen el atributo `aria-label` correspondiente
- Poner al `input` los atributos `name` y `aria-label`

https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-navigation-basic

### Regiones vivas - Comentario

Modificar el ejercicio de `Comentario` de [Formularios dinámicos](https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/22-formularios-dinamicos.md) de modo tal que tenga una _región viva_ que anuncie la cantidad de caracteres restantes al lector de pantalla cuando termina de escribirse dentro del `textarea`.

### Regiones vivas - Zoom

Crear una página con:

- un botón para aumentar, con [este ícono](https://fontawesome.com/icons/search-plus?style=solid)
- un botón para disminuir, con [este ícono](https://fontawesome.com/icons/search-minus?style=solid)
- un texto que diga `Zoom 100%'`

Ocultar para lectores de pantalla los íconos con `aria-hidden` y agregar `aria-label` a cada botón. Al apretar los botones, se debe actualizar el texto, aumentado y disminuyendo respecto el nivel de zoom en 10%. Agregar una _región viva_ de modo que el lector de pantalla anuncie cada vez que hay un cambio en el nivel de zoom.
