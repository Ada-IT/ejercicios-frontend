# Fetch
Recomendaciones antes de empezar los ejercicios:
 * Leer la documentación de las Api a utilizar. Analizar que información necesito y como accederla.
 * Reducir lo más posible las consultas a esta. Evitar hacer consultar repetidas o innecesaria.

### Ejercicio 1 - Zorro
api: [https://randomfox.ca/](https://randomfox.ca/)
Utilizando el témplate de `ejercicio Zorro`, se debe generar una imagen aleatoria cuando se apriete el botón.

### Ejercicio 2 - Shiba Inu
api: [https://shibe.online/](https://shibe.online/)
Utilizando el témplate de `ejercicio Shiba Inu`, se debe generar dos imágenes aleatoria cuando se apriete el botón.

### Ejercicio 3 - Si o NO
api: [https://yesno.wtf/api](https://yesno.wtf/api)
Utilizando el témplate de `ejercicio Si o NO`, se debe cambiar la etiqueta imagen por un gif y cambiar el texto por el resultado de la api cuando se apriete el botón.

### Ejercicio 4 - Foodish
api: [https://foodish-api.herokuapp.com/](https://foodish-api.herokuapp.com/)
Utilizando el témplate de `ejercicio Foodish`, cuando se apriete los diferentes botones se debe cambiar la etiqueta img por una imagen de dicha categoría.

### Ejercicio 5 - Punk Api
api: [https://punkapi.com/documentation/v2](https://punkapi.com/documentation/v2)
#### Creando Card
Utilizando el témplate de `ejercicio Foodish Card`, se debe generar una card nueva cuando se apriete el botón.

#### Creando Cards
Utilizando el témplate de `ejercicio Foodish Cards`, cuando se abre la página se debe renderizar un listado de cards.

#### Agregando Filters - minima cantidad de peticiones
Utilizando el témplate de `ejercicio Foodish Cards Filters`, cuando se abre la página se debe renderizar un listado de cards. Además se agregan 4 botones para filtrar por ABV(Alcohol by Volume). En los rangos de 0% a 5%, de 5.1% a 7.5%, de 7.6% a 50% y el último filtro debe mostrar todas las cervezas. Dada por la poca data que utiliza la Api se opta por guardar todos los datos y luego filtrarlos, de forma tal que la única petición que se realice a la Api sea la de la primera carga. 

#### Agregando Filters - minima cantidad de computos 
Repetir el ejercicio anterior, pero ahora cada vez que se haga click en unos de los filtros se debe hacer la peticion requerida.

### Ejercicio 6 - SocialDog
api: [http://my-json-server.typicode.com/matiasbenary/dbJsonDogs](http://my-json-server.typicode.com/matiasbenary/dbJsonDogs)

#### Creando Cards
Utilizando el témplate de `ejercicio SocialDog`, consumiendo los datos del endpoint `/dogs`  y usando de referencia la card del template crear una lista de cards.

#### Usando modal
Ahora cuando se haga click en una card este debe abrir el modal y mostrar la info del endpoint `dogs/:id/comments`,donde id correponde al id de la card clickeada.

### Ejercicio 7 - NewsApi
api: [https://newsapi.org/](https://newsapi.org/)
Para utilizar hay que crearse una cuenta,con esto obtendremos un apiKey necesario para hacer las consultas

#### Creando Cards
Utilizando el témplate de `ejercicio NewsApi`, consumiendo los datos del endpoint `/top-headlines?country=ar&category=technology&page=1&pageSize=12&apiKey=${apiKey}` y usando de referencia la card del template crear una lista de cards.

#### Crear un paginado
Agregar la variable globales que sean necesarias.Agregar el parametro `page` al endpoint,ej: `/top-headlines?country=ar&category=technology&page=1&pageSize=12&apiKey=${apiKey}`.Cuando se haga click en siguiente se debe avanzar una pagina, si esta en la ultima se debe deshabilitar.Por otro lado cuando se haga clien en anterior se debe retroceder una pagina,si esta en la primera pagina deberia se debe deshabilitar.Por

### Ejercicio 8 - Alquileres
api: [https://mockapi.io/clone/5fada5eb2ec98b001604891c](https://mockapi.io/clone/5fada5eb2ec98b001604891c)
Para utilizar hay que crearse una cuenta,y clonar el proyecto.

#### Creando la table
Utilizando el témplate de `ejercicio Alquileres`, consumiendo los datos del endpoint `/users` y usando de referencia la table del template crear una nueva table con los datos de la api.

#### Agregar usuarios
Cuando se haga click en el boton `agregar usuario` se debe abrir un modal.Luego de que el usuario lo complete y se haga click en guardar.Se debe usar endpoint `/users` con el metodo `POST`  para guardar los datos.Una vez echo esto se debe actualizar la tabla.

#### Actualizar usuarios
Cuando se haga click en el icono `edicion` sobre la tabla se debe abrir un modal para editar el usuario.Se puede usar el mismo modal de antes.Se debe usar endpoint `/users` con el metodo `PUT`  para editar el usuario.Una vez echo esto se debe actualizar la tabla.

#### Modificar usuarios
Cuando se haga click en el icono `eliminar` sobre la tabla se debe abrir un modal para eliminar ese usuario.Se debe usar endpoint `/users` con el metodo `DELETE`  para eliminar el usuario.Una vez echo esto se debe actualizar la tabla.




