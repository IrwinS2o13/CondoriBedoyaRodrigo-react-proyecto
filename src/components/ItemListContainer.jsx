import React from 'react';

const ItemListContainer =({saludo})=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>
                        {saludo}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer