# Sass: Extends y Mixins
##  Extends
Son declaraciones CSS agrupando diversas reglas de estilo. Es muy parecido a crear una clase, pero solo se escribirán en el CSS resultante cuando sean usadas.
### Ejercicio 1
**Contexto:**
Vamos a construir unos [badge](https://getbootstrap.com/docs/4.5/components/badge/) de diferentes tamaños.
**Pasos:**
1. Creamos el archivo `index.html`,colocamos los siguientes en body:
```html
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, sint repellendus? Dolores.<span  class="badge-sm">New</span></p>

<p>Magni quos quas voluptatibus ab, aut fuga perferendis dignissimos obcaecati adipisci molestias?<span  class="badge-md">New</span></p>

<p>Possimus tempora sed non voluptate porro debitis voluptates enim voluptatum dolor? Perspiciatis!<span  class="badge-xl">New</span></p>
 ```
 2. Creamos un archivo `main.scss` y dentro colocamos lo siguiente:
 ```sass
 %badge{
background-color:  gray;
color:  #FFF;
display:  inline-block;
padding:  4px;
border-radius:  2px;
}
.badge-sm{
@extend  %badge;
font-size:  12px;
}
.badge-md{
@extend  %badge;
font-size:  16px;
}
.badge-xl{
@extend  %badge;
font-size:  24px;
}
```
3. Compilamos el sass a un archivo `style.css` y observamos en el navegador los resultados.
4. Cambiamos el color por `antiquewhite` y el background-color por `teal`.
5. Volvemos a compilar y observamos en el navegador. También si revisamos el código generado veremos lo siguiente:
```css
.badge-sm, .badge-md, .badge-xl {
  background-color:  teal;
  color:  antiquewhite;
  display: inline-block;
  padding: 4px;
  border-radius: 2px;
}

.badge-sm {
  font-size: 12px;
}

.badge-md {
  font-size: 16px;
}

.badge-xl {
  font-size: 24px;
}
```

### Ejercicio 2
**Contexto:**
Vamos a crear un set de clases para botones con los siguientes nombre y colores:
 - btn-primary: `background-color:#01c5c4`
 - btn-secondary: `background-color:#b8de6f`
 - btn-danger: `background-color:#d7385e`
 - btn-link: `background-color:transparent` y `color:#01c5c4`
 - btn-grad: `background-image:  linear-gradient(to  right, #1D2B64  0%, #F8CDDA  51%, #1D2B64  100%)`

Primero creamos un estilo de base para nuestros para el botón y cada clase extenderá de esta.
**Pasos:**
1. Creamos el archivo `index.html`,colocamos los siguientes en body:
```html
<button  class="btn-primary">Lorem, ipsum.</button>
<button  class="btn-secondary">Numquam, veniam.</button>
<button  class="btn-danger">Dolor, sequi!</button>
<button  class="btn-link">Reprehenderit, natus!</button>
<button  class="btn-grad">s, natus!</button>
```
2. Creamos un archivo `main.scss` y dentro colocamos un estilo base con los siguientes atributos:
```css
margin:  10px;
padding:  15px  45px;
text-align:  center;
text-transform:  uppercase;
color:  #ffffff;
box-shadow:  0  0  20px  #eee;
border-radius:  10px;
display:  block;
border:  none;
text-decoration:  none;
```
3. Creamos cada clase, usamos `@extend` para cada uno y por último le asignamos el color que corresponda.
4. Revisamos en el navegador que tenemos un set de botones y el css generado similar a este:
```css
.btn-primary, .btn-secondary, .btn-danger, .btn-link, .btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-box-shadow: 0 0 20px #eee;
          box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: none;
  text-decoration: none;
}
.btn-primary {
  background-color: #01c5c4;
}
.btn-secondary {
  background-color: #b8de6f;
}
.btn-danger {
  background-color: #d7385e;
}
.btn-link {
  color: #01c5c4;
}
.btn-grad {
  background-image: -webkit-gradient(linear, left top, right top, from(#1D2B64), color-stop(51%, #F8CDDA), to(#1D2B64));
  background-image: linear-gradient(to right, #1D2B64 0%, #F8CDDA 51%, #1D2B64 100%);
}
```
## Mixins
Los mixin nos permiten escribir menos código, ya que se envían parámetros y este los procesa a nuestra necesidad. Al pasarle parámetros distintos podremos obtener varias salidas personalizadas a nuestras necesidades, con un mismo mixin de base. Lo más interesante es que podemos producir un código más claro, más expresivo y sobre todo con mayor facilidad de mantenimiento.
### Sin argumentos
**Contexto**
Vamos a repetir el ejercicio 1 de Extend pero usando Mixins
**Pasos:**
1. Creamos el archivo `index.html`,colocamos los siguientes en body:
```html
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, sint repellendus? Dolores.<span  class="badge-sm">New</span></p>

<p>Magni quos quas voluptatibus ab, aut fuga perferendis dignissimos obcaecati adipisci molestias?<span  class="badge-md">New</span></p>

<p>Possimus tempora sed non voluptate porro debitis voluptates enim voluptatum dolor? Perspiciatis!<span  class="badge-xl">New</span></p>
 ```
 2. Creamos un archivo `main.scss` y dentro colocamos lo siguiente:
 ```sass
@mixin badge {
  background-color: gray;
  color: #fff;
  display: inline-block;
  padding: 4px;
  border-radius: 2px;
}
.badge-sm {
  @include badge;
  font-size: 12px;
}
.badge-md {
  @include badge;
  font-size: 16px;
}
.badge-xl {
  @include badge;
  font-size: 24px;
}

```
3. Compilamos el sass a un archivo `style.css` y observamos en el navegador los resultados.
4. Cambiamos el color por `antiquewhite` y el background-color por `teal`.
5. Volvemos a compilar y observamos en el navegador. También si revisamos el código generado veremos lo siguiente:
```css
.badge-sm {
  background-color: teal;
  color: antiquewhite;
  display: inline-block;
  padding: 4px;
  border-radius: 2px;
  font-size: 12px;
}
.badge-md {
  background-color: teal;
  color: antiquewhite;
  display: inline-block;
  padding: 4px;
  border-radius: 2px;
  font-size: 16px;
}
.badge-xl {
  background-color: teal;
  color: antiquewhite;
  display: inline-block;
  padding: 4px;
  border-radius: 2px;
  font-size: 24px;
}
```
### Ejercicio 2
**Contexto:**
Vamos a repetir el ejercicio 2 de Extend pero usando Mixins
**Pasos:**
1. Creamos el archivo `index.html`,colocamos los siguientes en body:
```html
<button  class="btn-primary">Lorem, ipsum.</button>
<button  class="btn-secondary">Numquam, veniam.</button>
<button  class="btn-danger">Dolor, sequi!</button>
<button  class="btn-link">Reprehenderit, natus!</button>
<button  class="btn-grad">s, natus!</button>
```
2. Creamos un archivo `main.scss` y dentro colocamos un estilo base con los siguientes atributos:
```css
margin:  10px;
padding:  15px  45px;
text-align:  center;
text-transform:  uppercase;
color:  #ffffff;
box-shadow:  0  0  20px  #eee;
border-radius:  10px;
display:  block;
border:  none;
text-decoration:  none;
```
3. Creamos cada clase, usamos `@include  btn;` para cada uno y por último le asignamos el color que corresponda.
4. Revisamos en el navegador que tenemos un set de botones y el css generado similar a este:
```css
.btn-primary {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-box-shadow: 0 0 20px #eee;
          box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: none;
  text-decoration: none;
  background-color: #01c5c4;
}

.btn-secondary {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-box-shadow: 0 0 20px #eee;
          box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: none;
  text-decoration: none;
  background-color: #b8de6f;
}

.btn-danger {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-box-shadow: 0 0 20px #eee;
          box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: none;
  text-decoration: none;
  background-color: #d7385e;
}

.btn-link {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-box-shadow: 0 0 20px #eee;
          box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: none;
  text-decoration: none;
  color: #01c5c4;
}

.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-box-shadow: 0 0 20px #eee;
          box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: none;
  text-decoration: none;
  background-image: -webkit-gradient(linear, left top, right top, from(#1D2B64), color-stop(51%, #F8CDDA), to(#1D2B64));
  background-image: linear-gradient(to right, #1D2B64 0%, #F8CDDA 51%, #1D2B64 100%);
}
```
### Ejercicio 3
**Contexto**
Analizar y comparar los ccs generados tanto por Extend y por Mixin
**Conclusiones**
- Cuando usamos Mixin el fragmento de código se genera por cada selector donde lo usamos, repitiendo código css.
- Cuando usamos Extend el fragmento de código se genera una única vez con todos los selectores que lo utilizan.
- Es recomendable usar Extend cuando compartimos fragmentos de estilos idénticos entre componentes y los Mixin para reutilizar fragmentos de estilos que puedan tener un resultado diferente en cada lugar donde los declaremos. Esto último se resulta más útil con la utilización de argumentos que veremos continuación. 

### Ejercicio 4
**Contexto**
Generar un Mixin `float`, que genere un efecto de flotado cuando se hace hover sobre el elemento.
**Ejemplo de uso**
```scss
.box {
  @include float;
}
```
**Código generado**
```css
.box {
  transition: .5s;
  cursor: pointer;
}

.box:hover {
  transform: translateY(-20px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}
```

- Opcionalmente pueden hacer más mixins de efectos hovers, como los de [esta página](https://ianlunn.github.io/Hover/) o alguna de las que estén en la sección de recursos.

### Con argumentos
Los argumentos nos permite cambiar el comportamiento del mixin cada vez que es llamado.
### Ejercicio 1
**Contexto**
Nos solicitan crear un Mixin que tome como parámetro  el ancho y el alto para que nos genere una caja con ese tamaño.
**Pasos:**
1. Creamos el archivo `index.html`,colocamos los siguientes en body:
```html
    <div class="box-1">1</div>
    <div class="box-2">2</div>
    <div class="box-3">3</div>
```
2.  Creamos un archivo `main.scss` y dentro colocamos lo siguiente:
```scss
@mixin box($width, $height){
    height: $height;
    width: $width;
    border: 2px dotted teal;
}

.box-1{
    @include box(150px,200px );
    background-color: cadetblue;
}

.box-2{
    @include box(2em,3em );
    background-color: crimson;
}

.box-3{
    @include box(15%,25% );
    background-color: gold;
}
```

3. Compilamos el sass a un archivo `style.css` y observamos en el navegador los resultados.
4. Volvemos a compilar y observamos en el navegador. También si revisamos el código generado veremos lo siguiente:
```css
.box-1 {
  height: 200px;
  width: 150px;
  border: 2px dotted teal;
  background-color: cadetblue;
}

.box-2 {
  height: 3em;
  width: 2em;
  border: 2px dotted teal;
  background-color: crimson;
}

.box-3 {
  height: 25%;
  width: 15%;
  border: 2px dotted teal;
  background-color: gold;
}
```

### Ejercicio 2
**Contexto**
Nos solicitan crear un Mixin `width`, que tome los parámetros `width`, `min-width`, `max-width` y agregue al elemento las propiedades de ancho correspondiente.
**Ejemplo de uso**

```scss
.box {
  @include width(100%, 500px, 1100px);
}
```

**Código generado**

```css
.box {
  width: 100%;
  min-width: 500px;
  max-width: 1100px;
}
```

### Con argumentos opcionales
### Ejercicio 1
**Contexto**
Nos solicitan crear un Mixin que tome como parámetro  el ancho y el alto para que nos genere una caja con ese tamaño. En caso no poseer el alto, se le asigné el ancho por defecto.Y si no ingresa el parámetro del ancho que sea de 150px
**Pasos:**
1. Creamos el archivo `index.html`,colocamos los siguientes en body:
```html
    <div class="box-completa">1</div>
    <div class="box-sinAlto">2</div>
    <div class="box-incompleta">3</div>
```
2.  Creamos un archivo `main.scss` y dentro colocamos lo siguiente:
```scss
@mixin box($width:150px, $height:$width){
    height: $height;
    width: $width;
    border: 2px dotted teal;
}

.box-completa{
    @include box(150px,200px );
    background-color: cadetblue;
}

.box-sinAlto{
    @include box(2em );
    background-color: crimson;
}

.box-incompleta{
    @include box();
    background-color: gold;
}
```
3. Compilamos el sass a un archivo `style.css` y observamos en el navegador los resultados.
4. Volvemos a compilar y observamos en el navegador. También si revisamos el código generado veremos lo siguiente:
```css
.box-completa {
  height: 200px;
  width: 150px;
  border: 2px dotted teal;
  background-color: cadetblue;
}

.box-sinAlto {
  height: 2em;
  width: 2em;
  border: 2px dotted teal;
  background-color: crimson;
}

.box-incompleta {
  height: 150px;
  width: 150px;
  border: 2px dotted teal;
  background-color: gold;
}
```

### Ejercicio 2
**Contexto**
Nos solicitan crear un Mixin `position`, que tome los parámetros `top`, `left`, `bottom`, `right`, y ponga el elemento con posición absoluta y le agrega las propiedades de posición correspondiente. El valor por defecto de los parámetros debe ser `auto`.

**Ejemplo de uso**

```scss
.box {
  @include position(30px, 10px);
}
```

**Código generado**

```css
.box {
  position: absolute;
  top: 30px;
  left: 10px;
  bottom: auto;
  right: auto; 
}
```

### Ejercicio 3 
**Contexto**
Nos solicitan crear un Mixin `flex`, que tome los parámetros `justify-content`, `alig-items`, `wrap` y `direction` y agregue al elemento las propiedades de flex correspondiente. El valor por defecto de los parámetros debe ser `flex-start`, `flex-start`, `no-wrap` y `row`, respectivamente.
**Ejemplo de uso**

```scss
.box {
  @include flex(center, center, wrap, column);
}
```

**Código generado**

```css
.box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
```
### Operadores de comparación
Nos permiten comparar valores en SASS para alterar el flujo de nuestro programa.
### Ejercicio 1
**Contexto**
Nos solicitan crear un Mixin que tome como parámetro  el ancho y el alto para que nos genere una caja con ese tamaño. En caso no poseer el alto, se le asigné el ancho por defecto.Y si no ingresa el parámetro del ancho que sea de 150px. Además si el alto es más alto o igual a 200px,El border cambia a `15px  double  yellow;`,si no se cumple revisar que el ancho no sea menor a 40px en este caso cambiar el border a `5px  groove  aquamarine`
**Pasos:**
1. Creamos el archivo `index.html`,colocamos los siguientes en body:
```html
    <div class="box-completa">1</div>
    <div class="box-sinAlto">2</div>
    <div class="box-incompleta">3</div>
```
2.  Creamos un archivo `main.scss` y dentro colocamos lo siguiente:
```scss
@mixin box($width:150px, $height:$width){
    height: $height;
    width: $width;
    @if($height >= 200px){
        border:15px  double  yellow;
    }@else if($width < 40px){
        border: 50px  groove  aquamarine;
    }@else{
        border: 2px dotted teal;
    }
}

.box-completa{
    @include box(150px,200px );
    background-color: cadetblue;
}

.box-sinAlto{
    @include box(30px );
    background-color: crimson;
}

.box-incompleta{
    @include box();
    background-color: gold;
}
```
3. Compilamos el sass a un archivo `style.css` y observamos en el navegador los resultados.
4. Volvemos a compilar y observamos en el navegador. También si revisamos el código generado veremos lo siguiente:
```css
.box-completa {
  height: 200px;
  width: 150px;
  border: 15px  double  yellow;
  background-color: cadetblue;
}

.box-sinAlto {
  height: 30px;
  width: 30px;
  border: 50px  groove  aquamarine;
  background-color: crimson;
}

.box-incompleta {
  height: 150px;
  width: 150px;
  border: 2px dotted teal;
  background-color: gold;
}
```
### Ejercicio 2
**Contexto**
Nos solicitan crear un Mixin `height`, que tome los parámetros `height`, `min-height`, `max-height` y agregue al elemento las propiedades de alto correspondiente. El valor por defecto de los parámetros debe ser `null`.
**Ejemplo de uso**

```scss
.box {
  @include height(100%, 500px, 1100px);
}
.box-1 {
  @include height(100%);
}

```

**Código generado**

```css
.box {
  height: 100%;
  min-height: 500px;
  max-height: 1100px;
}
.box {
  height: 100%;
}
```
