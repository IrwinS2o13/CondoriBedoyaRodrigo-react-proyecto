import {useState, createContext, useContext} from 'react'

const CartContext=createContext([]) 

export const useCartContext=()=>useContext(CartContext)


const CartContextProvider=({children})=>{
    const[cartList, setCartList]=useState([])
    const addToCart=(objProduct)=>{
        if(cartList.some(x=>x.id===objProduct.id)){
            cartList.map((obj)=>{
                if (obj.id===objProduct.id){
                    const newcant=obj.cantidad+objProduct.cantidad
                    obj.cantidad=newcant
                }
            })
        }
        else{
            setCartList([
                ...cartList,
                objProduct
            ])
        }
        console.log(cartList)
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