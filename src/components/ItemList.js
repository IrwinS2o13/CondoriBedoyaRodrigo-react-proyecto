import React from "react"
import Item from './Item'

import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList=({items})=>{
    return(
        <>
            {items.map((item)=><Item item={item} key={item.id}/>)}
        </>        
    )
}

export default ItemList
