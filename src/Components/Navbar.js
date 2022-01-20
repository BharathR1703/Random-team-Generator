import React from 'react'
import './Navbar.css';
import {AiFillInfoCircle} from 'react-icons/ai';
import { Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Navbar-Container'>
            <Link to='/'>
            <h1>Random Team Generator</h1></Link>
            <Link to='/info'>
            <AiFillInfoCircle className='buttoninfo' size={23} color='white'/>
            </Link>
            </div>
        </div>
    )
}

export default Navbar
