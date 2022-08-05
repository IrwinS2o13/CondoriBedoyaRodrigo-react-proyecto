import React from 'react';
import './NavBar.css'
import cart from './multimedia/cart.png';
import { useCartContext } from '../context/CartContext';

const CartWidget =()=>{
    const {detectarCantidad}=useCartContext()
    const showit=detectarCantidad()
    return(
        <div className='container'>
            <div className='row' style={{display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
                <div className='col-1'style={{display:"flex", justifyContent:"center"}}>
                    <div className='textocart'>
                        {showit}
                    </div>
                </div>
                <div className='col-1' style={{display:"flex", justifyContent:"center"}}>
                    <div className="logo2">
                        <img src={cart}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
        
        
}

export default CartWidget