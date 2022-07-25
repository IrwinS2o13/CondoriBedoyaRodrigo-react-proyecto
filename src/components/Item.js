import React from "react";
import './Item.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Item =({item})=>{
    const {id,nombre,precio,stock,image}=item
    return(
        <div className="col-4" style={{justifyContent:"center", margin:"0", padding:"2rem"}}>
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
                    <div className="row">
                        <div className="col-12" style={{padding:'0'}}>
                            <div className="detalle">
                                <Link to={`/item/${id}`} style={{width:'100%'}}>
                                    <button>Ver detalle</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Item
    