##Callbacks: Crear usuario
Crearemos una función crear usuario donde recibirá como argumento únicamente el callback.
Para pedirle al usuario su nombre de momento utilizaremos un prompt.
Llamaremos al callback al finalizar la función con un mensaje al usuario que indique que la creación ha sido exitosa. 

##Mejora: Creación usuario
Mejoraremos la función anterior, pasándole al callback como argumento el nombre recibido por el prompt.
Y aquí validaremos si el nombre de usuario contiene o no espacios en el mismo. De ser así le mostraremos un mensaje de error, caso contrario el mensaje que anteriormente habíamos definido. 

##Agregar EMAIL
Crearemos un formulario con un input de tipo email y un botón de agregar email. Este disparará una función que pusheará a un arreglo los emails que se vayan introduciendo.

Esta función recibirá un callback y este a su vez recibirá como parámetro el email.

El callback deberá validar que no se haya introducido anteriormente el email como así también tiene un formato de este. 


##Paises por región
Crearemos un select conde el usuario pueda seleccionar entre 3 regiones:

LA (Latino América)
NA (Norte América)
AS (Asia)

Esto llamará a un callback que buscará la región en el siguiente arreglo y retornará un arreglo con los países (únicamente) correspondientes a la región seleccionada. 

[{pais: "Argentina", region: "LA"},{pais: "México", region: "NA"},{pais: "Estados Unidos", region: "NA"},{pais: "Brasil", region: "LA"},{pais: "Chile", region: "LA"},{pais: "Perú", region: "LA"},{pais: "Bolivia", region: "LA"},{pais: "China", region: "AS"},{pais: "Georgia", region: "AS"},{pais: "Rusia", region: "AS"},{pais: "Singapur", region: "AS"},{pais: "Vietnam", region: "AS"}]

##País existente
Realizar una función que le permita al usuario ingresar un país mediante un prompt y enviarlo como parámetro al callback (Utilizar el array del punto anterior) y mostrar un popup para saber si el país existe o no en el mismo. 


##Tarea completada
Crearemos un campo texto con un valor "cargando..." y al cabo de 5 segundos ese texto debe actualizarse a "tarea realizada".

##Bloqueo de acción
Crearemos un botón que dispare una función con un timeout de 10 segundos, cuando se ejecute debe grisear el botón para no permitirle al usuario realizar esta acción, una vez transcurridos los 10 segundos mostraremos un popup de "Acción realizada" y volveremos a habilitar el botón para que el usuario pueda accionarlo nuevamente.

##Cargando tabla
Crearemos una tabla de usuarios que contendrá los siguientes campos.
Nombre
Apellido
Email
Telefono.

Insertar al menos 6 registros.

Crearemos un div que ocupe la totalidad de la tabla (ocultando esta) con un busy indicator (el mismo puede obtenerse googleando: Busy Indicator GIF). 

Crearemos una función con un timeout de 10 segundos y una vez transcurrido este tiempo debe ocultar el div con el busy indicator permitiendo visualizar los datos de la tabla.

##Animación Div con Interval
Se debe crear un div padre con un alta y ancho de 800px y un div hijo con un color a elección con un ancho y un alto de 100 px.
Crear una función interval que cada 100ms se eleje de su margen izquierdo 10px. Siempre y cuando no supere un total de 700px de dicho margen.

##Abecedario
Utilizaremos el siguiente array para mostrar en pantalla el abecedario completo letra por letra. Se debe visualizar letra por letra cambiando estas cada 1 segundo, una vez llegado a la última letra debe finalizar la animación.
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]
Debemos mostrarlo en el centro de la pantalla con un tamaño de Fuente de al menos 48px. 

##Animación Loading
Se debe crear un div padre con un ancho de 600px y un alto de 40px centrado y con un borde a elección que posea un div hijo con un color rojo sin ancho, pero con el mismo alto que su padre. En la parte inferior y centrado un texto que diga "Cargando..."
Utilizar una función interval para que vaya aumentando el ancho del div hijo hasta completar el ancho total de su div padre, una vez lo consiga, frenar su incremental y setear el texto en "Completado!".

##Animación Div con Interval parte 2
Mejoraremos la función del div con desplazamiento, ahora una vez que llegue al máximo de su margen izquierdo, se desplazará hacia abajo seteandole de la misma manera que el anterior, pero en su margen superior.
Una vez completado esto y se sitúe en el margen inferior derecho debe desplazarse hacia la derecha y posteriormente hacia arriba volviendo a su posición original.
