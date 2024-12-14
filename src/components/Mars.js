import React from 'react'

import marsimg from '../assets/destination/image-mars.png';
const Mars = () => {
  return (
  
      <div className='moon'>
       
       <img className='destination-item-img' src={marsimg} alt='#'/>
       <div className='content-moon'>
           <h2>MARS</h2>
           <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
           <hr/>
           <div className='exp'>
                   <div className='exp-inner'>
                       <span>AVG. DISTANCE</span>
                       <p>225 MIL. KM</p>
                   </div>
                   <div className='exp-inner'>
                       <span>Est. travel time</span>
                       <p>9 MONTHS</p>
                   </div>
           </div>
       </div>
   </div>
   
  )
}

export default Mars
