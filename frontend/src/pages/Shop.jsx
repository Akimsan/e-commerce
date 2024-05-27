import React from 'react'
import { Hero } from '../Components/Assets/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollection/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'


export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

