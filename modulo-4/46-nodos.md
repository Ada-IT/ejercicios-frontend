## Ejercitacion Nodos.
 * Los ejercicios que vamos a ver a continuacion se desarrolaran en Nodos accediendo al DOM sin usar HTML.

## Ejercicio 1 : Creación nodo.
* Crear un nodo de tipo h1
    * Asignarle un texto "Ejercitación n 1"
    * Colocarle un color y una fuente a elección accendiendo desde el DOM.


## Ejercicio 2: Crear una lista 
1. Crear un elemento desde el DOM de tipo <ol>
    * Asignarle 3 etiquetas de tipo li
        * Le asignaremos los siguientes textos a las etiquetas:
         Home
         Nosotros
         Contacto

1. Replicar una lista a traves de Nodos similar a la siguiente 

 <ul> 
<li>Verduras </li>
<li>Garbanzos</li>
<li>Frutas</li>
    <ul>
     <li>Manzanas</li>
     <li>Naranjas</li>
     <li>Bananas</li>
     <li>Frutillas</li>
     </ul>
</li>

 1. Dado el siguiente arreglo iteraremos una lista con un boton que al clickear ira mostrando mes a mes hasta llegar a su final. Una vez finalizado comenzara de nuevo.

 let Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", Septiembre", "Octubre", "Noviembre", "Diciembre"] .

 

## Ejercicio 3: Crear nodos
* Crearemos una tabla con 3 columnas: Nombre, Teléfono y Dirección:
    * Le agregaremos 3 Filas con los siguientes datos:
        "Leonela", "1511224455", "Cabildo 2360"
        "Paulina", "1533997272", "San Juan 3380"
        "Marcos", "1456792921", "San Martin 135"
    * Accederemos a traves del DOM  a la segunda fila de la tabla modificando el nombre de "Paulina" por "Paula".
        


## Ejercicio 4: Eliminar Nodo
* Dado el siguiente HTML accediendo desde el DOM debemos eliminar el elemento de la lista cuyo texto es:"Julio"
 <ol>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Maria</li>
  <li>Elena</li>
</ol>


## Ejercicio 5: Cambiar estilos a los elementos anteriores
Haremos que el div padre del ejercicio anterior tenga un alto de 800 y un ancho de 600.
y el elemento hijo un margen de 10px y un color a elección.


## Ejercicio 6: Grilla para tatetí
* Debemos crear un div y ponerle la clase contenedor en HTML.
* Crear en la hoja de estilos la clase contenedor y asignarle un height y un width de 600px. Debe ser flexible y tiene   
 que contener un flex-wrap: wrap; .
* A este div le introduciremos una variable llamada  grilla, (en JavaScript) que sera una matriz de 3x3, y recorreremos cada item agregandole un contenedor div con una clase llamada tateti. 
* Luego en css a la clase tateti deben darle un alto y un ancho de 180px y un margen de 10px.


## Ejercicio 7: Adicionar elementos a un listado
Se debe crear un campo input con un botón de agregar o 
"+" y el texto que se ingrese en ese input, tras presionar el botón, se debe adicionar a una lista.


## Ejercicio 8: Grilla Dinámica
Debemos solicitarle al usuario mediante un prompt o input. Que ingrese 2 (x  y) valores numéricos. 
En base a ello crearemos una matriz, no pudiendo ser esta mayor a 8x8 (Realizar validación numérica y máxima).

Luego en base a estos valores crearemos mediante nodos div siendo x para los valores horizontales e y para los verticales:


