import React from 'react';
import './NavBar.css'
import logo from './multimedia/logorac.png';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'

function NavBar (){
    return(
        <div className="headerbar">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="logo">
                            <Link to ='/'>
                                <img src={logo}/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                            <Link to ='/cart' style={{ textDecoration: 'none' }}>
                                <CartWidget />
                            </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className= "elemheader">
                            <ul>
                                <Link to='/category/nike'>
                                    <li>Nike</li>
                                </Link>
                                <Link to='/category/adidas'>
                                    <li>Adidas</li>
                                </Link>
                                <Link to='/category/puma'>
                                    <li>Puma</li>
                                </Link>
                                <Link to='/category/reebok'>
                                    <li>Reebok</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar