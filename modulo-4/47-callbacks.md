# Callbacks

## Ejercicios

### `crearUsuario(callback)`

Crear una funcióm `crearUsuario` que reciba como argumento un `callback`. La función debe pedir mediante un `prompt` ingresar el nombre de un usuario, y luego ejecutar el callback.

```js
const confirmarCreacion = () => alert('Usuario creado!') // callback

crearUsuario(callback)

// Por favor, ingrese su nombre
// Ada Lovelace
// Usuario creado!
```

## `validarUsuario(validador)`

Crear una función `validarUsuario` que reciba como argumento un callback `validador`. El callback debe ser una función que tome un string como argumento, haga alguna validación, y devuelva `true` o `false` si pasa dicha validación o no. La funci´ón `validarUsuario`, al ejecutarse, debe pedir mediante un `prompt` ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback `validador` y en base a lo que el callback devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.

Ejemplos de validaciones (solo tiene que validar una de ellas):

- que no tenga espacios
- que tenga más de X caracteres
- que no tenga números
- que tenga mayúsculas

```js
validarUsuario(tieneMayusculas)

// Por favor, ingrese su nombre
// ada
// Usuario incorrecto, intentelo nuevamente
```

### `map(array, callback)`

- Crear una función `map` que acepte un array y un callback y que:
  - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
  - obtenga el resultado
  - lo pushee a un nuevo array
  - devuelva el array final con el resultado de cada una de las llamadas al callback.

Ejemplo:

```javascript
const numeros = [1, 2, 3]
const duplicar = (x) => x * 2
map(numeros, duplicar) // [2, 4, 6]
```

### `filter(array, callback)`

- Crear una función `filter` que acepte un array y un callback y que:
  - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
  - si dicho callback devuelve `true`, pushea el elemento a un nuevo array
  - devuelva el array final con los elementos que pasaron el "filtro".

Ejemplo:

```javascript
const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
filter(numeros, multiploDe10) // [10, 40, 50]
```

### `every(array, callback)`

- Crear una función `every` que acepte un array y un callback y que:
  - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
  - devuelva `true` si _todas_ las llamadas al callback devolvieron `true`

Ejemplo:

```javascript
const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
const esPositivo = (x) => x >= 0

every(numeros, multiploDe10) // false
every(numeros, esPositivo) // true
```

### `some(array, callback)`

- Crear una función `some` que acepte un array y un callback y que:
  - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
  - devuelva `true` si _al menos una_ de las llamadas al callback devolvió `true`

Ejemplo:

```javascript
const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
const esPositivo = (x) => x >= 0

some(numeros, multiploDe10) // true
some(numeros, esPositivo) // true
```

### `find(array, callback)`

- Crear una función `find` que acepte un array y un callback y que:
  - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
  - devuelva el elemento pasado como argumento del primer callback que devuelva `true`
  - si ningún callback devuelve `true`, devuelva `undefined`

```javascript
const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
find(numeros, multiploDe10) // 40
```

### `findIndex(array, callback)`

- Crear una función `findIndex` que acepte un array y un callback y que:
  - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
  - devuelva el índice del elemento pasado como argumento del primer callback que devuelva `true`
  - si ningún callback devuelve `true`, devuelva `undefined`

```javascript
const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
find(numeros, multiploDe10) // 3
```

### `dropWhile(array, callback)`

- Crear una función `dropWhile` que acepte un array y un callback y que:
  - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
  - devuelva un array con los elementos _a partir_ del primer callback que devolvió `false`

(Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da `false` _por primera vez_ agrega todos los elementos restantes a partir de dicho elemento inclusive)

```javascript
const numeros = [40, 33, 50, 8, 2, 3, 20]
const multiploDe10 = (x) => x % 10 === 0
dropWhile(numeros, multiploDe10) // [8, 2, 3, 20]
```

### `takeWhile(array, callback)`

- Crear una función `takeWhile` que acepte un array y un callback y que:
  - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
  - devuelva un array con los elementos _hasta_ el primer callback que devolvió `false`

(Inverso del `dropWhile`)

```javascript
const numeros = [40, 50, 33, 8, 2, 3, 20]
const multiploDe10 = (x) => x % 10 === 0
takeWhile(numeros, multiploDe10) // [40, 50]
```
