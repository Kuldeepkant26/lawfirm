import React, { useState } from 'react'
import { WavyBackground } from '../components/wavy-background'
import ScrollStack from '../components/ScrollStack'
import SplashScreen from '../components/SplashScreen'

function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <ScrollStack></ScrollStack>
    </>
  )
}

export default Home
