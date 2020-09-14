# 🔄 Estructuras de control: bucles

## Funciones

### `obtenerIndice(valor, array)`

Crear una función `obtenerIndice` que tome como argumento un valor cualquiera `valor` y un array cualquiera `array` y devuelva el índice del _primer ítem_ con dicho valor en el array, o -1 si no hay ninguno.

```javascript
obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1
```

### `repetir(valor, cantidad)`

Crear una función `repetir` que tome como argumento un valor `valor` y un número entero `cantidad`, y devuelva una array con `valor` repetido `cantidad` de veces.

```javascript
repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // []
```

### `sumarImparesHasta(numero)`

Crear una función `sumarImparesHasta` que tome como argumento un número `numero` y que devuelva la suma de todos los impares empezando desde 0 hasta dicho `numero` inclusive.

```javascript
sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576
```

### `crearCuentaRegresiva(numeroInicial)`

Crear una función `crearCuentaRegresiva` que tome como argumento un número entero `numeroInicial` y que devuelva un array con cuyo primer ítem sea `numeroInicial` y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

```javascript
crearCuentaRegresiva(3) // [3, 2, 1, 0]
crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]
```

### `invertir(array)`

Crear una función `invertir` que tome como argumento un array `array` y que devuelva un array con los mismos valores pero en orden invertido.

```javascript
invertir([1, 2, 3]) // [3, 2, 1]
invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]
```

### `removerDuplicados(array)`

Crear una función `removerDuplicados` que tome como argumento un array `array` y que devuelva un array con los mismos valores de `array` pero sin valores duplicados.

```javascript
removerDuplicados([1, 1, 1]) // [1]
removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]
```

### `repetirLetras(palabra, cantidad)`

Crear una función `repetirLetras` que tome como argumento un string `palabra` y un número entero `cantidad`, y devuelva una string donde cada letra de `palabra` esté repetida `cantidad` de veces.

```javascript
repetirLetras('hola', 2) // 'hhoollaa'
repetirLetras('ada', 3) // 'aaadddaaa'
repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
repetirLetras('basta', 1) // 'basta'
```

### `capitalizarPalabras(string)`

Crear una función `capitalizarPalabras` tome como argumento un string `string` y devuelva un string donde cada palabra está capitalizada (con la primera letra ma´yuscula). Dejar las demás letras como están.

```javascript
capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
capitalizarPalabras('había una vez') // 'Había Una Vez'
makeTitle('OMG') // 'OMG'
```

### `sumarSeccion(array, comienzo, cantidad)`

Crear una función `sumarSeccion` que tome como argumento un array de números enteros `array`, un número entero `comienzo` y un número entero `cantidad`, y que devuelva la suma de `cantidad` de números de `array` empezando a contar desde el ítem con índice `comienzo`.

```javascript
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) // 37 (4 + 8 + 10 + 20 = 37)
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1) // 3
```

### `esSubconjunto(subconjunto, conjunto)`

Crear una función `esSubconjunto` que tome como argumento dos arrays, `subconjunto` y `conjunto`, y devuelva `true` si `subconjunto` es realmente subconjunto de `conjunto`, es decir, si todos los valores de `subconjunto` están en `conjunto`.

```javascript
esSubconjunto([1], [1, 2, 3]) // true
esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]) // true
esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]) // true
esSubconjunto([1, 2, 3], [1, 2]) // false
esSubconjunto([1], [2, 3, 4]) // false
```

### `tieneBloque(array)`

Crear una función `hayBloque` que tome como argumento un array `array` y devuelva `true` si dicho `array` tiene un bloque de 3 o más ítems consecutivos idénticos, o `false` si no tiene.

```javascript
tieneBloque([1, 2, 3]) // false
tieneBloque([1, 1, 1, 2, 3]) // true
tieneBloque([1, 2, 3, 3, 3]) // true
tieneBloque([1, 2, 3, 3, 3, 8]) // true
tieneBloque([1, 2, 2, 3, 3, 4]) // false
```

### `esPalindromo(palabra)`

Crear una función `esPalindromo` que tenga como par´ámetro un string `palabra` y devuelva `true` si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o `false` sino.

```javascript
esPalindromo('ada') // true
esPalindromo('reconocer') // true
esPalindromo('mama') // false
esPalindromo('javascript') // false
```

**BONUS:** hacer que funcione con oraciones y no con palabras. [Ejemplos](https://es.wikipedia.org/wiki/Pal%C3%ADndromo#Ejemplos).

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

## Ejercicios con bucle `for`

### 🔢 Números impares

Crear un programa que muestre en consola los números impares entre el 0 y el 20

### 📀 Playlist

Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

### 🔍 Número mayor o menor

Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

### ❗️ Factorial

Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 _ 3 _ 2 \* 1 = 24

### 🏃‍♀️ Carrera

Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:

```
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s
```

### ✊🤚✌️ Piedra, papel, tijera II

Al ejercicio de **Piedra, papel, tijera** de _condicionales_, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar quién ganó. Ejemplo:

```
Ronda: 2 de 5
🙍‍♀️ Jugadora: Piedra
👾 Computadora: Tijera
Jugadora ha ganado esta ronda 🎉
Puntaje: 2 (Jugadora) - 0 (Computadora)
```

<br>

## Ejercicios con bucle `while`

### 🔐 Múltiples intentos

Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

### 💲Cara o cruz

Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

### ⚖️ Mayor o menor

Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.

### 🤔 Adivinar palabra

Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.

### 🎾 Tenis

Crear un programa para llevar la cuenta del puntaje de un partido de tenis. Debe pedir inicialmente por los nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, y mostrando el puntaje actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora

### 🧨 Explosión

Crear un programa que permita ingresar una serie de números separados por espacio. El programa debe disminuyendo cada número en 1 por ronda e ir mostrando el resultado (en consola, o en un string concatenado) hasta que todos lleguen a 0 (cuando lleguen a no deben seguir disminuyendo) y se produzca la explosión. Ejemplo

```
⏱ 3 1 0 2
⏱ 2 0 0 1
⏱ 1 0 0 0
💥💥💥💥💥
```

### 🎨 Simón dice II

Replicar el juego de Simón dice. El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color más. El usuario debe ingresar los colores de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa algún color mal), el programa debe terminar. Los colores posibles son: rojo, azul, verde y amarillo. Hay dos variantes posibles: o el juego continúa indefinidamente hasta que se erra la secuencia, y muestra cuántas rondas se sobrevivió, o el programa permite elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.

### 🏝 Isla desierta

- Crear un programa que permita mover un barco hacia una isla. El programa debe permitir ingresar los valores AVANZAR o RETROCEDER, siendo que AVANZAR acerca el barco un espacio hacia la isla y RETROCEDER lo aleja. El programa debe terminar cuando el barco llega a la isla. Ejemplo:

```
⛵️🌊🌊🌊🏝
// AVANZAR
🌊⛵️🌊🌊🏝
// AVANZAR
🌊🌊⛵️🌊🏝
// RETROCEDER
🌊⛵️🌊🌊🏝
// AVANZAR
🌊🌊⛵️🌊🏝
// AVANZAR
🌊🌊🌊⛵️🏝
¡Has llegado a la isla!
```

### 🏧 ATM II

- Crear un programa que tenga un dinero inicial
- El programa también deberá contar con un menú con las siguientes opciones:
  - **EXTRAER:** debe pedir al usuario cuánto desea extraer y _si el dinero a extraer es menor o igual al saldo actual_, restar el dinero extraído al saldo
  - **DEPOSITAR:** debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
  - **CONSULTAR SALDO:** debe mostrar el saldo actual
  - **VER ÚLTIMOS MOVIMIENTOS:** debe mostrar una lista de los últimos moviemientos realizados
  - **SALIR:** debe terminar la ejecución del programa
- El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder consultarse luego, por ejemplo:

```
 ULTIMOS MOVIMIENTOS
 - Depositado: $550
 - Extraido: $1000
 - Consultado saldo: $3400
 - Depositado: $100
```

**📝 Lista de tareas**

- Crear un programa que tenga un menú con las siguientes opciones:
  - **AGREGAR TAREA:** debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
  - **MODIFICAR TAREA:** debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
  - **ELIMINAR TAREA:** debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
  - **VER TAREAS:** debe listar todas las tareas hasta el momento
  - **SALIR:** debe terminar la ejecución del programa
- El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.

### 👾 Monstruo

Crear un juego de combate contra un monstruo.

- El juego debe contar con las siguientes variables:
  - Vida jugadora
  - Vida monstruo
  - Cantidad de pociones
  - Ataque máximo jugadora
  - Ataque máximo monstruo
  - Curación máxima poción
- Todos los valores anteriores deben ser números enteros (a elecci´ón)
- El juego debe tener las siguientes acciones posibles:
  - **ATACAR MONSTRUO:** genera un número aleatorio entre 1 y `Ataque máximo jugadora` y lo resta a `Vida monstruo`
  - **TOMAR POCION:** genera un número aleatorio entre 1 y `Curación máxima poción` y lo suma a `Vida jugadora` y resta 1 a `Cantidad de pociones`
  - **BUSCAR POCION:** genera un número entre 1 y 4, si sale 1 suma una poción, sino no encuentra nada
  - **SALIR:** termina el programa
- En todo momento se debe mostrar un mensaje de lo que está pasando
- Luego de cada acción, el monstruo ataca a la jugadora y le resta a `Vida jugadora` un número aleatorio entre 1 y `Ataque máximo monstruo`
- Luego del ataque del monstruo, se debe mostrar la vida de ambos
- El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
- Mostrar un mensaje con el resultado final
