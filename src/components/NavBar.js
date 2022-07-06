import React from 'react';
import './NavBar.css'
import logo from './multimedia/logorac.png';

function NavBar (){
    return(
        <div className="header">
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className="elemheader">
                <ul>
                    <li><a href=''>Nike</a></li>
                    <li><a href=''>Adidas</a></li>
                    <li><a href=''>Puma</a></li>
                    <li><a href=''>Reebok</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar