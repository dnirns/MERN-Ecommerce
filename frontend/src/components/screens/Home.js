import React, { useState, useEffect } from 'react'

const heroImages = ['hero-image-2', 'hero-image-1', 'hero-image-3']

const Home = () => {
  const [hero, setHero] = useState(heroImages[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      handleHero()
    }, 7000)
  })

  const handleHero = () => {
    if (currentIndex === 0) {
      setHero(heroImages[1])
      setCurrentIndex(1)
    }
    if (currentIndex === 1) {
      setHero(heroImages[2])
      setCurrentIndex(2)
    }
    if (currentIndex === 2) {
      setHero(heroImages[0])
      setCurrentIndex(0)
    }
  }

  return (
    <div className='home-container'>
      <div className='hero-text'>
        <h1>föt</h1>
      </div>
      <div className='hero-container'>
        <div className={`hero ${hero}`} />
      </div>
    </div>
  )
}

export default Home
