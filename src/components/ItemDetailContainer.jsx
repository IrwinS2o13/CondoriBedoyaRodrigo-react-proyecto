import ItemDetail from './ItemDetail.js'
import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';
import {doc, getDoc, getDocs, collection, getFirestore,query,where} from 'firebase/firestore'

const ItemDetailContainer=()=>{
    const{itemid}=useParams()
    const[result,setResult]=useState([]);
    useEffect(()=>{
        const db=getFirestore()
        const queryProduct=doc(db,'items',itemid)
        getDoc(queryProduct)
        .then(resp=>setResult({id:resp.id, ...resp.data()}))

    },[])
   
    return(
        <div className='container'style={{paddingTop:'2rem'}}>
            <ItemDetail item={result}/>
        </div>
    )
}
export default ItemDetailContainer