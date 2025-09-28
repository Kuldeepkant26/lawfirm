import React from 'react'
import '../css/HomeHero.css'

function HomeHero() {
    return (
        <div className='home-hero'>
            {/* Video Background */}
            <div className="video-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="https://res.cloudinary.com/dje2ljyce/video/upload/v1758962920/6100011-uhd_4096_2160_30fps_g2ebgg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Video Overlay */}
            <div className="video-overlay"></div>

            {/* Decorative Overlay Elements */}
            <div className="overlay-pattern">
                <div className="pattern-grid"></div>
                <div className="pattern-dots"></div>
                <div className="pattern-lines"></div>
            </div>

            <div className="hero-content">
                {/* Main Title */}
                <h1 className="hero-title">
                    Expert Legal Solutions,<br />
                    Professional Results
                </h1>

                {/* Description */}
                <p className="hero-description">
                    Premium legal services for corporate clients and individuals.<br />
                    Experience excellence in legal representation and consultation.
                </p>

                {/* Call to Action Buttons */}
                <div className="hero-buttons">
                    <button className="btn-primary">Schedule Consultation</button>
                    <button className="btn-secondary">Learn More</button>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                    <div className="floating-element element-1"></div>
                    <div className="floating-element element-2"></div>
                    <div className="floating-element element-3"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero

