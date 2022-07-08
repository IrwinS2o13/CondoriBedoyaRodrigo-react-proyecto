import React from 'react';
import './NavBar.css'
import logo from './multimedia/logorac.png';
import CartWidget from './CartWidget';

function NavBar (){
    return(
        <div className="headerbar">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className="col-6">
                            <CartWidget />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className= "elemheader">
                            <ul>
                                <li><a href=''>Nike</a></li>
                                <li><a href=''>Adidas</a></li>
                                <li><a href=''>Puma</a></li>
                                <li><a href=''>Reebok</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar