import React from 'react'
import titanimg from '../assets/destination/image-titan.png';
const Titan = () => {
  return (
    
      <div className='moon'>
       
       <img className='destination-item-img' src={titanimg} alt='#'/>
       <div className='content-moon'>
           <h2>TITAN</h2>
           <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
           <hr/>
           <div className='exp'>
                   <div className='exp-inner'>
                       <span>AVG. DISTANCE</span>
                       <p>1.6 BIL. KM</p>
                   </div>
                   <div className='exp-inner'>
                       <span>Est. travel time</span>
                       <p>7 YEARS</p>
                   </div>
           </div>
       </div>
   </div>
   
  )
}

export default Titan
