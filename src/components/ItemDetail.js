import React from "react";
import './ItemDetail.css'
import ItemCount from "./ItemCount";

const ItemDetail =({item})=>{
    const {nombre,precio,stock,image}=item
    console.log(item)
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
                    <div className="row">
                        <div className="col-12"style={{padding:"0", margin:"0"}}>
                            <ItemCount stock={stock}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{padding:'0'}}>
                            <div className="addcart">
                                    <button>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail