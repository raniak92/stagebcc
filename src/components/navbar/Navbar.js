import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'


import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1 className='nav-logo'>BCC</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='forma'><a href='#'>Nos formations</a>
                    <div className='nav-forma'>
                      <ul>
                        <li ><a href='#'>Web</a></li>
                        <li><a href='#'>Design</a></li>
                       <li> <a href='#'>Marketing</a></li>
                       </ul>
                    </div>                   
                    </li>
                    <li><a href='#'>Choisir vos horaires</a>
                    <div className='nav-hor'>
                      <ul>
                        <li ><a href='#'>Cour du soir</a></li>
                        <li><a href='#'>Cour du week-end</a></li>
                       </ul>
                    </div>  </li>
                    <li><a href='#'>En ligne</a></li>
                    <li><a href='#'>+216 00 000 000</a></li>
                </ul>
                <button className='btn'>S'inscrire</button>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar