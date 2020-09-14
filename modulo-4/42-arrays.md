# Estructuras de datos: Arrays

## Ejercicios

Todo ejercicio que incluya emojis puede ser sustituido con strings

### `obtenerMenor(numeros)`

Crear una función `obtenerMenor` que tome como argumento un array de números `numeros` y devuelva el menor de ellos. Ejemplo:

```javascript
obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2
```

### `sumar(numeros)`

Crear una función `sumar` que tome como argumento un array de números `numeros` y devuelva la suma de ellos. Ejemplo:

```javascript
sumarNumeros([5, 7, 10, 12, 24]) // 58
```

### `contiene(numero, numeros)`

Crear una funci´ón `contiene` que tome como argumentos un número `numero` y un array de números `numeros` y devuelva `true` o `false` dependiendo de si dicho `numero` se encuentra en el array de `numeros`. Ejemplo:

```javascript
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
```

### `invertirCaso(string)`

Crear una función `invertirCaso` que tome como argumento un string `string` y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

```javascript
invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'
```

### `gano(tragamonedas)`

Crear una función `gano` que tome como argumento un array `tragamonedas` con 5 símbolos y devuelva `true` si son iguales y `false` sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

```javascript
gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
gano(['💫', '💫', '💫', '💫', '💫']) // true
gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true
```

### `estanJuntos(personajes)`

Crear una función `estanJuntos` que tome como argumento un array de strings `personajes`, y devuelva `true` si Sam se encuentra al lado de Frodo, ya sea antes o después, o `false` sino. Ejemplo:

```javascript
estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
estanJuntos(['Sam', 'Orco', 'Frodo']) //true
```

### `separar(perrosYGatos)`

Crear una función `separar` que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

```javascript
separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'
```

### `obtenerChatStatus(usuarias)`

Crear una función `obtenerChatStatus` que tome como argumento un array de strings `usuarias` y devuelva un string con el status del chat. Las reglas son:

- Para una usuaria, debe mostrar: `NOMBRE_USUARIA_1 está conectada`
- Para dos usuarias, debe mostrar: `NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas`
- Para más de dos usuarias, debe mostrar: `NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas`

Ejemplo:

```javascript
obtenerChatStatus(['Ada']) // 'Ada está conectada'
obtenerChatStatus(['Ada', 'Grace']) // 'Ada y Grace están conectadas'
obtenerChatStatus(['Ada', 'Grace', 'Marie']) // 'Ada, Grace y 1 persona(s) más están conectadas'
```

### `germinar(plantines)`

Crear una función `germinar` que tome como argumento un string de `plantines` con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

```javascript
germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'
```

### `comer(plantas)`

Crear una función `comer` que tome por parámetro un string `plantas` que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

```javascript
comer('🐰🥕🥬🥕🚫') // ''
comer('🥕🥬🐰🥕🥕🥕🚫') // '🥕🥬'
comer('🐰🥕🥬🥕🚫🥕') // '🥕'
comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷') // '🌱🥕🌱🌷'
```

### `multiplicar(multiplicador, numeros)`

Crear una función `multiplicar` que tome como argumentos un número `multiplicador` y un array de números `numeros`, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

```javascript
multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
multiplicar(10, [2, 5, 77]) // [20, 50, 770]
```

### `filtrarPorLongitudMayorA(longitud, palabras)`

Crear una función `filtrarPorLongitud` que tome como argumentos un número `longitud` y un array de strings `palabras` y que devuelva un array con las palabras que tengan una cantidad de letras mayor a `longitud`. Ejemplo:

```javascript
filtrarPorLongitudMayorA(4, [
  'dia',
  'remolacha',
  'azul',
  'sorpresa',
  'te',
  'verde',
]) // ['remolacha', 'sorpresa', 'verde']
```

### `recortar(cantidadLetras, palabras)`

Crear una función `recortar` que tome como argumentos un número `cantidadLetras` y un array de strings `palabras` y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando `cantidadLetras` letras al iniciando, y recortando las demás. Por ejemplo, `elefante` recortada a 4 letras queda `elef`.

```javascript
recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
recortar(1, ['algoritmo', 'bug', 'compilador']) // ['a', 'b', 'c']
```

### `sonIguales(a, b)`

Crear una función `sonIguales(a, b)` que tome como argumentos dos arrays `a` y `b` y devuelva `true` si ambos arrays tienen los mismos valores en la misma posición, o `false` sino.

```javascript
sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) // true
sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) // false
sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) // false
```

### `obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)`

Crear una función `obtenerResultado` que tome como argumentos dos strings `jugadoraA` y `jugadoraB` con los nombres de cada jugadora respectivamente, y dos arrays de numeros `puntajesA` y `puntajesB` de la misma longitud. La función debe devolver un string con el nombre de la ganadora o `Empate` en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

```javascript
const puntajesA = [3, 5, 2]
const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B
```

```javascript
obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]) // Ada
obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]) // Empate
obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) // Grace
```

### `jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)`

Crear una función `jugarPiedraPapelTijeras` que tome como argumentos dos strings `jugadoraA` y `jugadoraB` con los nombres de cada jugadora respectivamente, y dos arrays de strings `jugadasA` y `jugadasB` con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o `Empate` en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

```javascript
const jugadasA = ['piedra', 'piedra', 'tijera']
const jugadasB = ['papel', 'tijera', 'tijera']

// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate
```

```javascript
jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) // Grace
jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) // Empate
jugarPiedraPapelTijeras(
  'Ada',
  'Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
) // Ada
```

## Ejercicios con DOM

Para los siguientes ejercicios, no es necesario darle estilos más allá de los básicos que requiera el ejercicio para visualizarse correctamente. Se pueden utilizar funciones realizadas en los ejercicios previos.

### 📝 Lista de tareas

Crear un programa que muestre:

- un input de texto
- un botón que diga `Agregar tarea`
- una lista `ul`

Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.

Para actualizar la lista se debe:

- borrar todo lo que contenga
- recorrer el array y por cada ítem
- insertar un ítem de lista `li` con el valor del ítem del array

### 🔍 Buscador

Crear un programa que muestre:

- un input de texto
- una lista `ul`

El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca `script` y `JavaScript` es un string dentro del array, se debe mostrar.

Para actualizar la lista se debe:

- borrar todo lo que contenga
- recorrer el array y por cada ítem
- insertar un ítem de lista `li` con el valor del ítem del array

Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

**TIP**: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.

### 📈 Total de gastos

Crear un programa que muestre:

- un input de números
- un botón que diga `Agregar gasto/ganancia`
- una lista `ul`
- un elemento `p`

Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento `p`.

Para actualizar la lista se debe:

- borrar todo lo que contenga
- recorrer el array y por cada ítem
- insertar un ítem de lista `li` con el valor del ítem del array

El elemento `p` se actualiza con el total de la suma de los valores del array.
