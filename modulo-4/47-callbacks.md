## Ejercicio 1: Callbacks: Crear usuario
* Crearemos una función "crearUsuario" donde recibirá como argumento únicamente el callback.
* Esta función pedirá su nombre de usuario mediante un prompt.
    *  Una vez haya ingresado el nombre de usaurio, se ejecutara el callback que debe mostrar un mensaje al usuario que la creación ha sido exitosa. 

    const MensajeConfirmacion = () => alert("¡Se creo el usuario exitosamente!") // callback
 
    crearUsuario(MensajeConfirmacion) //Función


## Ejercicio 2: Creación usuario 2
* Crearemos una funcion donde recibira como argumento un callback  para validar el nombre recibido mediante un prompt. 
    * Este callback tomara un string como parametro y retornara true o false si es que el parametro pasa la validacion:
    
* Que el string no tenga espacios
* Que el string tenga más de un caractere
* Que el string no tenga números
    * El callback solo tiene que validar una de estas cosas.


## Ejercicio 3: Agregar EMAIL
* Crearemos un formulario con un input de tipo email y un botón de agregar email. Este disparará una función que pusheará a un arreglo los emails que se vayan introduciendo.
    * Esta función recibirá un callback y este a su vez recibirá como parámetro el email.
        * El callback deberá validar que no se haya introducido anteriormente el email como así también tiene un formato de este. 


## Ejercicio 4: Países por región
* crearemos un listado con los siguientes paises y una función que tome el valor seleccionado una vez finalizado esto se debe llamar a un callback para validar a que continente pertenece cada pais seleccionado.

    Paises = ["Argentina", "Estados Unidos", "Japón", "Australia"]


## Ejercicio 5: País existente
* Realizar una función que le permita al usuario ingresar un país mediante un prompt y enviarlo como parámetro al callback (Utilizar el array del punto anterior) .
* Esta funcion debera devolver una alerta mediante un popup para saber si el pais existe o no.


## Ejercicio 6: Tarea completada
* Crearemos  un campo de texto con un valor "cargando..." y al cabo de 5 segundos ese texto debe llamar a una funcion que actualide el texto a "Tarea realizada".


## Ejercicio 7: Bloqueo de acción
* Crearemos un botón que dispare una función con un timeout de 10 segundos, cuando se ejecute se debe deshabilitar el botón para no permitirle al usuario realizar esta acción, una vez transcurridos los 10 segundos mostraremos un popup de "Acción realizada" y volveremos a habilitar el botón para que el usuario pueda accionarlo nuevamente.


## Ejercicio 8: Cargando tabla
* Crearemos una tabla de usuarios que contendrá los siguientes campos.(Insertar al menos 6 registros.)
1. Nombre
1. Apellido
1. Email
1. Teléfono.
    * Crearemos un div que ocupe la totalidad de la tabla (ocultando esta) con un busy indicator (el mismo puede obtenerse googleando: Busy Indicator GIF). 

        * Crearemos una función con un timeout de 10 segundos y una vez transcurrido este tiempo debe ocultar el div con el busy indicator permitiendo visualizar los datos de la tabla.


## Ejercicio 9: Validacion de elementos dentro de un arreglo.
* Dado el siguiente arreglo realizaremos una función que reciba un callback como parametro, este deb validar si alguno de los elementos esta repetido.

    Num= [1, 3, 8, 11, 53, 2, 53, 8]


## Ejercicio 10: Validacion de Números primos
* Crear una funcion que reciba un callback como parametro y solicitarle a el usuario mediante un prompt que ingrese un numero y el callback debe validar si el numero ingresado es primo o no y mostrar un menssaje de alerta en pantalla.

        

        function callbackEsPrimo(numero){
            //casos especiales
    if (numero == 0 || numero == 1 || numero == 4) return alert("No es primo");
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return alert("No es primo");
        }

        // Si no se pudo dividir por ninguno de los de arriba, sí es primo
        return alert("Es primo")
        }
       


## Ejercicio 11: Abecedario
* Utilizaremos el siguiente array para mostrar en pantalla el abecedario completo letra por letra. Se debe visualizar letra por letra cambiando este cada 1 segundo, una vez llegado a la última letra debe finalizar la animación.
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]
* Debemos mostrarlo en el centro de la pantalla con un tamaño de Fuente de al menos 48px. 


## Ejercicio 12: Animación Loading
* Se debe crear un div padre con un ancho de 600px y un alto de 40px centrado y con un borde a elección que posea un div hijo con un color rojo sin ancho, pero con el mismo alto que su padre. En la parte inferior y centrado un texto que diga "Cargando..."
    * Utilizar una función interval para que vaya aumentando el ancho del div hijo hasta completar el ancho total de su div padre, una vez lo consiga, frenar su incremental y setear el texto en "Completado!".


## Ejercicio 13: Animación Div con Interval parte 2
* Mejoraremos la función del div con desplazamiento, ahora una vez que llegue al máximo de su margen izquierdo, se desplazará hacia abajo seteandole de la misma manera que el anterior, pero en su margen superior.
    * Una vez completado esto y se sitúe en el margen inferior derecho debe desplazarse hacia la derecha y posteriormente hacia arriba volviendo a su posición original.
