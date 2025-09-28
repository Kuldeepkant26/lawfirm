import React from 'react'
import '../css/HomeSec3.css'
import ImageSlider from './ImageSlider'

function HomeSec3() {
    return (
        <div className="webdev-section">
            <div className="webdev-container">
                {/* Left Content */}
                <div className="webdev-content">
                    <div className="content-wrapper">
                        <span className="section-badge">Litigation & Disputes</span>
                        <h2 className="section-title">
                            Protect Your
                            <span className="title-highlight"> Legal Interests</span>
                        </h2>
                        <p className="section-description">
                            Experience comprehensive litigation support where strategy meets execution.
                            We provide robust legal representation across various courts and tribunals,
                            defending your rights and pursuing favorable outcomes through skilled advocacy 
                            and meticulous case preparation.
                        </p>
                        <div className="features-list">
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Supreme Court Matters</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>High Court Litigation</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Arbitration Services</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Debt Recovery</span>
                            </div>
                        </div>
                        <button className="learn-more-btn">
                            Learn More
                            <svg className="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Images */}
                <div className="webdev-images">
                    <div className="image-grid">
                        <div className="image-card large">
                            <img
                                src="https://t3.ftcdn.net/jpg/04/85/39/76/360_F_485397626_ydPEYshMKRIyY7HIH2jUCLu8nkC7X2KH.jpg"
                                alt="Legal Justice System"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Justice System</span>
                            </div>
                        </div>
                        <div className="image-card medium">
                            <img
                                src="https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443469.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Judge's Chambers"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Judge's Chambers</span>
                            </div>
                        </div>
                        <div className="image-card small top">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/001/269/203/non_2x/lawyer-working-at-desk-free-photo.jpg"
                                alt="Legal Professional"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Legal Work</span>
                            </div>
                        </div>
                        <div className="image-card small bottom">
                            <img
                                src="https://media.istockphoto.com/id/1181406993/photo/lawyer-working-in-office-law-and-justice-concept.jpg?s=612x612&w=0&k=20&c=DAb5Ive3Otp2PBtQyZl01acM-XKDvJRW0QqYXezm6UE="
                                alt="Law Office"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Law Office</span>
                            </div>
                        </div>
                        <div className="image-card accent">
                            <img
                                src="https://t3.ftcdn.net/jpg/04/85/39/76/360_F_485397626_ydPEYshMKRIyY7HIH2jUCLu8nkC7X2KH.jpg"
                                alt="Legal Excellence"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Excellence</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Mobile Slider */}
                    <div className="mobile-slider">
                        <ImageSlider images={[
                            {
                                src: "https://t3.ftcdn.net/jpg/04/85/39/76/360_F_485397626_ydPEYshMKRIyY7HIH2jUCLu8nkC7X2KH.jpg",
                                alt: "Legal Justice System",
                                title: "Justice System",
                                description: "Professional legal representation"
                            },
                            {
                                src: "https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443469.jpg?semt=ais_hybrid&w=740&q=80",
                                alt: "Judge's Chambers",
                                title: "Judge's Chambers",
                                description: "Court proceedings expertise"
                            },
                            {
                                src: "https://static.vecteezy.com/system/resources/previews/001/269/203/non_2x/lawyer-working-at-desk-free-photo.jpg",
                                alt: "Legal Professional",
                                title: "Legal Professional",
                                description: "Dedicated legal work"
                            },
                            {
                                src: "https://media.istockphoto.com/id/1181406993/photo/lawyer-working-in-office-law-and-justice-concept.jpg?s=612x612&w=0&k=20&c=DAb5Ive3Otp2PBtQyZl01acM-XKDvJRW0QqYXezm6UE=",
                                alt: "Law Office",
                                title: "Law Office",
                                description: "Professional legal environment"
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSec3
