# 🔨 Refactorizacion

## Ejercicios

### Ejercicio 1: Nombres adecuado

Identificar qué acción realiza la siguiente función, y ponerle un nombre más descriptivo, así como a su parámetro.

```js
const sal = (valor) => {
   alert(" Hola "  + valor + " ¿como estas? ")
}


sal("Juana")
```

### Ejercicio 2: Buenos condicionales.

En la siguiente función, mejorar el nombre del parámetro y el uso del condicional

```js
const esEmpleado = (bValue) => {
  if(bValue) {
    alert("La persona es empleado de la empresa")
  }

  if(!bValue) {
    alert("Esta persona no pertenece a la compañía")
  }
}
```

## Ejercicio 7: If and Else if

* Tenemos una función donde se retorna cual es la etapa en la que se encuentra segun la edad.
 se debe optimizar el codigo devolviendo lo que se requiere.
de
* Se debe utilizar de forma correcta If Else para obtener un codigo optimizado.


```js
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
```



## ejercico 8: If, Else If y Else.
* Tenemos una funcion donde se retornaran 1 de 3 resultados dependiendo de las mayusculas y minisculas de la oracion.
  * Requerimos que el nombre de la funcion sea descriptivo a su comportamiento. 
  * Utilizar correctamente If, Else If y Else.

```js
function info(cadena) {

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

info("OVNI = EL OBJETO VOLADOR NO ESTA IDENTIFICADO");
info("objeto volador no identificado...");
```

### Ejercico 9: Cálculo de sueldo

La función siguiente realiza el calculo de sueldo de los operarios de una planta,  pero tiene varios problemas:

   - malos nombres de parámetros y variables
   - uso de `let` en vez de `const`
   - hace muchas cosas

Mejorar el código para solucionar los problemas presentados.

```js
const calcular = (valor1, valor2, valor3, valor4, valor5, valor6) => {

   let sueldoSegunCategoriaAsignada = (cate) => {

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

   let jubilacion = (jub, cate) =< {
      if(!jub){
         return cate * 0.11;
      } else {
         return 0;
      }
    }

   let jub = jubilacion(valor4, cate);

   let anssal = (sueldoSegunCategoriaAsignada) => {
      return sueldoSegunCategoriaAsignada * 0.03;
   }

   desc1 = anssal(cate)

   let os = (sueldoSegunCategoriaAsignada) => {
      return sueldoSegunCategoriaAsignada * 0.03;
   }

   desc2 = os(cate)

   let valor = cate - jub - desc1 - desc2;
   
   return valor
}

calcular("Maria", "Paz", "operarioA", false, 8, 0)
```

  
