
// eslint-disable-next-line react/prop-types
export const ItemDetail = ({id, nombre, precio, img}) => {

    return (
        <div>
            <h3>Nombre: {nombre}</h3>
            <p>Precio: $ {precio}</p>
            <h4>ID: {id}</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quod ipsam? Autem magni hic quaerat quod quibusdam possimus maxime veritatis quas, amet neque quis necessitatibus error ipsam natus quam dolores!</p>
            <img src={img} alt={nombre} />
        </div>
    )
}
