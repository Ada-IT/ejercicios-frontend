# Sass: Fundamentos

## Variables

### Ejercicio 1 - Utilidad

**Contexto:**
Una variable nos permite repetir un valor sin estar copiando en todos lados, además nos permite la actualización en todos lo componentes que la utilicen.
Vamos a crear un [badge](https://getbootstrap.com/docs/4.5/components/badge/#contextual-variations), un [button](https://getbootstrap.com/docs/4.5/components/buttons/) y una [card](https://getbootstrap.com/docs/4.5/components/card/#card-styles)
**Pasos:**

1. Creamos el archivo `index.html` ,colocamos una card con un boton y un badge.
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
