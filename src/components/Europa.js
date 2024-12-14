import React from 'react'
import europaimg from '../assets/destination/image-europa.png'
const Europa = () => {
  return (
   
    <div>
   <div className='moon'>
    
    <img className='destination-item-img' src={europaimg} alt='#'/>
    <div className='content-moon'>
        <h2>TITAN</h2>
        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
        <hr/>
        <div className='exp'>
                <div className='exp-inner'>
                    <span>AVG. DISTANCE</span>
                    <p>628 MIL. KM</p>
                </div>
                <div className='exp-inner'>
                    <span>Est. travel time</span>
                    <p>3 YEARS</p>
                </div>
        </div>
    </div>
</div>
 </div>
 
  )
}

export default Europa
