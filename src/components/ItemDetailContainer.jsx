import ItemDetail from './ItemDetail.js'
import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';

const ItemDetailContainer=()=>{
    const{itemid}=useParams()
    const[result,setResult]=useState([]);
    useEffect(()=>{
        fetch('/DATA.json')
        .then(respuesta =>respuesta.json())
        .then( resp=>setResult(resp.find(item=>item.id==itemid)))
        .catch(err=>console.log(err))
        
    },[])
   
    return(
        <div className='container'style={{paddingTop:'2rem'}}>
            <ItemDetail item={result}/>
        </div>
    )
}
export default ItemDetailContainer