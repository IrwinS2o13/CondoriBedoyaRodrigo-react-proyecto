import React from "react";
import './Item.css'

const Item =({item})=>{
    const {nombre,precio,stock,image}=item
    return(
        <div className="carta">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12" style={{padding:'0'}}>
                            <img src={image} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{padding:'0'}}>
                            <div className="nombre">
                                {nombre}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{padding:'0'}}>
                            <div className="precio">
                                ${precio}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{padding:'0'}}>
                            <div className="stock">
                                Stock: {stock}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
    