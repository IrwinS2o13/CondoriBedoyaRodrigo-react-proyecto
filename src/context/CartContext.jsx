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
    }
    const vaciarCarrito=()=>{
        setCartList([])
    }
    const eliminarItem=(objelim)=>{
        setCartList(actual=>
            actual.filter(listado=>{
                return listado.id!==objelim
            })
            )
    }
    let acum=0
    const detectarCantidad=()=>{
        if(cartList.length===0){
            return "0"
        }
        else{
            cartList.map((obj)=>{
                if (obj.id>0){
                    acum=acum+1
                }
            })
            return acum
        }
    }
    let total=0
    const precioTotal=()=>{
        cartList.map((suma)=>{
            total=total+(suma.precio*suma.cantidad)
        })
        return total
    }
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            eliminarItem,
            detectarCantidad,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider