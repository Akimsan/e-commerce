import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-div">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviws(122)</div>
            </div>
        <div className="descriptionbox-description">
            <p>Certainly! Crafting an effective About Us page for your e-commerce website is crucial. 
               It’s an opportunity to build trust, share your brand story, and connect with your audience.
               Let’s dive into creating a well-written paragraph for your e-commerce About Us page:
               About Us: Crafting Unique Shopping Experiences
               we’re more than just an online store. We’re a community of passionate individuals who believe in
               the power of exceptional products and outstanding service.</p>
               <p> Here’s a glimpse into our storyFounded in [Year], [Your Brand Name] emerged from a desire to redefine online shopping. Frustrated by impersonal transactions and lackluster experiences, our founders set out to create a platform that celebrates uniqueness and authenticity.
                Our journey began with a simple question: “What if shopping could be an adventure?”
                From humble beginnings, we’ve grown into a vibrant marketplace where quality meets creativity.
               </p>
        </div>
       </div>
    </div>
  )
}

