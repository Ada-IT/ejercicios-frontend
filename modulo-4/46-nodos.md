# 🌳 DOM - Nodos

## Ejercicios

Los ejercicios a continuación, _a menos que se indique lo contrario_, deben realizarse manipulando el DOM mediante JavaScript, es decir, creando elementos y modificando sus atributos y propiedades, no definiéndolos en el documento `html`.

Recordá que luego de crear los elementos deben agregarse al documento o a algún otro elemento que se encuentre en el mismo.

### Ejercicio 1 : Creación de nodo.

1. Crear un nodo de tipo h1
2. Asignarle un texto `Hola DOM!`
3. Colocarle un color, un tamaño de texto y una familia de fuente a elecci´ón.

### Ejercicio 2: Creación de listas

1. Crear un elemento desde el DOM de tipo `ol`
2. Asignarle 3 elementos de tipo `li`, con lo siguientes textos:

   - Home
   - Nosotros
   - Contacto

### Ejercicio 2: Listas anidadas

Replica la siguiente estructura HTML mediante la creación de nodos

```html
<ul>
  <li>Verduras</li>
  <li>Garbanzos</li>
  <li>
    Frutas
    <ul>
      <li>Manzanas</li>
      <li>Naranjas</li>
      <li>Bananas</li>
      <li>Frutillas</li>
    </ul>
  </li>
</ul>
```

### Ejercicio 3: Botones

Por cada ítem de la siguiente lista, crear un botón con el texto de dicho ítem. Al clickear un bot´ón, debe aparecer un `alert` que diga `Has clickeado el mes X`, dependiendo del mes clickeado (por ejemplo, `Has clickeado el mes: Mayo`)

```js
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] .
```

### Ejercicio 4: Lista de tareas

Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem y un botón que diga `Eliminar`. Al clickear el botón, se debe eliminar de la lista el nodo correspondiente.

```js
const tareas = [
  'Comprar comida',
  'Estudiar para examen',
  'Pagar impuestos',
  'Pasear a perro',
  'Comprar entradas para el cine',
]
```

### Ejercicio 5: Prioridades

Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem. Cada vez que se clickea el ítem, debe ir cambiando de color, siguiendo este orden: `gris -> celeste -> amarillo -> rojo`. Cuando llega al último color y se lo vuelve a clickar, debe volver al primer color.

```js
const tareas = [
  'Comprar comida',
  'Estudiar para examen',
  'Pagar impuestos',
  'Pasear a perro',
  'Comprar entradas para el cine',
]
```

### Ejercicio 6: Tatetí

1. En un documento `.html`, agregar dentro del `body` lo siguiente:

```html
<div class="tablero"></div>
```

2. En un archivo `.css`, agregar lo siguiente:

```css
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tablero {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
}

.casilla {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  box-sizing: border-box;
  background-color: #eeeeee;
  border-radius: 5px;
  font-size: 60px;
  font-weight: bold;
}
```

3. Por cada ítem de la siguiente matriz, agregar al elemento tablero un elemento `div` que contenga como texto dicho ítem:

```js
const tablero = [
  ['X', 'O', 'X'],
  ['O', 'X', 'X'],
  ['O', 'O', 'X'],
]
```

4. Al clickear cada casilla, se debe cambiar el texto de la siguiente forma:

- Si hay una `X`, cambiar a una `O`
- Si hay una `O`, dejarla vacía
- Si está vacía, cambiar a una `X`

### Ejercicio 7: Adicionar elementos a un listado

Se debe crear un campo input con un botón de agregar o
"+" y el texto que se ingrese en ese input, tras presionar el botón, se debe adicionar a una lista.

### Ejercicio 8: Grilla Dinámica

Debemos solicitarle al usuario mediante un prompt o input. Que ingrese 2 (x y) valores numéricos.
En base a ello crearemos una matriz, no pudiendo ser esta mayor a 8x8 (Realizar validación numérica y máxima).

Luego en base a estos valores crearemos mediante nodos div siendo x para los valores horizontales e y para los verticales:

```

```
