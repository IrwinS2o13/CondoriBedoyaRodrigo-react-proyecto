import React from 'react';
import './ItemCount.css'
import simbmas from './multimedia/simbmas.png'
import simbmenos from './multimedia/simbmenos.png'

import {useState} from 'react';
import {Link} from 'react-router-dom'

const ItemCount =({stock, agregar})=>{
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
    
    const InputCount=()=>{
    
        return(
            <>
                    <div className="row">
                        <div className="col-6" style={{padding:'0'}}>
                            <div className="cartfin">
                                <Link to='/cart'>
                                <button>Ir al Carrito</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-6" style={{padding:'0'}}>
                            <div className="cartfin">
                                <Link to='/'>
                                <button>Seguir comprando</button>
                                </Link>
                            </div>
                        </div>
                    </div>
             </>
        )       
    }
    const ButtonCount=({handleInter})=>{
        
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{display:"flex",justifyContent:"center"}}>
                        <div className="marco">
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
                <div className="row">
                    <div className="col-12" style={{padding:'0'}}>
                        <div className="addcart">
                            <button onClick={handleInter}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>  
            </>
        )
    }
    
    const[inputType, setInputype]=useState('button')
    const handleInter=()=>{
        setInputype('input')
        agregar(contador)
    }
    return(
        <div>
            {
                inputType==='button'?
                <ButtonCount handleInter={handleInter}/>
                :
                <InputCount/>
            }
        </div>
          
    )
}

export default ItemCount