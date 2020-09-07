# Accesibilidad

## Ejercicios

### Botones accesibles

Crear 6 botones con texto y agregarles los siguientes estilos:

```css
button {
  height: 2.5rem;
  min-width: 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.2;
  padding: 0 1rem;
  border: 0;
  border-radius: 0.25rem;
  outline: none;
  transition: all 250ms ease 0s;
  user-select: none;
  cursor: pointer;
}
```

<br>

- Cambiarles el color de fondo y el color de texto a cada botón, de modo que haya 3 botones con color de fondo claro y texto oscuro, y 3 con color de fondo oscuro y color de texto claro. La relación de contraste entre el color de texto y el de fondo _debe ser_ de 4.5 o mayor.
- Agregarles un contorno al hacer foco con `box-shadow`.
- Diferenciar los estados `:hover` y `:active` haciendo que el color de fondo se aclare o oscurezca, manteniendo una relación de contraste accesible.

---

### Íconos accesibles

- A 3 de los botones anteriores, agregarles un ícono junto al texto. Al ícono darle un atributo `aria-hidden="true"` adecuado para que no sea leído por lectores de pantallas.
- Usando íconos de [FontAwesome](https://fontawesome.com/icons?d=gallery), hacer 3 botones cuadrados que tengan dentro suyo únicamente un ícono (sin texto). Al ícono darle un atributo `aria-hidden="true"` para que no sea leído por lectores de pantallas y al botón un atributo `aria-label` adecuado para que sí pueda ser leído por lectores de pantallas. Usar los siguientes íconos:
  - [Cortar](https://fontawesome.com/icons/cut?style=solid)
  - [Copiar](https://fontawesome.com/icons/copy?style=solid)
  - [Pegar](https://fontawesome.com/icons/paste?style=solid)
- Usando íconos de [FontAwesome](https://fontawesome.com/icons?d=gallery), crear 3 link que tengan dentro suyo únicamente un ícono (sin texto). Al ícono darle un atributo `aria-hidden="true"` para que no sea leído por lectores de pantallas y al link un atributo `aria-label` adecuado para que sí pueda ser leído por lectores de pantallas. Usar los siguientes íconos:
  - [Home](https://fontawesome.com/icons/home?style=solid)
  - [Mensajes](https://fontawesome.com/icons/envelope?style=solid)
  - [Mi cuenta](https://fontawesome.com/icons/user?style=solid)

---

### Imágenes accesibles

Crear una página con:

- Un título `h1`
- Una texto con `lorem ipsum`
- Una imagen decorativa
- Una grilla de imágenes

Para la imagen descriptiva, usar alguna imagen de [unDraw](https://undraw.co/illustrations) y ponerle un texto alternativo _vacío_.

Para las imágenes de la grilla, buscar 3 imágenes y ponerle un texto alternativo _descriptivo_. Por ejemplo:

![](https://i2.wp.com/www.hogarcocinafacil.com/wp-content/uploads/2016/08/como-hacer-pancakes-esponjosos.jpg?fit=500%2C334&ssl=1&w=640)

👎 Imagen de panqueques<br>
👍 Panqueques<br>
👏 Torre de panqueques esponjosos adornados con arándanos y frambuesas<br>

---

### Links accesibles

Crear una página con:

- Un título que diga `Categorías`
- Un texto con `lorem ipsum`
- Un título secundario que diga `Categorías principales`
- 4 cards con:
  - Título (por ejemplo: comidas, viajes, animales, música, etc)
  - Descripción con `lorem ipsum`
  - Link que diga `Ver más`
    <br>

Agregar a cada link un atributo `aria-label` adecuado para que de más información a los lectores de pantalla sobre a dónde lleva ese link. Por ejemplo `aria-label="Leer más sobre categoría X"`.

---

### Footer accesible

Replicar el siguiente footer (con estilos aproximados).

![](https://i.ibb.co/GWy0dWg/Screen-Shot-2020-09-07-at-17-26-15.png)

- Poner los links de navegación dentro de etiqueta `nav`
- Usar listas para los íconos y los links
- Poner a los íconos de contacto el atributo `aria-hidden`
- Poner a los íconos de redes sociales el atributo `aria-hidden` y a los links que la contienen el atributo `aria-label` correspondiente
- Poner al `input` los atributos `name` y `aria-label`

https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-navigation-basic

---

### Regiones vivas

Modificar el ejercicio de `Comentario` de [Formularios dinámicos](https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/22-formularios-dinamicos.md) de modo tal que tenga una _región viva_ que anuncie la cantidad de caracteres restantes al lector de pantalla cuando termina de escribirse dentro del `textarea`.
