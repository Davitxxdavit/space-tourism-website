import React, { useState } from 'react'
import closeBTN from '../assets/shared/icon-close.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/shared/logo.svg';
import burgerimg from '../assets/shared/icon-hamburger.svg';

const Header = () => {


  const [burgerMenu, setBurgerMenu] = useState(false);

  function menuOn (){
    setBurgerMenu(!burgerMenu);
  }


  return (
    <div className='header'>
      <img className='logoimgs' src={logo} alt='#' />
      <hr /> 
       <img onClick={menuOn} className='burgerimg' src={burgerimg} alt='#'/>
      <div className='nav-links'>
        <NavLink
          style={({ isActive }) => ({
                 borderBottom: isActive? '3px solid white' : '',
                 padding: isActive? '33px 0 31px' : ''
                })}
         to="/home">00 HOME</NavLink>
        <NavLink 
        style={({ isActive }) => ({
                 borderBottom: isActive? '3px solid white' : '',
                 padding: isActive? '33px 0 31px' : ''
                })}
        to="/destination">01 DESTINATION</NavLink>
        <NavLink 
        style={({ isActive }) => ({
                 borderBottom: isActive? '3px solid white' : '',
                 padding: isActive? '33px 0 31px' : ''
                })}
        to="/crew">02 CREW</NavLink>
        <NavLink 
        style={({ isActive }) => ({
                 borderBottom: isActive? '3px solid white' : '',
                 padding: isActive? '33px 0 31px' : ''
                })}
        to="/technology">03 TECHNOLOGY</NavLink>
      </div>

               
        {burgerMenu ? <div className='nav-links-mobile'>
                <img onClick={menuOn} className='close-btn' src={closeBTN} alt='#'/>
        <NavLink
          style={({ isActive }) => ({
                 borderRight: isActive? '3px solid white' : '',
                })}
         to="/home">00 HOME</NavLink>
        <NavLink 
        style={({ isActive }) => ({
                borderRight: isActive? '3px solid white' : '',
                })}
        to="/destination">01 DESTINATION</NavLink>
        <NavLink 
        style={({ isActive }) => ({
                borderRight: isActive? '3px solid white' : '',
                })}
        to="/crew">02 CREW</NavLink>
        <NavLink 
        style={({ isActive }) => ({
                 borderRight: isActive? '3px solid white' : '',
                })}
        to="/technology">03 TECHNOLOGY</NavLink>
      </div> : <div className='off'/>}
      
    </div>
  )
}

export default Header
