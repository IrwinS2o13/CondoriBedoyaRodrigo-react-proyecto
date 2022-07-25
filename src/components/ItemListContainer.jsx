import React from 'react';
import ItemList from './ItemList'
import { useEffect,useState } from "react";
import Jordan1 from './multimedia/AJ1_2.png'
import Jordan2 from './multimedia/AJ1_3.png'
import Jordan3 from './multimedia/AJ1_4.png'
import adi1 from './multimedia/adi_1.png'
import adi2 from './multimedia/adi_3.png'
import adi3 from './multimedia/adi_4.png'
import reeb1 from './multimedia/reeb_1.png'
import reeb2 from './multimedia/reeb_2.png'
import reeb3 from './multimedia/reeb_4.png'
import puma1 from './multimedia/puma_2.png'
import puma2 from './multimedia/puma_3.png'
import puma3 from './multimedia/puma_4.png'
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () =>{
    const {categoryid}=useParams()
    console.log(categoryid)
    const productos=[
        {id:1,nombre: "Air Jordan 1 A", categoria:"nike", precio:500, stock: 10, image: Jordan1},
        {id:2,nombre: "Air Jordan 1 B", categoria:"nike", precio:450, stock: 10, image: Jordan2},
        {id:3,nombre: "Air Jordan 1 C", categoria:"nike", precio:520, stock: 10, image: Jordan3},
        {id:4,nombre: "Adidas A", categoria:"adidas", precio:520, stock: 10, image: adi1},
        {id:5,nombre: "Adidas B", categoria:"adidas", precio:520, stock: 10, image: adi2},
        {id:6,nombre: "Adidas C", categoria:"adidas", precio:520, stock: 10, image: adi3},
        {id:7,nombre: "Reebook A", categoria:"reebok", precio:520, stock: 10, image: reeb1},
        {id:8,nombre: "Reebook B", categoria:"reebok", precio:520, stock: 10, image: reeb2},
        {id:9,nombre: "Reebook C", categoria:"reebok", precio:520, stock: 10, image: reeb3},
        {id:10,nombre: "Puma A", categoria:"puma", precio:520, stock: 10, image: puma1},
        {id:11,nombre: "Puma B", categoria:"puma", precio:520, stock: 10, image: puma2},
        {id:12,nombre: "Puma C", categoria:"puma", precio:520, stock: 10, image: puma3}
    ];
    
    const[items,setItems]=useState([])

    const task = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productos)
        },2000)
    })

    useEffect(()=>{
        if(categoryid){
            task.then(res=>setItems(res.filter(cate=>cate.categoria===categoryid)))
        }
        else{
            task.then(res=>setItems(res))
        }
        
    },[categoryid])

    return(
        <div className='container' style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>            
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer