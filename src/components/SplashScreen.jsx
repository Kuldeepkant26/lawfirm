import React, { useState, useEffect } from 'react'
import '../css/SplashScreen.css'

function SplashScreen({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true)
    const [animationPhase, setAnimationPhase] = useState('loading') // loading, revealing, fadeOut

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setAnimationPhase('revealing')
        }, 1500)

        const timer2 = setTimeout(() => {
            setAnimationPhase('fadeOut')
        }, 3000)

        const timer3 = setTimeout(() => {
            setIsVisible(false)
            onComplete()
        }, 3800)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
        }
    }, [onComplete])

    if (!isVisible) return null

    return (
        <div className={`splash-screen ${animationPhase}`}>
            {/* Background Effects */}
            <div className="splash-background"></div>
            
            {/* Animated Logo Container */}
            <div className="splash-content">
                <div className="logo-container">
                    {/* Main Logo */}
                    <div className="splash-logo">
                        <div className="logo-text">
                            <span className="logo-part-1">OBEROI</span>
                            <span className="logo-part-2">S&R Legal</span>
                        </div>
                        <div className="logo-tagline">Advocates & Legal Consultants</div>
                    </div>
                    
                    {/* Animated Elements */}
                    <div className="logo-decoration">
                        <div className="decoration-line"></div>
                        <div className="decoration-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="decoration-line"></div>
                    </div>
                </div>
                
                {/* Loading Animation */}
                <div className="loading-animation">
                    <div className="loading-bar">
                        <div className="loading-progress"></div>
                    </div>
                    <div className="loading-text">Loading Excellence...</div>
                </div>
            </div>
            
            {/* Floating Particles */}
            <div className="particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>
                <div className="particle particle-6"></div>
            </div>
        </div>
    )
}

export default SplashScreen