import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Technology.css';
const Technology = () => {
  return (
    <div className='tech'>
      <div className='tech-inner'>
              <div className='destination-title technology-title'>
                  <span className='destination-title1'>03</span>
                  <span className='destination-title2'>SPACE LAUNCH 101</span>
              </div>
            <div className='tech-cover'>
              <div className='tech-nav-links'>
                  <NavLink
                  style={({ isActive }) => ({
                  color: isActive ? '#0B0D17' : 'white',
                  backgroundColor: isActive ? 'white' : 'transparent'
                   })}
                   to='launch'>1</NavLink>
                  <NavLink
                  style={({ isActive }) => ({
                  color: isActive ? '#0B0D17' : 'white',
                  backgroundColor: isActive ? 'white' : 'transparent'
                   })}
                   to='spaceport'>2</NavLink>
                  <NavLink
                  style={({ isActive }) => ({
                  color: isActive ? '#0B0D17' : 'white',
                  backgroundColor: isActive ? 'white' : 'transparent'
                   })}
                   to='capsule'>3</NavLink>
              </div>
              <Outlet/>
            </div>
      </div>
    </div>
  )
}

export default Technology
