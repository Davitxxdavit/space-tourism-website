import React from 'react'
import moonimg from '../assets/destination/image-moon.png';
import './Moon.css';


const Moon = () => {
  return (
    <div className='moon'>
       
        <img className='destination-item-img' src={moonimg} alt='#'/>
        <div className='content-moon'>
            <h2>MOON</h2>
            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <hr/>
            <div className='exp'>
                    <div className='exp-inner'>
                        <span>AVG. DISTANCE</span>
                        <p>384,400 KM</p>
                    </div>
                    <div className='exp-inner'>
                        <span>Est. travel time</span>
                        <p>3 DAYS</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Moon
