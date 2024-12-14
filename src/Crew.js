import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Crew.css';
const Crew = () => {
  return (
    <div className='crew'>
          <div className='crew-inner'>
              <div className='destination-title crew-destination-title'>
                  <span className='destination-title1'>02</span>
                  <span className='destination-title2'>MEET YOUR CREW</span>
              </div>
            
            <div className='crew-content'>
                <Outlet/>

                <div className='crew-links'>
                  <NavLink
                  style={({ isActive }) => ({
                  opacity: isActive? '1' : '0.4'
                })}
                   to='commander'><div className='crew-a-link'></div></NavLink>
                  <NavLink
                    style={({ isActive }) => ({
                    opacity: isActive? '1' : '0.4'
                    })}
                    to='specialist'><div className='crew-a-link'></div></NavLink>
                  <NavLink 
                    style={({ isActive }) => ({
                    opacity: isActive? '1' : '0.4'
                    })}
                    to='pilot'><div className='crew-a-link'></div></NavLink>
                  <NavLink
                    style={({ isActive }) => ({
                    opacity: isActive? '1' : '0.4'
                    })}
                    to='engineer'><div className='crew-a-link'></div></NavLink>
                </div>
            </div>
          </div>
     </div>
    
 
  )
}

export default Crew
