## Ejercicio 1: Refactoring, nombre, función y parametro.
* Creamos una funcion para saludar a nuestos nuevos alumnos
    * Requerimos que el nombre de la función sea descriptiva a su comportamiento. 
    * El parametro recibido es un nombre por lo que deberemos modificar la funcion por el mismo motivo del punto anterior.
    

function sal(valor){

alert(" Hola "  + valor + " ¿como estas? ")

}

sal("Juana")

## Ejercicio 2: Refactoring, nombre y función.
* Creamos una funcion para saber si la persona pertenece a la empresa o no.
    * Requerimos modificar la función y utilizar correctamente el condicional.


function esEmpleado(bValue) {
  if(bValue) {
    alert("La persona es empleado de la empresa")
  }

  if(!bValue) {
    alert("Esta persona no pertenece a la compañía")
  }
}


## Ejercicio 3: Operacion de numeros 
* Tenemos esta función que recibe como parametro dos numeros y una operacion a realizar la funcion debe retornar el resultado de esta operacion.
    * Verificar los nombres de los parametros de la funcion.
    * La funcion no esta retornando lo esperado.


function operacion(numero1, numero2, numero3){

  var numero1= numero1;
  var numero2= numero2;

  return (numero1, numero2, numero3);

}
operacion(5, 8, "+")



## Ejercicio 4:Refactoring, funcion. 
* Tenemos una funcion donde se debe retornar el mayor de dos numeros 
    * Verificar que la funcion retorne el resultado esperado.


    function alt(valor1, valor2 ) {

        if (valor1 > valor2 ){
            return valor2;
        } else {
            return valor2;
        }

    } 

     alt(120, 15);

## ejercicio 5 : Precio total. Refactoring, funcion y nombre.
* Se tiene una función que recibe un valor y calcula los impuestos y gastos de envio.
    * Se requiere que la funcion de calculo de impuesto (llamado) tenga un nombre que haga referencia a la accion realizada.
    * Los nombres de los parametros de la funcion "llamado" deben tener relacion con lo que recibe.


function cal(valor) {
  var impuestos = 1.16;
  var gastosEnvio = 10;
  return llamado (valor, impuestos, gastosEnvio);
}
function llamado(v1, v2, v3){

  return (v1 * v2 ) + v3;

}
cal(120)

## Ejercicio 6: Refactoring. Unificar funciones.
* Se tienen tres funciones que tienen un comportamiento similar.
    * Se deberá lograr ùnificar estas 3 funciones en una.
    * Podemos recibir el monto del impuesto por parámetro o un valor de tipo texto "iva", "iibb", "ig" y consultar a una función que nos traiga el valor para evitar errores de càlculo.

function calcularIva(valor){

  return valor* 1.21;
    
}

function calcularIIBB(valor)

  return valor * 1,40;

}

function calcularIG(valor){

  return valor * 1,35;

}


## Ejercicio 7: Refactoring, Edades 

* Tenemos una función donde se retorna cual es la etapa en la que se encuentra segun la edad.
 se debe optimizar el codigo devolviendo lo que se requiere.
de
* Se debe utilizar de forma correcta If Else para obtener un codigo optimizado.


function edades(edad){

  if(edad <  13 ){

    alert ("Es un niño");

  }else {
    if (edad  <  18 ){

      alert ("Es un adolescente");

    }else {
      if (edad <  27 ){

        alert ("es un adulto");

      }else {

        alert ("es un adulto mayor" );

      }
    }
  
  } 
}
 edades(78);




## ejercico 8: Funcion,refactorizacion, mayusculas y minisculas.
* Tenemos una funcion donde se retornaran 1 de 2  resultados dependiendo de las mayusculas y minisculas de la oracion.
  * Requerimos que el nombrede la funcion sea descriptivo a su comportamiento. 
  * Utilizar correctamente If Else.


function ovni(cadena) {

  var resultado;

  // Comprobar mayúsculas y minúsculas
  if(cadena == cadena.toUpperCase()) {
    resultado = " está formada sólo por mayúsculas";   
  }
 if(cadena !== cadena.toUpperCase()) {
    resultado = " está formada sólo por minúsculas";
  }else {
    resultado = " está formada por mayúsculas y minúsculas";
  }

  return resultado;
}

alert(info("OVNI = EL OBJETO VOLADOR NO ESTA IDENTIFICADO"));
alert(info("objeto volador no identificado..."));


 ## Ejercico 9: Calculo de sueldo
* Dada la función anterior, la cual realiza el calculo de sueldo de los operarios de una planta,  debemos refactorizar lo siguiente:
  * Acotar el nombre de la variable de sueldo por categoria
  * Crear funciones auxiliares y externas a la función actual
  *  Comentar que rol cumple cada función en el código
  * Las variables y funciones deben tener un nombre que hagan referencia a la acción. Por ejemplo: _obtenerDescuentoAnssal


calcular = function(valor1, valor2, valor3, valor4, valor5, valor6) {

    let sueldoSegunCategoriaAsignada = function(cate) {
        
        switch(cate) {

        case "operarioC":
        return 13000;
        break;
        case "operarioB":
        return 15000;
        break;
        case "operarioA":
        return 18000;
        break;
        default:
        return "0";
        break;
    }
    }

    let cate = sueldoSegunCategoriaAsignada(valor3);


    let jubilacion = function(jub, cate) {
        if(!jub){
            return cate * 0.11;
        }else {
            return 0;
        }
    }

    let jub = jubilacion(valor4, cate);

      let anssal = function(sueldoSegunCategoriaAsignada) {
        
      return sueldoSegunCategoriaAsignada * 0.03;
       
    }

    desc1 = anssal(cate)

     let os = function(sueldoSegunCategoriaAsignada) {
        
     return sueldoSegunCategoriaAsignada * 0.03;
       
    }

    desc2 = os(cate)

    let valor = cate - jub - desc1 - desc2;
   
    return `el sueldo neto de ${valor1} ${valor2} es de ${valor}`;

}

calcular("Maria", "Paz", "operarioA", false, 8, 0)



  