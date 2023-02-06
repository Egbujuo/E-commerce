import React from 'react'
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import Cart from '../Pages/Cart';

const Navbar = ({cart}) => {
  return (
    <div className='navbar'>
      <Link to="/" className='link'>David Store</Link>
      <Link to="/cart" className='cart'>Cart:{cart.length}</Link>
    
    
    </div>
  ) 
}

export default Navbar