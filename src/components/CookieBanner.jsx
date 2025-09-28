import React, { useState, useEffect } from 'react'
import { Cookie, X, Shield, Eye, Settings } from 'lucide-react'
import '../css/CookieBanner.css'

function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        // Check if user has already accepted/declined cookies
        const cookieConsent = localStorage.getItem('cookieConsent')
        
        if (!cookieConsent) {
            // Show banner after 5.5 seconds
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 5500)

            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined')
        setIsVisible(false)
    }

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    if (!isVisible) return null

    return (
        <div className="cookie-banner-overlay">
            <div className="cookie-banner">
                <div className="cookie-header">
                    <div className="cookie-icon">
                        <Cookie size={24} />
                    </div>
                    <h3 className="cookie-title">We Value Your Privacy</h3>
                    <button 
                        className="cookie-close"
                        onClick={() => setIsVisible(false)}
                        aria-label="Close cookie banner"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="cookie-content">
                    <p className="cookie-description">
                        OBEROI S&R Legal uses cookies to enhance your browsing experience, 
                        provide personalized content, and analyze our traffic. By continuing 
                        to use our website, you consent to our use of cookies.
                    </p>

                    {showDetails && (
                        <div className="cookie-details">
                            <div className="cookie-categories">
                                <div className="cookie-category">
                                    <div className="category-header">
                                        <Shield size={18} />
                                        <span>Essential Cookies</span>
                                        <span className="category-status required">Required</span>
                                    </div>
                                    <p className="category-description">
                                        These cookies are necessary for the website to function 
                                        and cannot be disabled. They help ensure security and 
                                        basic functionality.
                                    </p>
                                </div>

                                <div className="cookie-category">
                                    <div className="category-header">
                                        <Eye size={18} />
                                        <span>Analytics Cookies</span>
                                        <span className="category-status optional">Optional</span>
                                    </div>
                                    <p className="category-description">
                                        Help us understand how visitors interact with our website 
                                        by collecting anonymous information about usage patterns.
                                    </p>
                                </div>

                                <div className="cookie-category">
                                    <div className="category-header">
                                        <Settings size={18} />
                                        <span>Functional Cookies</span>
                                        <span className="category-status optional">Optional</span>
                                    </div>
                                    <p className="category-description">
                                        Enable enhanced functionality like chat support and 
                                        personalized content based on your preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="cookie-actions">
                    <button 
                        className="cookie-details-toggle"
                        onClick={toggleDetails}
                    >
                        {showDetails ? 'Hide Details' : 'Cookie Details'}
                    </button>
                    
                    <div className="cookie-buttons">
                        <button 
                            className="cookie-btn decline"
                            onClick={handleDecline}
                        >
                            Decline Optional
                        </button>
                        <button 
                            className="cookie-btn accept"
                            onClick={handleAccept}
                        >
                            Accept All Cookies
                        </button>
                    </div>
                </div>

                <div className="cookie-footer">
                    <p>
                        Read our <a href="/privacy-policy" className="cookie-link">Privacy Policy</a> 
                        {' '}and <a href="/cookie-policy" className="cookie-link">Cookie Policy</a> 
                        {' '}for more information.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CookieBanner