import React from 'react';
import ItemList from './ItemList'
import { useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
import {doc, getDoc, getDocs, collection, getFirestore,query,where} from 'firebase/firestore'

import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () =>{
    const {categoryid}=useParams()

    const[items,setItems]=useState([])  
    useEffect(()=>{
        if(categoryid){
            const db=getFirestore()
            const queryColleccion=collection(db,'items')
            const queryColleccionFiltrado=query(queryColleccion,where('categoria','==',categoryid)
            )
            getDocs(queryColleccionFiltrado)
            .then(resp=>setItems(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
        }
        else{
            const db=getFirestore()
            const queryColleccion=collection(db,'items')
            getDocs(queryColleccion)
            .then(resp=>setItems(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
        }
        
    },[categoryid])
    return(
        <div className='container' style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>            
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer