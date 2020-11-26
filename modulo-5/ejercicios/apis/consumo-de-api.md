# Fetch

Recomendaciones antes de empezar los ejercicios:

- Leer la documentación de las API a utilizar. Analizar que información necesito y como accederla.
- Reducir lo más posible las consultas a esta. Evitar hacer consultar repetidas o innecesaria.

Cada ejercicio cuenta con una resolución, para que puedan verlos funcionando. Se indicara cuales no los posean.

### Ejercicio 1 - Zorro

**[API](https://randomfox.ca/)**

Utilizando el template de `ejercicio Zorro`, se debe mostrar una imagen aleatoria de un zorro cuando se apriete el botón.

### Ejercicio 2 - Gatites

**[API](https://docs.thecatapi.com/api-reference/images/images-search)**

Utilizando el template de `ejercicio Gatites`, se deben mostrar dos imágenes aleatoria de gatites cuando se apriete el botón.

### Ejercicio 3 - Si o NO

**[API](https://yesno.wtf/api)**

Utilizando el template de `ejercicio Si o NO`, se debe cambiar la etiqueta `img` por un gif y cambiar el texto por el resultado de la api cuando se apriete el botón.

### Ejercicio 4 - Foodish

**[API](https://foodish-api.herokuapp.com/)**

Utilizando el template de `ejercicio Foodish`, cuando se apriete los diferentes botones se debe cambiar la etiqueta `img` por una imagen de dicha categoría.

### Ejercicio 5 - Punk Api

**[API](https://punkapi.com/documentation/v2)**

#### Creando Card

Utilizando el témplate de `ejercicio Punk Api Card`, se debe generar una card nueva cuando se apriete el botón.

#### Creando Cards

Utilizando el témplate de `ejercicio Punk Api Cards`, cuando se abre la página se debe renderizar un listado de cards.

#### Agregando Filters - minima cantidad de peticiones

Utilizando el témplate de `ejercicio Punk Api Cards Filters`, cuando se abre la página se debe renderizar un listado de cards. Además se agregan 4 botones para filtrar por ABV (Alcohol by Volume). En los rangos de 0% a 5%, de 5.1% a 7.5%, de 7.6% a 50% y el último filtro debe mostrar todas las cervezas.

### Ejercicio 6 - SocialDog

**[API](http://my-json-server.typicode.com/matiasbenary/dbJsonDogs)**

Utilizando el template de `ejercicio SocialDog`, consumir los datos del endpoint `/dogs` y usar de referencia la card del template para crear un listado de cards.Al hacer click en una card se debe abrir el modal y mostrar la info del endpoint `dogs/:id/comments`, donde `id` correponde al id de la card clickeada.

### Ejercicio 7 - NewsApi

**[API](https://newsapi.org/)**

Para utilizar hay que crearse una cuenta, con esto obtendremos un **API KEY** necesario para hacer las consultas

Utilizando el template de `ejercicio NewsApi`, consumiendo los datos del endpoint `/top-headlines?country=ar&category=technology&page=1&pageSize=12&apiKey=${apiKey}` y usando de referencia la card del template crear una lista de cards.

#### Crear un paginado

Agregar la variable globales que sean necesarias.Agregar el parametro `page` al endpoint,ej: `/top-headlines?country=ar&category=technology&page=1&pageSize=12&apiKey=${apiKey}`.Cuando se haga click en siguiente se debe avanzar una pagina, si esta en la ultima se debe deshabilitar.Por otro lado cuando se haga clien en anterior se debe retroceder una pagina,si esta en la primera pagina deberia se debe deshabilitar.Por

### Ejercicio 8 - Alquileres

_No cuenta con una resolucion completa_

**[API](https://mockapi.io/clone/5fada5eb2ec98b001604891c)**

Para utilizar la API hay que crearse una cuenta, y clonar el proyecto.

#### Creando la table

Utilizando el témplate de `ejercicio Alquileres`, consumiendo los datos del endpoint `/users` y usando de referencia la table del template crear una nueva table con los datos de la api.

#### Agregar usuarios

Cuando se haga click en el boton `agregar usuario` se debe abrir un modal.Luego de que el usuario lo complete y se haga click en guardar.Se debe usar endpoint `/users` con el metodo `POST` para guardar los datos.Una vez echo esto se debe actualizar la tabla.

#### Actualizar usuarios

Cuando se haga click en el icono `edicion` sobre la tabla se debe abrir un modal para editar el usuario.Se puede usar el mismo modal de antes. Se debe usar endpoint `/users` con el metodo `PUT` para editar el usuario.Una vez echo esto se debe actualizar la tabla.

#### Modificar usuarios

Cuando se haga click en el icono `eliminar` sobre la tabla se debe abrir un modal para eliminar ese usuario.Se debe usar endpoint `/users` con el metodo `DELETE` para eliminar el usuario.Una vez echo esto se debe actualizar la tabla.
