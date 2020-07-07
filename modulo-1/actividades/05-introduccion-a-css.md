# Introducción a CSS

## Consigna


- Divididas en grupos de 4, elijan una compañera para que cree un repositorio, llamado `intro-html-sitio-presentacion`. Una vez creado, las demás clónense ese repositorio.
- Decidan un tópico a trabajar (animales, planetas, plantas, comidas, películas, países, etc) y busquen artículos relacionados en Wikipedia.
- Cada una debe crear, dentro de la carpeta del repositorio clonado, un archivo con extensión `.html` y un archivo con extensión `.css`, ambos con el nombre del artículo a trabajar. Por ejemplo, si el tema es `Planetas`, los archivos podrían ser `tierra.html` y `tierra.css`, `marte.html` y `marte.css`, etc. Quien creó el repositorio, debe llamar a sus archivos `index.html` y `styles.css`.

### Estructura

- En su archivo `html`, cada una debe agregar:
    - un `h1` con el título del artículo
    - 3 o más elementos en bloque `span` con "categorías" al que pertenece el artículo (por ejemplo: `astronomía`, `ciencia`, `planetas`)
    - un párrafo `p` de introducción al artículo
    - un `h2` con el título de alguna sección (por ejemplo, `Vida en Marte`)
    - 3 o 4 párrafos con contenido sobre la sección
    - un título `h2` que diga `Citas Relacionadas`
    - 3 párrafos `p` con citas sobre el tema (buscar en Google)
    - un título `h2` que diga "Lecturas relacionadas"
    - una lista desordenada con el nombre de los demás artículos. Cada nombre tiene que tener un link que lleve a las páginas realizadas por las demás integrantes. Todavía no van a tener los demás archivos, pero cuando los vayan subiendo esos links van a comenzar a funcionar. **Recuerden usar rutas relativas**.

### Estilos

- En su archivo `css`, cada una debe:

  - dar a `html` un color de fondo relacionado con el artículo (por ejemplo, si el artículo es Marte, usar un color de fondo rojo), usando sistema hexadecimal
  - dar al texto un color distinto al que viene por default, usando el sistema hexadecimal
  - buscar una tipografía en Google Fonts y asignarla al `body` (cada una busque una distinta)
  - dar a los `spans` de categorías un color de fondo (que contraste con el color de fondo de la páginas) y cambiar el color de texto si es necesario para que pueda leerse bien
  - cambiar los tamaños de fuente de textos y títulos para que sean distintos a los que vienen por default
  - en los párrafos de introducción y contenido:
    - poner en negrita algunas palabras individuales
    - poner en itálica algunas palabras en conjunto
  - poner a las citas en itálicas
  - sacar a los links el subrayado por defecto
  - dar a los links un color distinto del que tienen por defecto
<br>

```
Recuerden: 
 - crear la estructura HTML inicial correspondiente en cada página (incluído title)
 - linkear el archivo html con el respectivo archivo css
 - usar todas las etiquetas en minúsculas, poner una etiqueta 
 - poner una etiqueta debajo de la otra
 - indentar etiquetas cuando estén anidadas
```
<br>

Una vez que todas terminaron, van a tener que subir los cambios al repositorio. Para eso, primero tienen que commitear todo, *y antes de pushear*, van a tener que pullear los cambios. **Háganlo una a la vez, así evitan conflictos con el código.** Es orden a seguir es:
- Agregar archivos
- Commitear
- Hacer un pull
- Pushear


