# Introducción a GIT

## Ejercicios

### Ejercicio 1 - La consola

1. Usando la consola:  
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

Volvé a repetir el ejercicio 2 (es tedioso, pero la práctica hace que se vuelva automático y te familiarices con los comandos). Esta vez, cuando crees el repositorio local, creá un repositorio remoto en GitHub y conectalo con tu repositorio local. Llamalo `git-ejercicio-3`. A diferencia del ejercicio 2, usá películas en vez de canciones. Y _cada vez que commitees un nuevo cambio_, subí los cambios a tu repositorio remoto haciendo un push.

### Ejercicio 4 - Viajando en el tiempo

Volvé a repetir el ejercicio 3, esta vez con un repositorio llamado `git-ejercicio-4`. En vez de películas, usá tus comidas favoritas. Cuando hayas subido las 5, volvé hacia atrás tus commits hasta cuando tenías solo dos comidas. Una vez que hiciste eso, agregá (commiteando y pusheando) dos comidas más.

### Ejercicio 5 - Pull

En grupo de a dos:

1. Creá un repositorio y subilo a GitHub, llamado `git-ejercicio-5-tu-nombre`. El repositorio debe tener un archivo de texto con un mensaje de presentación, por ejemplo: `"Hola, soy Ada!".
2. Pedile a tu compañera su repositorio y clonalo en tu computadora. **Ojo, tenés que clonarlo en una carpeta aparte, no adentro de la carpeta de tu propio repositorio** .
3. Una vez que ambas se clonaron el repositorio de su compañera, modificá _en tu propio repositorio_ tu archivo de texto, mandándole un mensaje a su compañera. Por ejemplo, `"Hola Grace! Soy Ada. Un gusto conocerte"`.
4. Agregá, commitear y pushear el cambio realizado. **Ojo, si te acabás de clonar el repositorio de tu compañera, probablemente vas tener que navegar hasta la carpeta de tu repositorio**.
5. Cuando tu compañera te avisó que ya realizó el cambio y lo pusheó, desde la carpeta del repositorio de tu compañera, traete el cambio realizado con el comando `git pull`.

---

## Ejercicio - Tienda

Se desea llevar registro de la lista de compras,para esto vamos a usar git como sistema de control de versiones.

### Creación de lista

1. Creamos una carpeta con el nombre que preferamos.Ej: Compras
2. Creamos un archivo con el nombre lista con extención `txt`.
3. Abrímos el archivo de texto que creaste con Visual Studio Code.
4. Agregamos 5 elementos y guardamos.

Esto representaria la carpeta y los archivo de nuestro proyecto.

### Iniciando un repositorio

1. Abrimos la consola y navegamos hasta la carpeta que habíamos creado.
2. Inicializamos git en nuestro proyecto.Para esto usamos el comando `git init`.
3. Revisamos que se agrego un archivo llamado `.git`.
4. Ejecutar el comando `git status`,si esta todo bien nos deberia decir que no hay commits todavia y que estamos en la rama master.

### Primer commit - inicializacion del proyecto

1. Vamos a elegir que archivos voy a commitear(guardar en el repo) para esto usamos uno de los comando siguientes (elegir una opción):
   - `git add -A`: Esto me agrega todos los archivo de mi proyecto.
   - `git add .`: Tambien me agrega todos los archivo de mi proyecto.
   - `git add lista.txt`: Puedo optar por seleccionar los archivos que voy a commitear,para esto agrego el nombre del archivo.Y si es mas de uno lo puedo separar con un espacio.
2. Ejecutamos el comando `git status`,para ver los archivos agregados y/o modificados que no estan commitearon todavía.
3. Ahora vamos a commitear,para esto ejecutamos el comando `git commit -m "Este es mi primer commit"`.Donde -m es para agregar un mensaje que esta entre comillas.

### Segundo commit - agregando archivos nuevos

1. Creamos un archivo llamado `ingredientesParaTorta.txt`
2. Lo editamos y agregamos 5 ingredientes. Por último los guardamos.
3. Agregamos el archivo usando `git add ingredientesParaTorta.txt`.
4. Usamos el comando `git status`,para corroborar que esta agregado el archivo `ingredientesParaTorta.txt` para ser commiteado.
5. Hacemos un commit ejecutamos el comando `git commit -m "Se agrego la lista de ingredientes para hacer la torta"`.

### Modificacion de lista

1. Modificamos el archivo `lista.txt` y agregamos al final 5 items mas.
2. Modificamos el archivo `ingredientesParaTorta.txt` borramos todos los ingredientes y colocamos otros nuevos.
3. Agregamos los archivos al staging area(Lugar donde seleccionan los archivos a commitear),para esto ejecutamos el comando `git add -A`.
4. Hacemos un commit ejecutamos el comando `git commit -m "Se modificaron todas las listas"`.

### Ver lista de commits

1. Ejecutamos el comando `git log`,Esto nos desplegara todos los commits que realizamos hasta el momento en forma de lista.Un solo commit se vería de esta forma:

```
commit 95208ad0d81154aa4503d32f170775b90fb576b1 (HEAD -> master, origin/master, origin/HEAD)
Author: Pepito<pepito@gmail.com>
Date:   Wed Sep 16 20:49:53 2020 -0300

    Se agrego la lista de ingredientes para hacer la torta
```

donde `95208ad0d81154aa4503d32f170775b90fb576b1` es el hash del commit

### Viajar en el tiempo

Ahora queremos ver los ingredientes originales de la torta.

1. Vamos a ejecutar `git log` para ver los commits que realizamos.
2. Copiamos el hash del commit `Se agrego la lista de ingredientes para hacer la torta`.
3. Vamos a ejecutar `git checkout hash del commit`,donde el hash del commit es que copiamos.Por ejemplo seria algo como `git checkout 95208ad0d81154aa4503d32f170775b90fb576b1`.Esto nos permite ver los archivos como estaban en ese commit.
4. Una vez revisados los archivos vamos a volver a la última modificación,para esto ejecutamos `git checkout master`

## Trabajemos en equipo

Trabajamos en un grupo de dos:

1. Creamos un repositorio llamado `controlDeLista` en gitHub y subimos el proyecto ahí.Seguir los pasos detallados en Github.
2. Le pedimos a nuestra compañera su repositorio y lo clonamos,para esto usamos el comando `git clone linkDelRepo`.Donde el linkDelRepo aparece en un botón que dice code.

### Subir actualización en el repositorio - push

1. Agregamos otro archivo llamado `listaCompartida.txt` y guardamos nuetro nombre y 3 items

```
Pepito: Chocolate,Pizza,Ravioles.
```

2. Agregamos y hacemos un commit
3. Ahora para actualizar el repositorio hacemos un `git push origin master`,donde master es la rama que estamos ubicados.
4. Si revisamos GitHub vamos a ver nuestro archivo que agregamos.

### Actualizar repositorio - pull request

1. Una vez que nuestra compañera completo el paso anterior voy actualizar mi repositorio local,para esto ejecutamos el comando `git pull origin master`.Esto me actualizara mi repositorio
