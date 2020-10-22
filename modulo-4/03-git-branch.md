# Git Branch

## Ejercicios

### Preparativos

Navegamos hasta la carpeta que prefieras para realizar los ejercicios, por ejemplos `"Mis Documentos"`

### Ejercicio 1 - Base - Creando, listando y Navegando branch

**Contexto:**
Nos toca crear una de lista de películas separadas por categorías usando git como sistema de versionado.Y una rama para los estrenos.

**Pasos:**

1. Creamos una carpeta llamada `"peliculas"` y creamos los archivo llamados `"terror.txt"` y `"comedia.txt"`
2. Agregamos a cada archivo txt un 3 películas.
3. Abrimos la consola y nos ubicamos sobre la carpeta dé `"peliculas"`
4. Iniciamos un repositorio y realizamos un commit
5. Creamos una nueva rama llamada `"estrenos"`
   > git branch estrenos
6. Listamos las ramas creadas
   > git branch
7. Nos cambiamos a la rama `"estrenos"`
   > git checkout estrenos
8. Volvemos a la rama `"master"`
   > git checkout master

### Ejercicio 2 - Unión de las ramas

**Contexto:**
Nos toca trabajar agregando películas de acción para esto nos piden que creemos una rama nueva y una vez terminado el trabajo agregarlo a producción.

**Pasos:**

1. Basándonos en el ejercicio 1, creamos una nueva rama llamada `"accion"` y nos cambiamos a esta.
2. Agregamos un archivo llamado `"accion.txt"` dentro colocamos 3 nombres de películas de acción
3. Hacemos un commit con el mensaje "Se agregó la lista de películas de acción"
4. Vamos a fusionar la rama `"master"` con `"accion"`
   a. Cambiamos a la rama `"master"`
   b. Hacemos un merge a la rama acción con un mensaje que diga "Se fusionó master con accion"
   > git merge accion -m "Se fusiono master con accion"
5. Revisamos que en la rama `"master"` hay un archivo llamado `"accion.txt"`

### Ejercicio 3 - Resolviendo conflictos

**Contexto:**
Nos toca trabajar agregando películas de románticas para esto nos piden que creemos una rama nueva, agreguemos 3 películas románticas al archivo `"romanticas.txt"` y 2 de comedia al archivo `"comedia.txt"`. Una vez terminado el trabajo debemos agregarlo a producción.Pero antes de fusionarlo nos piden de urgencia que agreguemos en producción 4 películas más en comedia.Y nos advierten que no debe haber películas repetidas.
**Pasos:**

1. Basándonos en el ejercicio 1, creamos una nueva rama llamada `"romanticas"` y nos cambiamos a esta.
2. Agregamos un archivo llamado `"romanticas.txt"` dentro colocamos 3 nombres de películas de románticas
3. Modificamos el archivo `"comedia.txt"` y agregamos 2 películas más.
4. Hacemos un commit con el mensaje "Se agregó la lista de películas de románticas y se modificó lista de películas de comedia"
5. Nos cambiamos a la rama master
6. Modificamos el archivo `"comedia.txt"` y agregamos 4 películas más.
7. Hacemos un commit con el mensaje "Se modificó las lista de películas de comedia"
8. Vamos a fusionar la rama `"master"` con `"romanticas"` con el mensaje "Se fusionó master con románticas"
9. Resolvemos el conflicto
10. Hacemos un commit

### Ejercicio 4 - Borrado de las ramas

**Contexto:**
Se nos pide eliminar la rama `"estrenos"` por que nos piden hacer una limpieza.
**Pasos:**

1. Basándonos en el ejercicio 1, listamos todas las ramas.Veremos que está la rama estrenos
2. Procedemos a borrarla
   > git branch -d estrenos
3. Listamos de vuelta las ramas para verificar que estreno se eliminó de forma satisfactoria

### Ejercicio 5 - Borrado forzado de las ramas

**Contexto:**
Se nos pide crear la rama `"sitcom"` para trabajar.Cuando terminamos nos advierten que es una categoría preferentemente de series y no de películas.Para no generar problemas se nos pide desechar toda la rama completa.
**Pasos:**

1. Basándonos en el ejercicio 1, creamos una nueva rama llamada `"sitcom"` y nos cambiamos a esta.
   > Sugerencia: git branch -d sitcom
2. Agregamos un archivo llamado `"sitcom.txt"` dentro colocamos 3 nombres de series de acción (Ej: Friends, Atypical, Modern Family, etc)
3. Hacemos un commit con el mensaje "Se agregó la lista de series sitcom"
4. Borramos la rama `"sitcom"`
   a. Nos cambiamos a la rama master
   b. Eliminamos de forma forzada la rama `"sitcom"`
   > git branch -D sitcom
5. Listamos las ramas para ver que `"sitcom"` no se encuentra en la lista

### Ejercicio 6 - Renombrando ramas

**Contexto:**
Se nos pide crear las ramas `"animacion"` y `"documental"` para trabajar. Una vez creada se nos pide que le cambiemos el nombre de `"animacion"` a `"anime"` y `"documental"` a `"documental-policial"`
**Pasos:**

1. Basándonos en el ejercicio 1, creamos dos nuevas ramas llamadas `"animacion"` y `"documental"`, luego nos cambiamos a `"animacion"`.
2. Vamos a cambiar el nombre a la rama de `"animacion"` a `"anime"`
   > git branch -m anime
3. También le cambiamos el nombre a la rama `"documental"` a `"documental-policial"`
   > git branch -m documental documental-policial

### Ejercicio 7 - Resolviendo conflictos con archivos eliminados

**Contexto:**
Se nos pide crear la rama `"terror"` para trabajar.En esta hay que solamente dejar los archivos de terror y agregar 1 películas más.Una vez terminado el trabajo agregarlo a producción, pero antes de fusionarlo en producción nos piden agregar un archivo `"indice.txt"` que contendrá todas las categorías y que agreguemos 1 película más a cada categoría.
En caso de que entre en conflicto, se nos pide que procedamos a borrar la categoría comedia.
**Pasos:**

1. Basándonos en el ejercicio 1, creamos una nueva ramas llamada `"terror"` y nos cambiamos a esta
2. Borramos todos los archivos menos a `"terror.txt"`. Agregamos la película.
3. Hacemos un commit con el mensaje "Se modificó terror.txt y se borró el resto"
4. Nos movemos a la rama de master
5. Agregamos el archivo `"indice.txt"` y dentro listamos las categorías.Además de agregar 1 película más a cada categoría.
6. Hacemos un commit con el mensaje "Se agregó el índice de categorías y modifico todas la categoría"
7. Fusionamos master con la rama terror
8. Hacemos un "`git status`" para ver el conflicto
9. Agregamos todos los archivos que correspondan y eliminamos a `"comedia.txt"`
   > git add -A
   > git rm comedia.txt
10. Hacemos un commit con el mensaje "Se fusionó correctamente master con terror"

### Ejercicio 9 - Integral

**Contexto:**
Estamos trabajando para una empresa de software y nos designan en un equipo de trabajo como el único programador para un pequeño desarrollo.
Nos piden realizar una página web con lista de películas.

**Aclaracion**: Lo importante es el contenido de los archivos y no el correcto funcionamiento del código.

**Tareas**

- **Primera entrega**
  Nos piden que creemos un archivo base html con un listado de 5 películas e Iniciemos un repositorio.
- **Segunda entrega**
  Nos piden que trabajemos en una rama llama `"dev"` por que la rama `"master"` está en producción y lo ven clientes.
  En adelante cada trabajo que realizaremos trabajaremos sobre la rama dev,a menos que se nos aclare .
  Por último nos piden separar las películas por categoría y agregarlo a producción.
- **Tercera entrega**
  Nos piden que agreguemos un archivo de lista de series y otro de estrenos.
- **Cuarta entrega**
  Nos avisan que hay un error en producción que las películas en el archivo base y estrenos deben estar ordenadas de forma alfabética, para solucionar esto nos piden movamos a producción y creemos una rama llamada hotfix. Arreglemos el problema y lo fusionemos con master.
- **Quinta entrega**
  Nos piden que agreguemos 3 películas más y que por la poca demanda que borremos el archivo de estrenos.Una vez terminado agregarlo a producción
- **Sexta entrega**
  Se nos une al equipo un miembro nuevo llamada Artemisa.Para poder diferencia quien hace cada cosa.Nos piden que le cambiemos el nombre a nuestra rama por nuestro nombre y creemos otra rama llamada Artemisa
- **Séptima entrega**
  A Artemisa se le pide agregar 5 series de comedia, pero como esta ocupado con algo más de urgencia, te piden que lo realices en la rama de ella.Además te solicitan que agregues 5 series de animación en tu rama.

Por último cuando este completo te piden que lo agregues a master.
