import ItemDetail from './ItemDetail.js'
import { useEffect,useState } from "react"

const ItemDetailContainer=()=>{
    
    const[result,setResult]=useState([]);
    useEffect(()=>{
        fetch('/DATA.json')
        .then(respuesta =>respuesta.json())
        .then( resp=>setResult(resp))
        .catch(err=>console.log(err))
        
    },[])
            
    return(
        <div>
            {result.map((item)=><ItemDetail item={item} key={item.id}/>)}
        </div>
    )
}
export default ItemDetailContainer