import {useState, createContext, useContext} from 'react'

const CartContext=createContext([]) 

export const useCartContext=()=>useContext(CartContext)


const CartContextProvider=({children})=>{
    const[cartList, setCartList]=useState([])
    const addToCart=(objProduct)=>{
        setCartList([objProduct])
    }
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider