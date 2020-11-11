# 🔨 Refactorizacion

## Ejercicios

### Ejercicio 1: Nombres adecuados

Identificar qué acción realiza la siguiente función, y ponerle un nombre más descriptivo, así como a su parámetro

```js
const sal = (valor) => {
   alert(" Hola "  + valor + " ¿como estas? ")
}


sal("Juana")
```

### Ejercicio 2: Buenos condicionales

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

## Ejercicio 3: Condicionales anidados

Mejorar el nombre de la siguiente función y simplificar los condicionales para evitar tanto anidado

```js
const temperatura = (grados) => {
  if (grados <  0 ){
    return "Frío"
  } else {
    if (grados  <  15 ) {
      return "Fresco"
    } else {
      if (grados <  23 ) {
        return "Templado"
      } else {
        return "Calor"
      }
    }
  } 
}

temperatura(33)
```

### Ejercicio 4: Cálculo de sueldo

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
