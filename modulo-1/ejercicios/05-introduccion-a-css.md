# Introducción a CSS

## Ejercicios

### 01 - Presentación

`index.html` debe tener:

- un título `h1` con un tamaño de letra de `120px` y una tipografía de Google Fonts (por ejemplo: `Montserrat`) y un grosor de letra de 800 o 900. El título debe decir: `¡Hola, soy Ada!` (con tu nombre).
- un párrafo con un tamaño de letra de `48px` y una tipografía de Google Fonts (por ejemplo: `Montserrat`) y un grosor de letra de 600 o 700. El párrafo debe tener una breve descripción tuya, por ejemplo: `Primera programadora, matemática en mi tiempo libre y guitarrista`.
- Tanto tu nombre como las palabras claves de tu descripción (por ejemplo: `programadora`, `matemática` y `guitarrista`) deben estar en distintos colores (cada palabra debe tener un color distinto).

### 02 - Presentación Modo Oscuro

- Repetir el ejercicio anterior, pero poniéndole al `html` un color de fondo oscuro (por ejemplo: `#212121`) y un color de texto claro (por ejemplo: `#FAFAFA`).

### 03 - Artículo

`index.html` debe tener:

- un título `h1` con un tamaño de letra más grande y una tipografía distinta de la que viene por defecto. Poner un título cualquiera (o aleatorio).
- un texto que diga: `Publicado por @adalovelace hace 3 días`. `@adalovelace` debe ser un link (que no lleve a ningún). El texto debe tener un color gris mientras que el link un color celeste. El link no debe tener subrayado. El texto debe tener la misma tipografía que los siguientes párrafos.
- 4 párrafos `p` con `lorem ipsum` y una tipografía distinta a la del título: 
  - El primer párrafo debe tener una oración en itálica. 
  - El segundo párrafo debe tener una oración en negrita. 
  - El tercer párrafo debe estar completamente en itálica y tener una tipografía distinta a la de los párrafos.
  - El cuarto párrafo debe tener 2 palabras en negrita y 2 palabras en itálica.

### 04 - Paisaje

- `index.html` debe tener:

- al menos 10 elementos en línea `span`, que deben contener cada uno un emoji  (por ejemplo, de árboles y/o edificios). Por ejemplo: 
```
🌲🌳🌳🏠🏢🏦🏠🏠🌲🌳
```
- cada emoji debe tener un tamaño de letra distinto para que haya variedad entre ellos. 

### 05 - Alineación

- `index.html` debe tener:

- las siguientes palabras, cada una en un párrafo `p` aparte. Alinear cada párrafo según lo que diga la palabra. Usar 3 clases, una para cada alineación.

```
¡Izquierda!
¡Centro!
¡Derecha!
¡Centro!
¡Izquierda!
¡Centro!
¡Centro!
¡Izquierda!
¡Izquierda!
¡Derecha!
¡Derecha!
```

### 06 - Frutas

`index.html` debe tener:

- una lista desordenada con al menos 10 frutas.
- cada fruta debe tener un color que la represente (por ejemplo, manzana de color rojo, banana de color amarillo, kiwi de color verde).

### 07 - Paleta de Colores

- `index.html` debe tener:

- un título `h1` que diga: `Mis paletas`
- 3 paletas de colores, que consisten en:
  - un título `h2` con el nombre de la paleta (por ejemplo: `Moderna`)
  - una lista desordenada con 5 ítems
  - cada ítem debe tener como texto código del color, en el sistema correspondiente (por ejemplo, si es blanco y está en hexadecimal #FFFFFF)

- Poner un tipografía distinta a la default.
- Dar a los títulos un tamaño de fuente distinto al default.
- Cada ítem debe de tener de color de fondo el color que representa (por ejemplo, si representa el color negro, tener de color de fondo dicho color).
- Tener en cuenta el contraste, si el color de fondo es muy oscuro, poner un color de letra claro, y viceversa.
- Los colores de la primera paleta deben estar en sistema hexadecimal, los de la segunda en sistema rgb y los de la tercera en sistema hsl.

### 08 - Termómetro

- `index.html` debe tener:

- una lista desordenada con 10 ítems.
- la lista debe ir de `Temperatura: 0°C` a `Temperatura: 50°C` aumentando de a 5°C.
- poner las temperaturas extremas (0°C y 50°C) en negrita.
- dar a cada temperatura un color distinto, cambiando gradualmente, siendo el 0°C el color azul y 50°C el color rojo. [Ver ejemplo](https://cdn.shopify.com/s/files/1/2303/2711/files/colour_temperature_kelvin_chart_make_up.jpg?v=1513856014).

### 09 - Cuenta Bancaria

`index.html` debe tener:

- un título `h1` que diga: `Mi cuenta`.
- un título `h2` que diga: `Últimos movimientos`.
- agregar 5 movimientos, que deben tener:
  - un título `h3` con el nombre de la operación (por ejemplo `Depósito`, `Transferencia`, `Pago a XXX`, etc.
  - un elemento `p` con la fecha de la operación.
  - un elemento `p` con el monto de la operación, con un signo más (+) adelante si ingresó dinero o un signo menos (-) si salió dinero de la cuenta.
  
- Ejemplo:

```
Mi cuenta
Últimos movimientos

Transferencia a Grace
01/05/2020
- $1000


Cobro de sueldo
01/05/2020
+ $30000
```

- Poner un tipografía distinta a la default.
- Dar a los títulos un tamaño de fuente distinto al default.
- Dar a la fecha un tamaño de letra más pequeña y un color gris claro.
- Si el monto es un ingreso, debe tener un color verde, si es una salida, debe tener un color verde.

### 10 - Tareas


`index.html` debe tener:

- un título `h1` que diga: `Mis tareas`.
- un título `h2` que diga: `Tareas para hoy`.
- agregar 6 tareas, que deben tener:
  - un título `h3` con la tarea a realizar (por ejemplo `Hacer las compras`).
  - un elemento en línea `span` con el estado de la tarea: `Pendiente`, `Haciendo`, `Hecha`, `Cancelada`.
  
- Ejemplo:

```
Mis tareas
Tareas para hoy

Ir al banco
Cancelada

Preparar parcial
Haciendo

Pasear al perro
Hecha
```

- Poner un tipografía distinta a la default.
- Dar a los títulos un tamaño de fuente distinto al default.
- Dar a la fecha un tamaño de letra más pequeña y un color gris claro.
- Poner a cada estado un color de fondo distinto, siguiendo el siguiente criterio:
  - Pendiente: Azul
  - Haciendo: Naranja
  - Hecha: Verde
  - Cancelada: Rojo

### 11 - Reacciones

`index.html` debe tener:

- un título `h2` que diga: `Comentarios`.
- agregar 5 comentarios, que deben tener:
  - un título `h3` que contenga un link con el nombre de la usuaria (por ejemplo, `@adalovelace`). El link no debe llevar a ningún lado.
  - un elemento `p` con el momento de publicación del comentario (por ejemplo, `Hace 15 minutos`).
  - un elemento `p` con `lorem ipsum`.
  - al menos 4 elementos en línea `span` que consistan en un emoji y un número, indicando la reacción y la cantidad de reacciones (por ejemplo: ❤️ 2 | 👍 4 | 👏 3 | 🔥 5)

- Poner un tipografía distinta a la default.
- Dar a los títulos un tamaño de fuente distinto al default.
- Dar al nombre de usuaria un color que se distinga (azul/celeste, etc) y sacar el subrayado por default.
- Dar a la fecha un tamaño de letra más pequeña y un color gris claro.
- Separar los `span` con espacios y ponerle un color de fondo gris claro.
