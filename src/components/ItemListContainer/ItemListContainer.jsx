/* eslint-disable react/prop-types */

import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    //creo un estado que me va almacenar el array de mis productos

    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const funtion = idCategoria ? getProductosPorCategoria : getProductos;

        funtion(idCategoria)
            .then(res => setProductos(res))

    }, [idCategoria])


    // useEffect ( () => {
    //     getProductos()
    //         .then(respuesta => setProductos(respuesta))
    //         .catch(error => console.log(error))
    // }, [])

    return (

        <div className="catalogoContenedor">
            <h2>Lista de productos</h2>
            <hr />
            <div className="itemList">
                <ItemList productos={productos} />
            </div>
        </div>
    )
}
