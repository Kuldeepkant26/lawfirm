import React from 'react'
import '../css/HomeSec4.css'
import ImageSlider from './ImageSlider'

function HomeSec4() {
    const handleContactClick = () => {
        // Smooth scroll to footer or contact section
        const footer = document.querySelector('footer') || document.querySelector('.contact-section');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Alternative: scroll to bottom of page
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }

    return (
        <div className="mobile-section">
            <div className="mobile-container">
                {/* Left Content */}
                <div className="mobile-content">
                    <div className="content-wrapper">
                        <span className="section-badge">Real Estate & Infrastructure</span>
                        <h2 className="section-title">
                            Navigate Your
                            <span className="title-highlight"> Property Ventures</span>
                        </h2>
                        <p className="section-description">
                            Comprehensive real estate and infrastructure legal services that drive successful projects.
                            We specialize in land acquisition, property development, and infrastructure contracts,
                            providing strategic guidance through complex regulatory frameworks and facilitating 
                            seamless transactions for developers, investors, and corporate clients.
                        </p>
                        <div className="features-list">
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Land Acquisition</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Property Development</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Infrastructure Projects</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Township Development</span>
                            </div>
                        </div>
                        <button className="contact-btn" onClick={handleContactClick}>
                            Contact Us
                            <svg className="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Images */}
                <div className="mobile-images">
                    <div className="image-grid">
                        <div className="image-card large">
                            <img
                                src="https://media.istockphoto.com/id/1300972557/photo/young-man-professional-lawyer-counsel-indian-woman-customer-at-office.jpg?s=612x612&w=0&k=20&c=jw3NrVS3lrxKmOVhDvDf0bmQTKZ6iri7EASHoRLMxG4="
                                alt="Legal Consultation"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Legal Consultation</span>
                            </div>
                        </div>
                        <div className="image-card medium">
                            <img
                                src="https://lawforeverything.com/wp-content/uploads/2024/06/CASE-12-1.jpg"
                                alt="Legal Documentation"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Legal Documentation</span>
                            </div>
                        </div>
                        <div className="image-card small top">
                            <img
                                src="https://www.vasiliou.law/wp-content/uploads/2023/10/acquisition-property-foreigners-824x412.jpg"
                                alt="Property Acquisition"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Property Acquisition</span>
                            </div>
                        </div>
                        <div className="image-card small bottom">
                            <img
                                src="https://media.istockphoto.com/id/1300972557/photo/young-man-professional-lawyer-counsel-indian-woman-customer-at-office.jpg?s=612x612&w=0&k=20&c=jw3NrVS3lrxKmOVhDvDf0bmQTKZ6iri7EASHoRLMxG4="
                                alt="Real Estate Advisory"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Real Estate Advisory</span>
                            </div>
                        </div>
                        <div className="image-card accent">
                            <img
                                src="https://lawforeverything.com/wp-content/uploads/2024/06/CASE-12-1.jpg"
                                alt="Infrastructure Projects"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Infrastructure Projects</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Mobile Slider */}
                    <div className="mobile-slider">
                        <ImageSlider images={[
                            {
                                src: "https://media.istockphoto.com/id/1300972557/photo/young-man-professional-lawyer-counsel-indian-woman-customer-at-office.jpg?s=612x612&w=0&k=20&c=jw3NrVS3lrxKmOVhDvDf0bmQTKZ6iri7EASHoRLMxG4=",
                                alt: "Legal Consultation",
                                title: "Legal Consultation",
                                description: "Professional legal advisory services"
                            },
                            {
                                src: "https://lawforeverything.com/wp-content/uploads/2024/06/CASE-12-1.jpg",
                                alt: "Legal Documentation",
                                title: "Legal Documentation",
                                description: "Comprehensive legal document preparation"
                            },
                            {
                                src: "https://www.vasiliou.law/wp-content/uploads/2023/10/acquisition-property-foreigners-824x412.jpg",
                                alt: "Property Acquisition",
                                title: "Property Acquisition",
                                description: "Real estate acquisition legal support"
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSec4
