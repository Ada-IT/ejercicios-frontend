# Flexbox avanzado

## Ejercicios

Para los ejercicios 1 y 2, definí el **body** como contenedor flexible, agregale `flex-wrap: wrap` y dale a cada div el mismo alto fijo y un color de fondo distinto. A menos que el ejercicio lo indique, no uses `width` para definir el ancho, sino `flex-grow`.  

Para los ejercicios 3, 4 y 5, no te preocupes por el contenido y los estilos. Podés sustituir todo por cajas. Lo importante de ellos es poder replicar las disposición de los elementos respetando las consignas.

### 1) flex-grow

1. Agregá 3 `divs`. Hacé que el primero y el último tengan 250px de ancho usando `width`, y que el del medio ocupe el espacio restante usando `flex-grow`.
2. Agregá 4 `divs`. Hacé que el primero y el último tengan 200px de ancho usando `width`, y que los dos del medio ocupen cada uno la mitad del espacio restante, usando `flex-grow`.
3. Agregá 3 `divs`. Hacé que cada `div` ocupe un tercio del ancho de la pantalla.
4. Agregá 3 `divs`. Hacé que el primer `div` ocupe la mitad del ancho de la pantalla, y los 2 restantes un cuarto cada uno.
5. Agregá 3 `divs`. Hacé que el último `div` ocupe 60% del ancho de la pantalla, y los 2 primeros un 20% cada uno.

### 2) flex-basis

6. Agregá 5 `divs`. Dales a todos un `flex-basis` de 25%. Hacé que el último `div` ocupe el espacio restante.
7. Agregá 6 `divs`. Dales a todos un `flex-basis` de 25%. Hacé que el último `div` ocupe el espacio restante.
8. Agregá 6 `divs`. Dales a todos un `flex-basis` de 25%. Hacé los dos últimos ocupen la mitad del ancho de la pantalla cada uno.

### 3) Card de película

Crear una card de película con los siguientes datos: póster de la película, título, descripción, año y género

Por ejemplo:

![](https://i.ibb.co/z6hKMWp/Screen-Shot-2020-08-28-at-17-10-56.png)

- La card debe tener un ancho y un alto fijo.
- La card debe estar centrada con respecto al ancho y al alto de la pantalla.
- La imagen debe tener un ancho fijo.
- El contenedor de la información de la película debe ocupar el ancho disponible (con `flex-grow`) y el 100% del alto de la card.
- La descripción debe ocupar el alto disponible.

### 4) Layout

Replicar el siguiente layout:

![](https://i.ibb.co/0f0dzc8/Screen-Shot-2020-08-28-at-17-03-28.png)

- `body` debe ocupar todo el alto de la pantalla.
- Footer debe tener un alto fijo (p. ej. 300px), mientras que el 
- Menu debe tener un ancho fijo.
- El contenedor de Main y Aside debe ocupar el ancho restante.
- Main debe ocupar dos tercios del ancho de su contenedor.
- Aside debe ocupar un tercio del ancho de su contenedor.

### 5) Menú de opciones

El menú de opciones es utilizado para facilitarle la navegación al usuario. En este ejercicio armaremos un menú que contendrán un header con el avatar del usuario, el nombre y un icono de editar. Por otro lado, crearemos un contenedor para el menú de opciones, en esta se desplegará todo el listado de opciones. Y al final de este un contenedor footer donde irá la opción de “Cerrar sesión”.

La disposición de los elementos deberá verse similar a este:

![](https://i.ibb.co/y89xx8K/Screen-Shot-2020-08-28-at-17-40-59.png)

- `body` y el contenedor general deben ocupar todo el alto de la pantalla.
- El header y el footer deben tener un alto fijo. 
- Foto e Icono deben tener un ancho fijo.
- Nombre debe ocupar todo el ancho disponible restante.
- El contenedor del menú de opciones debe ocupar el espacio disponible.

