# Sass: Fundamentos

## Variables

Una variable nos permite repetir un valor sin estar copiando en todos lados, además nos permite la actualización en todos lo componentes que la utilicen.

### Ejercicio 1

**Contexto:**
Vamos a crear un título, un párrafo y un span aleatorio.Luego asignaremos algunas propiedades con variables y veremos como funcionan.
**Pasos:**

1. Creamos el archivo `index.html` ,colocamos las etiquetas con texto aleatorio.Por ultimo importamos el archivo `style.css`, este se genera cuando compilemos el sass.
2. Creamos un archivo `main.scss` y dentro colocamos selectores de tipo para cada parte de los textos.
3. Creamos dos variables que van a ser `$margin:15px` y `$color: blue` en el archivo main.scss;
4. Asignamos las siguientes propiedades a cada etiqueta:

```
h1{
	color:$color;
	margin:$margin;
}

p{
	background: $color
}

span{
	color:$color
}
```

5. Compilamos el sass a un archivo `style.css` y observamos en el navegador los resultados
6. Cambiamos las variables por lo siguiente `$margin:5px` y `$color: red`
7. Repetimos el paso 5.

### Ejercicio 2

**Contexto:**
Vamos a crear un [badge](https://getbootstrap.com/docs/4.5/components/badge/#contextual-variations), un [button](https://getbootstrap.com/docs/4.5/components/buttons/) y una [card](https://getbootstrap.com/docs/4.5/components/card/#card-styles)

### Parte 1 - Creación de componentes y colores

**Ejercicio**
Crear los componentes card, button y badge. Asigarle una variable de color y luego cambiarla.
**Pasos:**

1. Creamos el archivo `index.html` ,colocamos una card con un button y un badge.
2. Creamos los archivos sass que necesitamos.
3. Dentro de la carpeta de sass creamos la carpeta `utils` y dentro el archivo `_variables.scss`
4. Lo importamos en el archivo `main.scss`
5. Le damos estilos a todos los elementos mencionados
6. En el archivo de `variables` creamos 4 variables para los colores
   ```
   $primary: #007bff;
   $secondary:#6c757d;
   $background: #f8f9fa;
   $white: #fff;
   ```
7. Ahora asignamos las variables a cada elemento de la siguiente forma:
   a. A la card le colocamos como background-color la variable `$background`
   b. Al button le colocamos de background-color la variable `$primary` y el color `$white`
   c. Al badge le colocamos de background-color la variable `$secondary`
8. Agregamos un título dentro de la card, le asignamos una clase y en el archivo de `card` le asignamos la variable `$primary`
9. Vamos a cambiar los colores, para esto modificamos las variables y las cambiamos por las siguientes:

```
	$primary: #ffc107;
	$secondary:#fd7e14;
	$background: #17a2b8;
	$white: #fff;
```

10. Verificamos que los cambios se efectuaron.

### Parte 2 - Box shadow

**Ejercicio:**
Agregar 2 dos variables más para los box shadow, con los siguientes valores:

- shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
- shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

Ahora asignamos la variable shadow al button y shadow-xl a la card.Luego cambiamos el valor de shadow-xl a `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);`

## Operadores Aritméticos

### Ejercicio 1 - Suma y resta de unidades

1. Crear dos cajas y asignarle la clase box1 y box2 respectivamente.
2. A cada una de la clase agregarle la propiedad de ancho y alto en 100 px.
3. Luego a la caja box1 sumarle 15 px de ancho y 10 unidades de alto.
4. A la segunda restarle 35px de ancho y 40 de alto.

### Ejercicio 2 - Suma y resta de colores

1. Crear una caja con un texto aleatorio dentro.
2. Asignarle un alto y un ancho de 150 px.
3. Creamos la variable `$red: #CD4629`
4. A la caja le asignamos esta variable como color y color de fondo.
5. Al color le sumamos el siguiente valor `#019e8a`
6. Al color le restamos el siguiente valor `#019e8a`

### Ejercicio 3 - Suma y resta con error

1. Crear una caja con un texto aleatorio dentro.
2. Asignarle un alto y un ancho de 150 px.
3. Sumar a 1rem al alto y restarle 5% al ancho.
4. Analizar el error e investigar porque no se puede hacer eso.

### Ejercicio 4 - Multiplicación

1. Crear un párrafo con texto aleatorio
2. Asignar una clase.
3. Darle un tamaño de letra de 10 px
4. Multiplicar este por 3

### Ejercicio 5 - Multiplicación con error

1. Crear un párrafo con texto aleatorio
2. Asignar una clase.
3. Darle un tamaño de letra de 10 px
4. Multiplicar este por 3 px
5. Analizar el error e investigar porque no se puede hacer eso.

### Ejercicio 6 - División

1. Crear un párrafo con texto aleatorio
2. Asignar una clase.
3. Darle un tamaño de letra de 18 px
4. Dividir este por 3 px
5. Revisar el resultado, debería verse un tamaño de letra de 6 px. En caso que no se vea recordar de agregar los paréntesis en el cálculo.

### Ejercicio 7 - Integrador

Se quiere crear un contenedor principal que ocupe el 100% del ancho y 120 px de alto.Además que dentro posea 3 cajas de diferente color y cada una ocupe un 30% del ancho total y 150 px de alto.Aclaración no debe haber salto de línea, es decir, que las tres caja se encontraran una a lado de la otra.

## Operadores de comparación y lógicos

### Ejercicio 1 - Usando condicionales

1. Crear una caja con un alto y un ancho de 150 px
2. Crear una variable llamada `$with-margin: false`
3. En las propiedades de la caja agregamos al siguiente sintaxis:

```
.box{
	width:150px;
	height:150px;
	@if(false){
		margin:150px;
	}
	@else{
		margin:0;
	}
}
```

4. Validamos los cambios en el navegador.
5. Cambiamos la variable por un valor `true`
6. Volvemos a validar los cambios.

### Ejercicio 2 - Operadores de comparación

1. En el archivo de sass crear las variables `$height:120px` y `$width:150px`
2. En el html creamos una caja
3. A la caja le asignamos las variables que creamos para el alto y para el ancho
4. Usamos un condicional y preguntamos si el alto es más grande que el ancho, y lo resolvemos de la siguiente forma:
   a. Si es verdadero el color de fondo sea un azul
   b. Si es falso que sea de color rojo
5. Cambiar el valor de las variables para que se vea de color azul la caja.

### Ejercicio 3 - Operadores de comparación y lógicos

1. Repetimos el ejercicio 2
2. Ahora el condicional tiene que ser si el alto es igual o más chico que el ancho y además el ancho no supere los 121 px se deberá resolver de la siguiente forma:
   a. Si es verdadero el color de fondo sea un azul
   b. Si es falso que sea de color rojo
3. Cambiar el valor de las variables para que se vea de color azul la caja.

### Ejercicio 4 - Operadores de comparación y lógicos

1. Repetimos el ejercicio 2
2. Ahora el condicional tiene que ser si el alto es diferente al ancho y además el ancho sea igual a 120 px se deberá resolver de la siguiente forma:
   a. Si es verdadero el color de fondo sea un azul
   b. Si es falso que sea de color rojo
3. Cambiar el valor de las variables para que se vea de color azul la caja.

## Anidado

### Base

Crean un archivo html y usando emmet replicar el siguiente código
`(div>(p>span>lorem)+(p*3>lorem)+(p>span>lorem))+(p*2>span>lorem+span>lorem)+(h1>lorem10)+p*2>span>lorem+span>lorem`
Para esto hay que vscode, hay que copiarlo y pegarlo.Luego apretar la combinación de teclas `ctrl+ barra espaciadora` o `⌃ + barra espaciadora` en mac.Esto despliega la sugerencia apretar enter y se le creara un código HTML necesario para los ejercicios.

### Parte 1

Usando combinadores de espacio en Sass darle los siguientes estilos:

- A las `p` que están dentro del div dar un color de fondo `blue`
- A los `span` que están dentro del div darle un color de fondo `red`

### Parte 2

Usando combinadores de hijo(>) en Sass darle los siguientes estilos:

- A los `span` que son hijos directos del una etiqueta `p` cambiar el color a un `green`.

### Parte 3

Usando combinadores de hermanos adyacentes(+) en Sass darle los siguientes estilos:

- A los `p` que son hermanos adyacentes del `h1` cambiar el tamaño de letra por `24px`

### Parte 4

Usando combinadores generales de hermanos(~) en Sass darle los siguientes estilos:

- A los `p` que son hermanos generales del `div` cambiar el fondo de color por `silver`

### Selector padre

### Base

Crear los archivos necesarios y utilizar la siguiente plantilla de emmet:
`.card>(.card__header>h3{Soy un card})+(.card__body>p>lorem35)+(.card__footer>button.button.button--primary{Aceptar}+button.button.button--danger{Cancelar})`

### Enunciado

1. Usando el selector padre darle estilo a la card

- Para el `card__header` y el `card__footer` un color de fondo `f3f3f3`
- Para el `card__body` dar el color de fondo `fafbfd`

3. Usando el selector padre darle estilo a los botones

- Para el botón base dar un padding de `16px 8px`
- Dentro de este al `button--primary` dar los siguientes estilos:
  - Color del texto `#ffffff`
  - Color de fondo `#4299e1`
  - Cuando se le haga`hover` que el color de fondo cambie a `#2b6cb0`
  - Cuando está en estado de `active` que el color de fondo cambie a `#2a4365`
- Dentro de este al `button--danger` dar los siguientes estilos:
  - Color del texto `#ffffff`
  - Color de fondo `#f56565`
  - Cuando se le haga`hover` que el color de fondo cambie a `#c53030`
  - Cuando está en estado de `active` que el color de fondo cambie a `#742a2a`
