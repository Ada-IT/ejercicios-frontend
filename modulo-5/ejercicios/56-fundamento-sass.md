# Sass: Fundamentos

## Variables

Una variable nos permite repetir un valor sin estar copiando en todos lados, además nos permite la actualización en todos lo componentes que la utilicen.

### Ejercicio 1

**Contexto:**

Vamos a crear un título, un párrafo y un span aleatorio. Luego asignaremos algunas propiedades con variables y veremos cómo funcionan.

**Pasos:**

1. Creamos el archivo `index.html`, colocamos las etiquetas con texto aleatorio. Por último importamos el archivo `style.css`, este se genera cuando compilemos el sass.
2. Creamos un archivo `main.scss` y dentro colocamos selectores de tipo para cada parte de los textos.
3. Creamos dos variables que van a ser `$margin:15px` y `$color: blue` en el archivo main.scss;
4. Asignamos las siguientes propiedades a cada etiqueta:

```css
h1{
  color: $color;
  margin:$ margin;
}

p{
  background-color: $color
}

span{
  color: $color
}
```

5. Compilamos el ` a un archivo `style.css` y observamos en el navegador los resultados
6. Cambiamos las variables por lo siguiente `$margin:5px` y `$color: red`
7. Repetimos el paso 5.

### Ejercicio 2

**Contexto:**
Vamos a crear un [badge](https://getbootstrap.com/docs/4.5/components/badge/#contextual-variations), un [button](https://getbootstrap.com/docs/4.5/components/buttons/) y una [card](https://getbootstrap.com/docs/4.5/components/card/#card-styles)

### Parte 1 - Creación de componentes y colores

**Ejercicio**

Crear los componentes card, button y badge. Asigarle una variable de color y luego cambiarla.

**Pasos:**

1. Creamos el archivo `index.html`, colocamos una card con un button y un badge.
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

1. Crear un 4 texto aleatorios con las clases `text`,`text-lg`,`text-xl` y `text-xxl`
2. En Sass crear una variable `$fontSize:20px`
3. A cada clase asignarle la variable anteriormente creada, incrementar el tamaño de esta en 0.25 unidades empezando en 1.Cuidado multiplicamos sin unidad, por ejemplo,

```scss
.text-xl{
  font-size: $fontSize * 1.5;
}
```

4. Veremos que los texto tienen los siguietes font-size

```
text: 20px
text-lg: 25px
text-xl: 30px
text-xl: 35px
```

### Ejercicio 5 - Multiplicación con error

1. Repetir el ejercicio anterior
2. En vez de incremetar por 0.25 lo hacemos por 0.25px.Por ejemplo:

```scss
.text-xl{
   font-size:$fontSize * 1.5px;
}
```

5. Analizar el error e investigar porque no se puede hacer eso.

### Ejercicio 6 - División

1. Copiar el siguiente codigo html

```html
<div class="box">
  <div class="first"></div>
  <div class="second"></div>
</div>
```

2. Dar los siguientes estilos

```css
.box{
  display: flex;
}

.first{
  background-color: aqua;
  height: 150px;
  width: 150px;
}

.second{
  background-color: red;
  height: 150px;
  width: 150px;
}
```

3. Cambiar ambos width por 100%
4. La clase `first` debe ocupar un 20% del total del 100% del ancho,es decir, hay que dividir 100% por 5. No olvides de colocar los parentesis
5. La clase `second` debe ocupar un 80% del total del 100% del ancho,es decir, hay que dividir 100% por 1.25. No olvides de colocar los parentesis


### Ejercicio 7 - Integrador

Se quiere crear un contenedor principal que ocupe el 100% del ancho y 120 px de alto.Además que dentro posea 3 cajas de diferente color y cada una ocupe un 30% del ancho total y 150 px de alto.Aclaración no debe haber salto de línea, es decir, que las tres caja se encontraran una a lado de la otra.

## Anidado
### Ejercio 1
1. Crean un archivo html y pegar el siguiente segmento de código en el body

```html
   <div class="btn-group">
      <button type="button" class="btn">Left</button>
      <button type="button" class="btn">Middle</button>
      <button type="button" class="btn"><span>Right<span></button>
   </div>
   <button type="button" class="btn">Right</button>
```

2. Usando combinadores de espacio vamos hacer que los botones dentro de la clase `btn-group` tengan un color de fondo rojo

```scss
.btn-group{
   .btn{
      background-color: red;
   }
}
```

3. Ahora usando combinadores de hijo directo vamos hacer que el span dentro de un boton tengan un color de fondo azul

```scss
.btn{
   > span{
      background-color: blue;
   }
}
```

4. Ahora usando combinadores de hermanos adyacentes vamos hacer que la etiqueta `button` la letra sea de 36px cuando este seguida de un `div`

``` scss
div{
   + button{
      font-size:36px
   }
}
```
5. Si revisamo el css generado nos quedara algo como lo siguiente:

```scss
.btn-group .btn {
  background-color: red;
}

.btn > span {
  background-color: blue;
}

div + button {
  font-size: 36px;
}
```


### Ejercicio 2

#### Base

Crear un archivo html y pegar el siguiente segmento de código en el body

```html
   <div>
      <p><span>Lorem ipsum dolor sit amet.</span></p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Impedit quod sit dignissimos ratione.</p>
      <p>Esse suscipit pariatur quibusdam illum.</p>
      <p><span>Lorem ipsum dolor sit amet.</span></p>
   </div>
   <p><span>Lorem ipsum dolor sit amet.<span>Lorem ipsum dolor sit amet.</span></span></p>
   <p><span>A voluptatem nihil deleniti modi!<span>Ut distinctio iusto placeat nisi.</span></span></p>
   <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, dolor!</h1>
   <p><span>Lorem ipsum dolor sit amet.<span>Lorem ipsum dolor sit amet.</span></span></p>
   <p><span>Dolor sapiente dolores earum repellendus.<span>Laudantium rem quia nobis neque?</span></span></p>
```

#### Parte 1

Usando combinadores de espacio en Sass darle los siguientes estilos:

- A las `p` que están dentro del div dar un color de fondo `blue`
- A los `span` que están dentro del div darle un color de fondo `red`

#### Parte 2

Usando combinadores de hijo(>) en Sass darle los siguientes estilos:

- A los `span` que son hijos directos del una etiqueta `p` cambiar el color a un `green`.

#### Parte 3

Usando combinadores de hermanos adyacentes(+) en Sass darle los siguientes estilos:

- A los `p` que son hermanos adyacentes del `h1` cambiar el tamaño de letra por `24px`

#### Parte 4

Usando combinadores generales de hermanos(~) en Sass darle los siguientes estilos:

- A los `p` que son hermanos generales del `div` cambiar el fondo de color por `silver`

### Selector padre

#### Ejercicio 1

1. Crean un archivo html y pegar el siguiente segmento de código en el body
```html
   <div class="btn-group">
      <button type="button" class="btn">Left</button>
      <button type="button" class="btn">Middle</button>
      <button type="button" class="btn"><span>Right<span></button>
   </div>
   <button type="button" class="btn btn--primary">Right</button>
```
2. Usando selector padre vamos hacer que los elemento con la clase `btn` tengan el fondo de color rojo dentro del `btn-group`
```scss
.btn-group{
   & .btn{
      background-color: red;
   }
}
```
3. Ahora queremos que `btn` tenga un color verde y cuando le hagamos `hover` cambie el color a violeta
```
.btn{
      background-color: green;
      &:hover{
            background-color: violet;
      }
}
```

4. Por ultimo queremos tener una variante de esta con el color azul de fondo.Cambiamos el codigo a:
```
.btn{
      background-color: green;
      &:hover{
            background-color: violet;
      }
       &--primary{
          background-color: blue;
      }
}
```
5. Si revisamo el css generado nos quedara algo como lo siguiente:
```
.btn-group .btn {
  background-color: red;
}

.btn {
  background-color: green;
}
.btn:hover {
  background-color: violet;
}
.btn--primary {
  background-color: blue;
}
```


### Ejercicio 2
#### Base

Crean un archivo html y pegar el siguiente segmento de código en el body

```
   <div class="card">
      <div class="card__header">
         <h3>Soy un card</h3>
      </div>
   <div class="card__body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, sapiente.</p>
   </div>
      <div class="card__footer">
         <button class="button button--primary">Aceptar</button>
         <button class="button button--danger">Cancelar</button>
      </div>
   </div>
```

# Enunciado

1. Usando el selector padre darle estilo a la card

- Para el `card__header` y el `card__footer` un color de fondo `f3f3f3`
- Para el `card__body` dar el color de fondo `fafbfd`

2. Usando el selector padre darle estilo a los botones

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

## Integrador

Utilizando todo lo visto realizar los siguientes maquetados:

* ![Success Toasts](https://uidesigndaily.com/uploads/1012/day_1012.png)
* ![Cards](https://uidesigndaily.com/uploads/1117/day_1117.png)
* ![Blog Cards](https://uidesigndaily.com/uploads/997/day_997.png)
* ![App List](https://uidesigndaily.com/uploads/1057/day_1057.png)

Recordá que tenes recursos como los siguientes:

* [Unsplah](https://unsplash.com/) para imagenes
* [Google Font](https://fonts.google.com/) para la familia de letras
* [Randomuser](https://randomuser.me/photos) para foto de perfil aleatorias
