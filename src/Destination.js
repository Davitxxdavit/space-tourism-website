import React from 'react'
import './Destination.css'
import { NavLink, Outlet } from 'react-router-dom';


const Destination = () => {
  return (
    <div className='destination'>
        <div className='destination-inner'>
            <div className='destination-title'>
                <span className='destination-title1'>01</span>
                <span className='destination-title2'>PICK YOUR DESTINATION</span>
            </div>
            <div className='destination-content'>
              <div className='destination-nav-links'>
                <NavLink style={({ isActive }) => ({
                  borderBottom: isActive? '2px solid white' : 'none',
                  color: isActive? 'white' : '#D0D6F9'
                })}
                 to='moon'
                 >MOON</NavLink>
                <NavLink 
                style={({ isActive }) => ({
                  borderBottom: isActive? '2px solid white' : 'none',
                  color: isActive? 'white' : '#D0D6F9'
                })}
                 to='mars'>MARS</NavLink>
                <NavLink 
                style={({ isActive }) => ({
                  borderBottom: isActive? '2px solid white' : 'none',
                  color: isActive? 'white' : '#D0D6F9'
                })}
                to='europa'>EUROPA</NavLink>
                <NavLink 
                style={({ isActive }) => ({
                  borderBottom: isActive? '2px solid white' : 'none',
                  color: isActive? 'white' : '#D0D6F9'
                })}
                to='titan'>TITAN</NavLink>
              </div>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Destination
