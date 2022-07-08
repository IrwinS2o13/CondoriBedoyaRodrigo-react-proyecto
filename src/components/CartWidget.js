import React from 'react';
import './NavBar.css'
import cart from './multimedia/cart.png';

const CartWidget =()=>{
    return(
        <div className="logo2">
            <img src={cart}/>
        </div>
    )
}

export default CartWidget