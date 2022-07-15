import React from 'react';
import Item from './Item';
import ItemList from './ItemList'
import { useEffect,useState } from "react";
import Jordan1 from './multimedia/AJ1_2.png'
import Jordan2 from './multimedia/AJ1_3.png'
import Jordan3 from './multimedia/AJ1_4.png'

const ItemListContainer =({saludo})=>{
    const productos=[
        {id:1,nombre: "Air Jrodan 1 A", precio:500, stock: 10, image: Jordan1},
        {id:2,nombre: "Air Jrodan 1 B", precio:450, stock: 10, image: Jordan2},
        {id:3,nombre: "Air Jrodan 1 C", precio:520, stock: 10, image: Jordan3},
    ];

    const[items,setItems]=useState([])

    const task = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productos)
        },2000)
    })

    useEffect(()=>{
        task.then(res=>setItems(res))
    },[])

    return(
        <><div className="container">
            <div className="row">
                <div className="col-12">
                    <p>
                        {saludo}
                    </p>
                </div>
            </div>
        </div>
        <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer