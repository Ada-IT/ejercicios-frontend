# Funciones

## Ejercicios

### `sumar(a, b)`

Crear una función `sumar` que tome como argumentos dos números y devuelva la suma de ellos

```javascript
sumar(2, 3) // 5
sumar(1.2, 3.4) // 4.6
sumar(3, -5) // -2
```

### `restar(a, b)`

Crear una función `restar` que tome como argumentos dos números y devuelva la resta de ellos

```javascript
restar(3, 2) // 1
restar(10, 5.5) // 4.5
restar(3, 5) // -2
```

### `multiplicar(a, b)`

Crear una función `multiplicar` que tome como argumentos dos números y devuelva la multiplicación de ellos

```javascript
sumar(2, 3) // 6
sumar(4, 0.5) // 2
```

### `dividir(a, b)`

Crear una función `dividir` que tome como argumentos dos números y devuelva la suma de ellos

```javascript
sumar(2, 3) // 5
sumar(1.2, 3.4) // 4.6
sumar(3, -5) // -2
```

### `esPar(numero)`

Crear una función `esPar` que tome como argumento un número y devuelva `true` si dicho números es par o `false` si no lo es

**TIP**: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

```javascript
esPar(2) // true
esPar(3) // false
```

### `esImpar(numero)`

Crear una función `esImpar` que tome como argumento un número y devuelva `true` si dicho números es impar o `false` si no lo es

**TIP**: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

```javascript
esImpar(2) // false
esImpar(3) // true
```

### `calcularAreaTriangulo(base, altura)`

Crear una función `calcularAreaTriangulo` que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

```javascript
calcularAreaTriangulo(3, 4) // 6
calcularAreaTriangulo(5, 6) // 40
```

### `gritar(str)` 

Crear una función `gritar` que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

```javascript
gritar('hola') // ¡hola!
gritar('aaaaaa') // ¡aaaaaa!
```

### `obtenerNombreCompleto(nombre, apellido)`

Crear una función `obtenerNombreCompleto` que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

```javascript
obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'
```

### `saludar(nombre)`

Crear una función `saludar` que tome como argumentos un nombre y devuelva un saludo que lo incluya.

```javascript
saludar('Ada') // 'Hola Ada, un gusto conocerte'
```

### `saludarGritando(nombre, apellido)`

Usando las funciones anteriores (`obtenerNombreCompleto`, `saludar` y `gritar`), crear una función `saludarGritando` que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

```javascript
saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
```

**TIP:** recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante

```javascript
const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)
console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!
```

### `convertirHorasEnSegundos(horas)`

Crear una función `convertirHorasEnSegundos` que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

```javascript
convertirHorasEnSegundos(1) // 3600
convertirHorasEnSegundos(3) // 10800
convertirHorasEnSegundos(4.5) // 16200
```

### `calcularPerimetroRectangulo(ancho, alto)`

Crear una función `calcularAreaTriangulo` que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

```javascript
calcularPerimetroRectangulo(3.2, 5) // 16.4
calcularPerimetroRectangulo(10, 20) // 60
```

### `calcularPorcentaje(numero, porcentaje)`

Crear una función `calcularPorcentaje` que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

```javascript
calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20
```

### `calcularFPS(fps, minutos)`

FPS son _cuadros por segundo_ (_frames per second_). Crear una una función `calcularFPS` que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

```javascript
calcularFPS(1, 1) // 60
calcularFPS(10, 2) // 1200
calcularFPS(2, 3) // 360
```
