# Calculadora

### OBJETIVO
- Usando useState para creación y modificación de estado (state).


## Consigna

1. Comenzar nuevo proyecto de React con el comando `npx create-react-app calculadora`.

2. Te dejaremos un estilo de Css por si quiere usar esté o hacer el tuyo.


`````
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.calc-app{
  margin: 0 auto;
  margin-top: 40px;
  width: 256px;
  text-align: center;
}

.keypad{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
}

input[type='text']{
  height: 60px;
  width: 99%;
}

#clear{
  grid-column: 1/3;
  grid-row: 1;
}

#result{
  grid-column: 3/5;
  grid-row: 5;
}

`````

3. La calculadora debe poder hacer todas las operaciones básicas como, suma, resta, multiplicación, división.

5. Se debe poder borrar caractér por caractér con la tecla de `C`. 

6. Se debe poder eliminar todo el contenido del la alculadora con la tecla `clear`

7. Dejaremos una estructura de componente que puedes usar. o hacer la tuya.


````    <div className ="calc-app">
      <form>
        <input type="text" />
      </form>
      <div className="keypad">
        <button id="clear">Clear</button>
        <button id="backSpace">C</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>*</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>/</button>
        <button>0</button>
        <button>.</button>
        <button id="result">Result</button>
      </div>
    </div>

````


8. Para facilitar el manejo de las operaciones te recomendamos leer sobre [eval()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/eval) para qeu puedas usar algo así: `eval(result).toString())` 



