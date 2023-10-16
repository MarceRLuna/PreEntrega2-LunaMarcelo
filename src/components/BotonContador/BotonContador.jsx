import { useState, useEffect } from "react";
import "./BotonContador.css";

// eslint-disable-next-line react/prop-types
export const BotonContador = ({ stock, inicial }) => {
  
  //Lógica del componente

  //uso del Hook useState: modifica el estado de la variable en el primer parámetro del array con la funcion setNombredelEstado que se coloca en el segundo parámetro del array.
  //Es decir, para el ejemplo, la función setContador es una función que modifica el estado de la variable contador
  //el dato que va dentro del paréntesis de useState(dato) es el estado inicial de la variable colocada en el primer parámetro del array
  const [contador, setContador] = useState(inicial);
  const [color, setColor] = useState ("black");

  //uso del Hook useEffect: ejecuta la función que le pasamos en el primer parámetro si el estado de la variable, 
  //que ponemos en el array de dependencias como segundo parámetro, cambia.
  useEffect(() => {
    
    document.title = `Contador: ${contador}`;

    contador > 5 ? setColor("red")  : setColor("black");

  }, [contador]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const agregarAlCarrito = () => {
    console.log(`Agregado ${contador} items`);
  };

  //Código JSX para renderizar el componente

  return (
    <div className="btnContenedor">
      <button className="btnResta" onClick={restar}> - </button>

      <div className="btnPantalla">{contador}</div>

      <button className="btnSuma" onClick={sumar}> + </button>

      <button onClick={agregarAlCarrito} style={{color: color}}> Agregar al carrito </button>
    </div>
  );
};
