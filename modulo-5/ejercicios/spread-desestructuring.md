# Spread/Rest Operator

### **Ejercicio 1**

- Completá el siguiente código para obtener el resultado deseado en el console.log, utilizando el operador de propagación (spread operator).

```js
const delUnoAlTres = [1, 2, 3];

const delUnoAlCinco = // ACA LA SOLUCION

console.log( delUnoAlCinco ); // [1, 2, 3, 4, 5]
```

### **Ejercicio 2**

- A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’

```js
const arrayDado = ['UNO', 'DOS', 'TRES'];

const nuevoArray = // ACA LA SOLUCION

console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']
```

### **Ejercicio 3**

- Completá el código para poder unir los 3 arrays en uno solo y llegar al resultado esperado utilizando el spread operator.

```js
const frase0 = ['¡', 'Hola'];
const frase1 = [',', ' ', 'Mundo'];
const frase2 = ['!'];

const fraseCompleta = // ACA LA SOLUCION

console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!
```

### **Ejercicio 4**

- Completá el siguiente código para llegar al resultado esperado (respetar orden).
- Quiero obtener un único objeto final con todas las propiedades

```js
const reviews = {
 reviewIMDB: 9,
 reviewFilmAffinity: 8.1
};

const peliInfo = {
 titulo: 'The Dark Knight',
 anio: 2008
};

const pelicula = // ACA LA SOLUCION

console.log(pelicula);
// {
//   titulo: 'The Dark Knight',
//   anio: 2008,
//   reviewIMDB: 9,
//   reviewFilmAffinity: 8.1
// }
```

### **Ejercicio 5**

- Completá el siguiente código para llegar al resultado esperado (respetar orden).
- Tengo un objeto con propiedades que representa una alumna
- Las propiedades que contiene son: `nombre` y `apellido`
- Queremos agregar la propiedad `sabeJS` con valor `true`, y la propiedad `edad` con el valor `27`
- La propiedad `sabeJS` queremos que esté al principio y la propiedad `edad` al final

```js
const estudiante = {
 nombre: 'Ada',
 apellido: 'Lovelace'
};

const estudianteJS = // SOLUCION

console.log(estudianteJS);
// { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }
```

### **Ejercicio 6**

- La función Math.max() recibe varios números (distintos parámetros) y retorna el más alto.
- ¿Cómo modificarías el siguiente código para que funcione con distintos arrays sin tener que estar todo el tiempo usando los índices?

```js
console.log( Math.max(4, 7) ); // 7

const tresNums = [9, 4, 7];
console.log( Math.max(tresNums[0], tresNums[1], tresNums[2]) ); // 9
console.log( Math.max(tresNums) ); // NaN

const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
console.log( Math.max(masNums) ); // NaN, y debería ser 132
```


### **Ejercicio 7**

- Escribir una arrow function llamada `agregarNumeroAlArray`, que recibe un número como primer parámetro y un array como segundo parámetro
- Utilizando spread operator, la función tiene que retornar un array conteniendo los números del array pasado por parámetro y concatenarle al final el nuevo número.
- Utilizar Spread Operator

```js
// ejemplo de uso
console.log( agregarNumeroAlArray(1, [6, 19]) ) // [6, 19, 1]
console.log( agregarNumeroAlArray(4, [1, 2, 3]) ) // [1, 2, 3, 4]
```

### **Ejercicio 8**

- Crear la función `contarLosArgumentos`, que toma un número **variable** de parámetros y retorna la cantidad de parámetros que tiene
- Utilizar Rest Operator

```js
contarLosArgumentos('uno', 'dos'); // 2
contarLosArgumentos('uno', 'dos', 'tres', 'cuatro'); // 4
contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17); // 16
```

### **Ejercicio 9**

- Escribir la función `alCuadradoYSumar`, que toma un número variable de parámetros, los eleva al cuadrado y retorna la suma de todos
- Utilizar Rest Operator

```js
alCuadradoYSumar(2, 4, 3); // 29
alCuadradoYSumar(1, 2); // 5
```

### **Ejercicio 10**

- Tengo un array con arrays adentro
- Tomando la idea del ejercicio 3, ¿cómo podemos implementar una solución que desde un array de arrays, me retorne un solo array con todos los elementos juntos?

<details>
  <summary>💡 Pista</summary>

  ## Heading
  1. Ya sabemos juntar dos arrays, para hacer varios deberíamos iterar con un for
  2. Tenemos un array vacío inicialmente, y le vamos agregando (con spread operator) cada nuevo _sub_ array que iteramos
  3. Entonces: inicializo array vacío, itero por el array de arrays, y agrego cada elemento al array anterior (como hicimos en el ejercicio 1). Cuando termino de iterar, en el array que inicialicé vacío, debería tener el array completo
</details>

```js
const fraseEnPartes = [
  ['¡', 'Hola'],
  [',', ' ', 'Mundo'],
  ['!']
];

const fraseCompleta = // ACA LA SOLUCION

console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!
```

### **Ejercicio 11**

- Escribir la función `combinarArrays`, que toma un número variable de parámetros
- Cada parámetro es un array
- Combinar todos los arrays y retornar uno solo para obtener el resultado esperado
- Utilizar Rest Operator y Spread operator

```js
combinarArrays([1, 2], [4, 5, 6]); // [1, 2, 4, 5, 6]
combinarArrays(['a', 'b']); // ['a', 'b']
combinarArrays([true, false], [1, 2, 3], ['a'], [{}]) // [true, false, 1, 2, 3, 'a', {}]
```

# Destructuring

### **Ejercicio 1**

- Crear una función (arrow function) llamada `mostrarInfo`
- `mostrarInfo` recibe un objeto y retorna la cadena “Tu nombre completo es ” concatenado con el valor de la propiedad nombre, un espacio y el valor de la propiedad apellido
- Tenés que usar destructuring dentro de la función.

```js
const persona = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };

const mostrarInfo = obj =>; // ACA LA SOLUCION

console.log( mostrarInfo(persona) );
// Tu nombre completo es Ada Lovelace
```

### **Ejercicio 2**

- Utilizando destructuring, debemos extraer la propiedad nombre de cada objeto y crear un array en la variable nombres con los 3 nombres que obtuvimos de cada persona.
- 💡 Pista: vamos a tener que crear una variable para cada nombre

```js
const persona1 = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };
const persona2 = { nombre: 'Grace', apellido: 'Hopper', edad: 25 };
const persona3 = { nombre: 'Hedy', apellido: 'Lamarr', edad: 45 };

const nombres = [];

console.log( nombres );
// [ 'Ada', 'Grace', 'Hedy' ]
```

### **Ejercicio 3**

- Tenemos un array `datosPersonales`, con el nombre, apellido, día nacimiento, mes nacimiento, año nacimiento, lugar nacimiento (respetando el orden) de una persona
- Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.

```js
const datosPersonales = [ 'Ada', 'Lovelace', 10, 12, 1815, 'Londres' ];

// utilizando destructuring
// extraer las variables nombre, lugar, dia, mes, anio

console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);
// Ada nació en Londres, el 10/12/1815.
```

### **Ejercicio 4**

- Tenemos un objeto persona, con sus datos personales
- Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.

```js
const persona = {
 nombre: 'Ada',
 apellido: 'Lovelace',
 fechaNacimiento: [10, 12, 1815],
 lugarNacimiento: {
   pais: 'Inglaterra',
   ciudad: 'Londres'
 }
};

console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);
// Ada nació en Londres, el 10/12/1815.
```

### **Ejercicio 5**

- Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.

```js
const persona = ['Ada Lovelace', [ { edad: 30, idioma: 'inglés' } ]];

// usando destructuring, obtener las variables idioma y nombrePersona

console.log(`${nombrePersona} habla en ${idioma}.`);
// Ada Lovelace habla en inglés.
```

### **Ejercicio 6**

- Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.

```js
const persona1 = {
 nombre: 'Ada Lovelace',
 techs: ['JavaScript', 'C++']
};

const persona2 = {
 nombre: 'Grace Hopper',
 techs: []
};

console.log(`${nombrePersona1} programa en ${techPersona1}.`);
console.log(`${nombrePersona2} programa en ${techPersona2}.`);

// Ada Lovelace programa en JavaScript.
// Grace Hopper programa en JS.
```

### **Ejercicio 7**

- ¿Cómo podríamos mejorar la siguiente función utilizando destructuring?
- La función de la solución tiene que ser también una arrow function de una sola línea

```js
const calcularArea = (triangulo) => {
 const ladoA = triangulo.a;
 const ladoB = triangulo.b;
 const ladoC = triangulo.c;

 return ladoA + ladoB + ladoC;
}

// ejemplos de uso
const triangulo1 = { a: 3, b: 5, c: 7 };
const triangulo2 = { a: 8, b: 2, c: 3 };

console.log( calcularArea(triangulo1) ); // 15
console.log( calcularArea(triangulo2) ); // 13
```

### **Ejercicio 8**

- Crear una función (arrow function) llamada `mostrarPrimerDisco` que recibe un objeto y retorna la cadena "El primer disco de BANDA es PRIMERDISCO"
- Tenés que usar destructuring dentro de la función, y tiene que tener el return implícito

```js
const banda = {
 nombre: 'Nirvana',
 discos: [
   { nombre: 'Bleach' },
   { nombre: 'Nevermind' },
   { nombre: 'Incesticide' }
 ]
};

// crear la funcion mostrarPrimerDisco

console.log( mostrarPrimerDisco(banda) ); // El primer disco de Nirvana es Bleach
```

### **Ejercicio 9**

- Crear una una arrow function llamada `estaVacio` que recibe un array y retornar true si no tiene ningún elemento, o false si tiene algún elemento
- Es necesario utilizar destructuring y no hacer uso de la propiedad length de los arrays.

```js
const estaVacio = ; // aca la solucion

estaVacio([])
 //=> true

estaVacio([0])
 //=> false

estaVacio([[]])
 //=> false
```

- 💡 Pista: cuando intento hacer destructuring sobre elementos que no existen, obtengo undefined

# Integrador

A tener en cuenta:

- No usar notación de punto ni de corchete para acceder a propiedades (en la medida que se pueda)
- Usar destructuring, spread operator y valores por default cuando hagan falta
- No mutar el objeto original

## Datos

```js
const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
}
```

```js
const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
}
```
```js
const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
}
```
```js
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
}
```


## Ejercicios

### `getMoves()`
* Crear una función `getMoves` que tome como argumento un pokémon y devuelva la lista de movimientos

### `getPrimaryAbility()`
* Crear una función `getPrimaryAbility` que tome como argumento un pokémon y devuelva la habilidad primaria

### `getWeaknesses()`
* Crear una función `getWeaknesses` que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

### `getResistances()`
* Crear una función `getResistances` que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

### `resistsType()`
* Crear una función `resistsType` que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

### `resistsMove()`
* Crear una función `resistsMove` que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: `{ name: "Rain dance", type: "water" }`

### `isWeakAgainst()`
* Crear una función `isWeakAgainst` que tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva `true` si el pokémon atacado es débil frente al tipo de pokémon que lo ataca

### `isStrongAgainst()`
* Crear una función `isStrongAgainst` que tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva `true` si el pokémon atacado es resistente al tipo de pokémon que lo ataca

### `addAbility()`
* Crear una función `addAbility` que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: `{ secondary: "Discharge" }`) y devuelva el pokémon con la habilidad agregada

### `addMove()`
* Crear una función `addMove` que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

### `removeMove()`
* Crear una función `removeMove` que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado

### `getAttackModifier()`
* Crear una función `getAttackModifier`, tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva:
    - 2, si el pokémon atacado es débil (`weakness`) contra el tipo del pokémon que ataca
    - 0,5, si el pokémon atacado es resistente (`resistances`) contra el tipo del pokémon que ataca
    - 1, si no es débil ni resistente

### `getAttackLog()`
* Crear una función `getAttackLog`, que tome como argumento un objeto con las siguientes propiedades:

```js
{
    attacker: "Squirtle",
    attacked: "Pikachu",
    move: "Water Gun",
    damage: 12,
    modifier: "weak" // otros valores: "resistant", "normal"
}
```

Y que devuelve un string con la siguiente plantilla:

```js
`${attacker} used ${move}! ${attacked} lost ${damage} HP!`
```

Por ejemplo:

```
"Squirtle used Water Gun! Pikachu lost 12 HP!"
```

Si el pokémon es débil contra el tipo de su atacante, se debe agregar `It's super effective!`, si es resistente, se debe agregar `It's not very effective!`, por ejemplo:

```
"Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
```

### `calculateDamage()`
* Crear una función `calculateDamage` que tome como un argumento un objeto con la siguientes propiedades 
    - `attack` es el ataque del pokémon que ataca
    - `defense` es la defensa del pokémon siendo atacado
    - `modifier` el modificador del daño según el tipo del atacante y del atacado
y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula: 

```js
0.5 * attack * (attack / defense) * modifier
```    

### `battle()`
* Crear un función `battle` que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
    - Por ronda, cada pokémon ataca al contrario
    - Comienza atacando el pokémon con más velocidad (`speed`)
    - La batalla termina cuando la vida (`hp`, hit points, puntos de golpe) de un pokémon llega a 0 o menos
    - El daño se obtiene con la función `calculateDamage` y se resta a la vida del pokémon atacado
    - Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función `getAttackLog`
    - El movimiento se elige de forma aleatoria en cada ataque
    - El objeto que debe devolver como resultado debe seguir la siguiente estructura:
        
```js
{
    rounds: 1,
    results: {
        winner: {
            name: "Pikachu",
            hp: 12 // vida restante
        },
        losser: {
            name: "Squirtle",
            hp: 0
        }
    },
    history: [
        "Squirtle used Water Gun! Pikachu lost 12 HP!", 
        "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
    ]
}
```
