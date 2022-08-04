import React from "react";
import './ItemDetail.css'
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";

const ItemDetail =({item})=>{

    const {nombre,precio,stock,image}=item
    const {addToCart, cartList} = useCartContext()
    const agregar=(contador) => {
        addToCart({...item, cantidad: contador})
    }  
    return(
        <div className="carta">
            <div className="row">
                <div className="col-6">
                    <img src={image}/>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="nombre">
                                {nombre}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="precio">
                                ${precio}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="stock">
                                Stock: {stock}
                            </div>
                        </div>
                    </div>
                    <ItemCount stock={stock} agregar={agregar}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail