import React from 'react';
import './ItemCount.css'
import simbmas from './multimedia/simbmas.png'
import simbmenos from './multimedia/simbmenos.png'

import {useState} from 'react';

const ItemCount =({stock})=>{
    const[contador, refcontador]=useState(1);
    const aumentar=() => {
        if(contador<=stock-1){
            refcontador(contador+1);
        }else{
            
        } 
    }
    const disminuir=() => {
        if(contador>1){
            refcontador(contador-1);
        }
        else{

        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="marco">
                    <div className="row">
                        <div className="col-12">
                            <div className="texto">
                                <p>
                                    Prueba de contador
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="texto">
                                <p>
                                    Stock=10
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-4">
                                <section className="simb">
                                    <button><img src={simbmenos} className="countimg" onClick={disminuir}/></button>
                                    
                                </section>
                            </div>
                            <div className="col-4">
                                <section className="count">
                                    {contador}
                                </section>
                            </div>
                            <div className="col-4">
                                <section className="simb">
                                    <button><img src={simbmas} className="countimg" onClick={aumentar}/></button>
                                </section>
                            </div>
                    </div> 
                    </div>
                                       
                </div>
            </div>
        </div>    
    )
}

export default ItemCount