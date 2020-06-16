## Clase 3) Introducción a GIT

### Ejercicio 1 - La consola

1. Usando la consola  
  a. navegá hasta la carpeta que prefieras, por ejemplos `"Mis Documentos"`.  
  b. creá una carpeta nueva, llamada `consola-ejercicio-1`.  
  c. navegá hacia esa carpeta, y creá dos carpetas más: `peliculas-por-ver` y `peliculas-vistas`.  
  d. navegá hacia `peliculas-por-ver`.  
  e. creá 3 archivos de texto (con extensión `.txt`) con nombres de películas.  
  f. mostrá en consola un listado de todos los archivos que tenés en la carpeta `peliculas-por-ver`.  
  g. borrá uno de estos archivos.  
  h. cambiale el nombre a uno de estos archivos (por otra película).  
  i. mové un archivo a la carpeta `peliculas-vistas.`  
  j. eliminá la carpeta `peliculas-por-ver`.  

### Ejercicio 2 - Commits

1. Usando la consola:  
  a. navegá hasta la carpeta que prefieras, por ejemplos `"Mis Documentos"`.  
  b. creá una carpeta nueva, llamada `git-ejercicio-2`.  
  c. navegá hasta la carpeta que recién creaste.  
  d. inicializá un repositorio vacío en dicha carpeta.  
  e. creá un nuevo archivo de texto en dicha carpeta, llamado `canciones-preferidas.txt`.
2. Abrí el archivo de texto que creaste con Visual Studio Code.
3. Escribí en el archivo de texto el título de una canción que te guste.
4. Usando la consola, agregá el archivo a un nuevo commit.
5. Commiteá los cambios realizados, poniendo como mensaje commit "Agrego primera canción".
6. Agregá 4 canciones más, repitiendo los pasos 3 a 5 (y cambiando el mensaje de cada commit).


### Ejercicio 3 - Subiendo los cambios

Volvé a repetir el ejercicio 2 (es tedioso, pero la práctica hace que se vuelva automático y te familiarices con los comandos). Esta vez, cuando crees el repositorio local, creá un repositorio remoto en GitHub y conectalo con tu repositorio local. Llamalo `git-ejercicio-3`. A diferencia del ejercicio 2, usá películas en vez de canciones. Y *cada vez que commitees un nuevo cambio*, subí los cambios a tu repositorio remoto haciendo un push.


### Ejercicio 4 - Viajando en el tiempo

Volvé a repetir el ejercicio 3, esta vez con un repositorio llamado `git-ejercicio-4`. En vez de películas, usá tus comidas favoritas. Cuando hayas subido las 5, volvé hacia atrás tus commits hasta cuando tenías solo dos comidas. Una vez que hiciste eso, agregá (commiteando y pusheando) dos comidas más.


### Ejercicio 5 - Pull

En grupo de a dos:

1. Creá un repositorio y subilo a GitHub, llamado `git-ejercicio-5-tu-nombre`. El repositorio debe tener un archivo de texto con un mensaje de presentación, por ejemplo: `"Hola, soy Ada!".
2. Pedile a tu compañera su repositorio y clonalo en tu computadora. **Ojo, tenés que clonarlo en una carpeta aparte, no adentro de la carpeta de tu propio repositorio** .
4. Una vez que ambas se clonaron el repositorio de su compañera, modificá *en tu propio repositorio* tu archivo de texto, mandándole un mensaje a su compañera. Por ejemplo, `"Hola Grace! Soy Ada. Un gusto conocerte"`.
5. Agregá, commitear y pushear el cambio realizado. **Ojo, si te acabás de clonar el repositorio de tu compañera, probablemente vas tener que navegar hasta la carpeta de tu repositorio**.
6. Cuando tu compañera te avisó que ya realizó el cambio y lo pusheó, desde la carpeta del repositorio de tu compañera, traete el cambio realizado con el comando `git pull`.  
