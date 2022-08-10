import { useCartContext } from "../context/CartContext";
import {Link} from 'react-router-dom'
import './Cart.css'
import { getFirestore, collection, addDoc } from "firebase/firestore";

const CarroVacio=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="info">
                        Carro Vacío
                    </div>
                    <div className="cartfin">
                        <Link to='/'>
                            <button>Comprar ahora</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
const CarroLleno=()=>{
    const {cartList, vaciarCarrito,eliminarItem,precioTotal}=useCartContext() 

    const generarOrden=()=>{
        const order={}
        order.buyer={name:'rodrigo', phone:'123456789', email:'r@gmail.com'}
        order.items=cartList.map(product=>{
            return{
                id: product.id,
                name:product.nombre,
                price: product.precio,
                qty: product.cantidad
            }
        })
        order.total=precioTotal()

        const db=getFirestore()
        const queryOrders=collection(db, 'orders')
        addDoc(queryOrders, order)
        .then(resp=>alert("El id de su orden es: "+resp.id))
        vaciarCarrito()
    }

    return(
        <div className="container">
            {cartList.map(item=>
                <div className="item">
                    <div className="row">
                        <div className="col-3" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div className="imagenbox">
                                <img src={item.image}/>
                            </div>
                        </div>
                        <div className="col-3" style={{display:"flex", alignItems:"center"}}>
                            <div className="nombre">
                                {item.nombre}
                            </div>
                        </div>
                        <div className="col-2" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div className="caract">
                                $ {item.precio}
                            </div>
                        </div>
                        <div className="col-2" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div className="caract">
                                {item.cantidad}
                            </div>
                        </div>
                        <div className="col-2" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div className="cartfin">
                                <button onClick={()=>eliminarItem(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="row">
                <div className="col-6">
                    <div className="cartfin">
                        <button onClick={generarOrden}>Generar Orden</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="cartfin">
                        <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                </div>
            </div>
            
        </div>
        )
}
const Cart=()=>{
    const {cartList, vaciarCarrito}=useCartContext()  
    if(cartList.length===0){
        return <CarroVacio/>
    }
    else{
        return <CarroLleno/>
    }
    
}
export default Cart