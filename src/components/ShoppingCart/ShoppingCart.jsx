
import "./ShoppingCart.css"
import carrito from "../../assets/carrito.png"

export const ShoppingCart = () =>{
    return(

        <div className='div-cart'>
            <img className='cart' src={carrito} alt="imagen carrito de compras" />
            <p className="contador">0</p>
        </div>

    )
}