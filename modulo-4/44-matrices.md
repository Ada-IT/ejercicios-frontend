# 🔄 Estructuras de datos: Matrices

## Ejercicios

### `obtenerNumeroMayor(matriz)`

Crear una función `obtenerNumeroMayor` que tome como argumento un array 2d de números `matriz` y devuelva el mayor número de dicha matriz.

```javascript
obtenerNumeroMayor([
  [2, 7, 12, 1],
  [8, 23],
  [9, 45, 7],
  [22, 3, 24, 4],
]) // 45
```

### `sumar(matriz)`

Crear una función `sumar` que tome como argumento un array 2d de números `matriz` y devuelva la suma de todos los número de dicha matriz.

```javascript
sumar([
  [4, 5],
  [2, 7, 1],
  [8, 10],
]) // 37
```

### `esMatrizCuadrada(matriz)`

Crear una función `esMatrizCuadrada` que tome como argumento un array 2d `matriz` y devuelva `true` si es una matriz cuadrada, es decir, si tiene igual cantidad de filas que de columnas, o `false` si no lo es.

```javascript
esMatrizCuadrada([
  [4, 5],
  [2, 7, 1],
  [8, 10],
]) // false

esMatrizCuadrada([
  [4, 5, 9],
  [2, 7, 1],
  [8, 10, 5],
]) // true
```

### `generarGrilla(filas, columnas, items)`

Crear una función `generarGrilla` que tome como argumentos un número entero `filas`, un número entero `columnas` y un array de valores `items`, y devuelva una matriz de `filas` filas y `columnas` columnas, donde cada ítem de la matriz es un ítem _aleatorio_ de `items`.

```javascript
generarGrilla(2, 3, [1, 2]) /* 
  [
    [1, 1, 2], 
    [2, 1, 1]
  ]
*/

generarGrilla(3, 3, ['a', 'b', 'c']) /* 
  [
    ['c', 'c', 'a'], 
    ['c', 'a', 'a'], 
    ['b', 'a', 'b']
  ]
*/
```

### `generarMatrizEscalonada(filas)`

Crear una función `generarMatrizEscalonada` que tome como argumento un número entero `filas` y devuelva un array 2d con la cantidad de filas `filas`, donde la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, y así sucesivamente. Los ítems de la matriz deben ser `0`.

```javascript
generarMatrizEscalonada(3) /* 
  [
    [0], 
    [0, 0], 
    [0, 0, 0]
  ] */
generarMatrizEscalonada(5) /* 
  [
    [0], 
    [0, 0], 
    [0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0, 0]
  ] */
```

### `obtenerFilaMasLarga(matriz)`

Crear una función `obtenerFilaMasLarga` que tome como argumento un array 2d `matriz` y devuelva el array (fila) que tenga mayor longitud. Si hay varios de igual longitud, debe devolver el primero de ellos.

```javascript
obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]]) // [3, 7, 5]
obtenerFilaMasLarga([[1], [3, 7], [6, 8]]) // [3, 7]
```

### `obtenerCantidad(item, items)`

Crear una función `obtenerCantidad` que tome como argumento un valor cualquiera `item` y un array 2d `items` y devuelva la cantidad de veces que `item` se encuentra dentro de `items`.

```javascript
obtenerCantidad('🍎', [
  ['🍎', '🍏', '🍌', '🍌'],
  ['🍌', '🍎'],
  ['🍎', '🍏', '🍌'],
  ['🍏', '🍌', '🍎', '🍌'],
]) // 4
```

### `convertirEnMatriz(columnas, array)`

Crear una función `convertirEnMatriz` que tome como argumentos un número entero `columnas` y un array `array` y devuelva una matriz con los items de `array` y la cantidad de columnas `columnas` por fila. La última fila puede quedarse como menos columnas de las indicadas si no hay más ítems que agregar.

```javascript
convertirEnMatriz(2, [1, 2, 3, 4]) // [[1, 2], [3, 4]]
convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7]) // [[1, 2, 3], [4, 5, 6], [7]]
convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) // [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]]
```

### `consultarTabla(id, columna, tabla)`

COMPLETAR!!!

```javascript
consultarTabla(2, 'nombre', [
  ['id', 'nombre', 'edad', 'email'],
  [1, 'Ada', 33, 'ada@gmail.com'],
  [2, 'Grace', 45, 'grace@gmail.com'],
]) // 'Grace'
```

### `tieneBloqueHorizontal(matriz)`

Crear una función `hayBloqueHorizontal` que tome como argumento un array 2d `matriz` y devuelva `true` si dicha `matriz` tiene un bloque _horizontal_ de 3 o más ítems consecutivos idénticos, o `false` si no tiene.

```javascript
tieneBloqueHorizontal([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]) // false

tieneBloqueHorizontal([
  [1, 2, 3, 4],
  [1, 2, 2, 2],
  [1, 2, 4, 5],
]) // true
```

### `tieneBloqueVertical(matriz)`

Crear una función `hayBloqueHorizontal` que tome como argumento un array 2d `matriz` y devuelva `true` si dicha `matriz` tiene un bloque _vertical_ de 3 o más ítems consecutivos idénticos, o `false` si no tiene.

```javascript
tieneBloqueHorizontal([
  [4, 2, 3],
  [1, 5, 3],
  [1, 2, 3],
]) // true

tieneBloqueHorizontal([
  [1, 2, 3, 4],
  [7, 2, 9, 2],
  [1, 8, 4, 5],
]) // false
```

## Programas

Los siguientes ejercicios se realizan usando:

- `prompt` para pedir ingresar datos
- `confirm` para pedir por sí o por no (opción binaria)
- `alert` para mostrar informaci´ón

Crear un archivo de `.js` para cada ejercicio.

Ejemplo de consigna:

Crear un programa que pida ingresar un nombre, pregunta si el nombre es correcto, y si lo es, muestre un mensaje saludando a la persona con dicho nombre.

```javascript
const nombre = prompt('Por favor, ingresá tu nombre')
const respuesta = confirm('¿˘Estás segura que te llamás así?')

if (respuesta) {
  alert(`¡Hola ${nombre}!`)
}
```

### Buscaminas

Crear un programa que dado un array 2d permita ingresar una coordenada (representando los índices del array), y mostrar si era una casilla vacía o tenía una mina. En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas. Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó. Las minas y casillas vacías (ocultas y descubiertas) pueden representarse con emojis, con con números o letras.

```javascript
const tablero =
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
]

📦 📦 📦
📦 📦 📦
📦 📦 📦

// Ingrese una coordenada: 0,0
// La caja está vacía!

💨 📦 📦
📦 📦 📦
📦 📦 📦

// Ingrese una coordenada: 0,1
// ¡Oh no!¡Has encontrado una bomba!

💨 💥 📦
📦 📦 📦
📦 📦 📦
```

**BONUS**: Hacer que el juego se reinicie una vez terminado.

### 🐍 Viborita

Crear un programa que permita controlar una viborita.

- El programa debe mostrar el tablero en todo momento.
- Debe permitir ingresar las direcciones para donde desea mover la víbora: ARRIBA, DERECHA, ABAJO, IZQUIERDA, y moverla en consecuencia.
- El objetivo es comer todas las manzanas, el juego termina cuando no hay más manzanas.
- Para comer una manzana, debe moverse hacia ella.
- Si la vibora llega esta en el borde del tablero, y se mueve hacia este, debe aparecer del otro lado del mismo.
- Si se intenta avanzar a un casillero bloqueado (en el ejemplo, un ladrillo) no debe poder avanzar.
- En vez de emojis se pueden usar letras.

```javascript
const tablero = [
  ['🌱', '🌱', '🍎', '🌱', '🌱'],
  ['🍎', '🧱', '🌱', '🧱', '🍎'],
  ['🌱', '🧱', '🐍', '🌱', '🌱'],
  ['🌱', '🍎', '🌱', '🧱', '🌱'],
  ['🍎', '🌱', '🌱', '🍎', '🧱'],
  ['🌱', '🌱', '🌱', '🌱', '🍎'],
]
```

## Arrays 2D

**Sublistas**

Crear un programa que permita agregar listas de tareas y agruparlas en categorias. El programa debe hacer lo siguiente:

1. Permitir ingresar el nombre de una categoría
2. Permitir ingresar una tarea
3. Preguntar si desea ingresar otra tarea
4. Si responde que si, volver al punto 2
5. Si responde que no, preguntar si desea ingresar otra categoría 6. Si responde que sí, volver al punto 1
6. Si responde que no, terminar el programa
   <br>

En todo momento (en cada mensaje), el programa debe mostrar las tareas agrupadas por categorías. Las categorías deben diferenciarse de las tareas (se pueden usar divisores, emojis, espacios, etc). Ejemplo:

```
Lista de Tareas

SUPERMERCADO
----------------------
👉 Comprar harina
👉 Comprar gaseosa
👉 Comprar aceite

FACULTAD
----------------------
👉 Sacar apuntes
👉 Anotarse para final

MICHI
----------------------
👉 Comprar comida
👉 Llevar a veterinaria
```

**Canciones y Artistas**

- Crear un programa con las siguientes posibles acciones. Una vez realizada la acción, debe volver al menú de opciones para elegir una nueva.
  - **AGREGAR CANCION:** debe permitir ingresar el nombre de una canción y le artista, separado por coma, por ejemplo: `Africa, Toto`
  - **BUSCAR CANCIONES:** debe permitir ingresar el nombre de une artiste y mostrar una lista con todas sus canciones que (hay ingresadas)
  - **LISTAR ARTISTAS:** debe mostrar una lista con todes les artistes (solo los nombres)
  - **SALIR:** debe terminar la ejecución del programa
