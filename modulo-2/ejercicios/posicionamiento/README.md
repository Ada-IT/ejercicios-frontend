# Posicionamiento

## Ejercicios

### 01 - Superponer elementos

- Crear en una carpeta un archivo index.html y un archivo style.css.
- En index.html copiar y pegar el [siguiente código](https://raw.githubusercontent.com/Ada-IT/ejercicios-frontend/master/modulo-2/ejercicios/posicionamiento/index.html).
- En style.css copiar y pegar el [siguiente código](https://raw.githubusercontent.com/Ada-IT/ejercicios-frontend/master/modulo-2/ejercicios/posicionamiento/styles.css), y agregar los estilos necesarios para que los elementos se posicionen de la siguiente manera:

![alt text](https://i.ibb.co/M66T8xY/Captura-de-pantalla-de-2020-09-11-09-31-53.png 'ejemplo de primer ejercicio')

### 02 - Superponer elementos II

Replicar los siguientes ejemplos posicionando los elementos como corresponde:

![](https://i.ibb.co/z7zkddk/Screen-Shot-2020-09-11-at-12-37-54.png)

Usar las siguientes medidas:

- **Cuadrado gris:** 100px x 100px
- **Cuadrado rojo:** 60px x 60px
- **Cuadrado verde:** 30px x 30px

### 03 - Usuarios en línea

Maquetar un contador que muestre la cantidad de usuarios en línea fijado en la parte inferior derecha de la pantalla. Ejemplo:

![](https://i.ibb.co/hLNcf06/Screen-Shot-2020-09-11-at-13-59-13.png)

### 04 - Notificaciones

Maquetar un header similar al siguiente, con notificaciones por encima de los íconos.

![](https://i.ibb.co/4s2jxr2/Screen-Shot-2020-09-11-at-13-31-12.png)

### 05 - Perfil de usuario

Maquetar una card de usuario que contenga: foto de perfil del usuario, foto de la bandera del país de origen del usuario, además de su nombre, su apellido y su profesión. La foto de la bandera debe posicionarse por encima de la foto de perfil. Ejemplo:

![](https://i.ibb.co/sKnp66N/Captura-de-pantalla-de-2020-09-11-09-36-45.png 'profile card')

### 06 - Card de producto

Maquetar una card de producto que contenga imagen, nombre y precio de producto. Por encima de la imagen, en la esquina superior izquierda, debe contener dos badges, una para un descuento, y otra para `Envío gratis`. Por encima de la imagen, en la esquina superior dercha, debe contener un ícono de un corazón. Ejemplo:

![](https://i.ibb.co/g971CFM/Screen-Shot-2020-09-11-at-13-47-34.png)

### 04 - Menú de navegación

Sobre la siguiente estructura HTML aplicar los estilos necesarios para lograr que:

- Los `li` queden en línea.
- El `ul` quede posicionado sobre el lado derecho del `nav`.
- El header quede de fijado en la parte superior de la pantalla y por encima de cualquier otro elemento si lo hubiera.

```html
<header>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Submenu</li>
      <li>Contact</li>
    </ul>
  </nav>
</header>
```

### 05 - Submenú

Al ítem Submenú del ejercicio anterior:

- Darle la clase "sub-menu" y agregarle como elemento hijo una nueva lista con la clase "sub-menu-oculto"
- La lista "sub-menu-oculto" debe estar oculta y debe tener 5 ítems
- Al hacer hover sobre la lista "sub-menu" debe mostrarse la lista "sub-menu-oculto"

Ejemplo:

![alt text](https://i.ibb.co/X8Kj2cr/Captura-de-pantalla-de-2020-09-11-09-42-06.png 'ejemplo de submenu')

### 06 - Registrar usuario

Maquetar un formulario de registro de usuario que pida nombre de usuario, email, contraseña y repetir contraseña. Cada input deberá tener un ícono delante del placeholder. Ejemplo:

![alt text](https://i.ibb.co/MM4pWnR/Captura-de-pantalla-de-2020-09-11-09-49-06.png 'ejemplo de formulario')

### 07 - Validar formulario

Al formulario anterior, agregar el atributo `required` a cada atributo. Hacer que aparezca sobre cada `input` [este ícono](https://fontawesome.com/icons/check?style=solid) a la derecha cuando dicho `input` está en el estado `valid`.

### 10 - Imagen con overlay

Poner una imagen con un overlay (es decir, un fondo semitransparente, usando `rgba`) y texto encima. Por ejemplo:

![](https://i.ibb.co/Xbwrc73/Screen-Shot-2020-09-11-at-14-18-10.png)

Para más ideas, pueden usar los ejemplo de la [siguiente página](https://tympanus.net/Development/HoverEffectIdeas/index.html) en el estado `hover`: NICE LYLY, WARM OSCAR, SWEET MARLEY, GLOWING RUBY, CHARMING ROXY, WILD ROMEO, STRANGE DEXTER, FREE SARAH, SILLY CHICO, FAITHFUL MILO, PASSIONATE JULIA, DARK KIRA, LONELY STEVE, FUNNY MING.

**NO REPLICAR EL EFECTO ANIMADO**, maquetarlo de forma estática tal cómo queda cuando se hace `hover` sobre los ejemplos. La clase que viene vamos a poder agregarles las transiciones.
