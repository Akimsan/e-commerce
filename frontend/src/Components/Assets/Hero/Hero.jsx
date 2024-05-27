import React from 'react'
import './Hero.css'
import hand_icon from '../hand_icon.png'
import arrow_icon from '../arrow.png'
import hero_image from '../hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
       <div className='hero-left'>
        <h2>New Arrivals Only</h2>
        <div>
            <div className='hand-hand-icn'>
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collection</p>
            <p>for evryone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow_icon} alt="" />
        </div>
       </div>
       <div className="hero-right">
        <img src={hero_image} alt="" />
       </div>
    </div>
  )
}