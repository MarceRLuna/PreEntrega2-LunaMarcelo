
import "./ItemDetail.css";

// eslint-disable-next-line react/prop-types
export const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {
  return (
    <div className="itemDetalle">
      <h3>{nombre}</h3>
      <p>Precio: $ {precio}</p>
      <h4>ID: {id}</h4>
      <p>Descripción: {descripcion}</p>
      <img src={img} alt={nombre} />
    </div>
  );
};
