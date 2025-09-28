import React from 'react'
import '../css/HomeSec2.css'
import ImageSlider from './ImageSlider'

function HomeSec2() {
    return (
        <div className="interior-section">
            <div className="interior-container">
                {/* Left Content */}
                <div className="interior-content">
                    <div className="content-wrapper">
                        <span className="section-badge">Corporate Law</span>
                        <h2 className="section-title">
                            Expert Legal
                            <span className="title-highlight"> Advisory Services</span>
                        </h2>
                        <p className="section-description">
                            Experience comprehensive legal solutions where expertise meets excellence.
                            We provide strategic corporate advisory services that protect your interests 
                            and drive business success through meticulous attention to regulatory compliance 
                            and innovative legal strategies.
                        </p>
                        <div className="features-list">
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Corporate Governance</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Contract Drafting</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Regulatory Compliance</span>
                            </div>
                            <div className="feature-point">
                                <span className="bullet">•</span>
                                <span>Investment Advisory</span>
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
                <div className="interior-images">
                    <div className="image-grid">
                        <div className="image-card large">
                            <img
                                src="https://st2.depositphotos.com/1010613/7353/i/450/depositphotos_73538437-stock-photo-businessmen-shaking-hands.jpg"
                                alt="Corporate Legal Services"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Corporate Advisory</span>
                            </div>
                        </div>
                        <div className="image-card medium">
                            <img
                                src="https://thumbs.dreamstime.com/b/man-suit-touching-scales-justice-icon-surrounded-law-related-icons-digital-interface-man-suit-touching-390302083.jpg"
                                alt="Legal Documentation"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Legal Documentation</span>
                            </div>
                        </div>
                        <div className="image-card small top">
                            <img
                                src="https://media.istockphoto.com/id/2162225685/photo/woman-passing-paper-document-to-lawyer.jpg?s=612x612&w=0&k=20&c=vNcLBWqI7d9Gua0GjRcuY-7QyRfjGRWRaSaWpOgLW3E="
                                alt="Contract Law"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Contracts</span>
                            </div>
                        </div>
                        <div className="image-card small bottom">
                            <img
                                src="https://patronslegal.com/blogs/wp-content/uploads/2025/06/Divorce-Law-Firm-in-Delhi.jpg"
                                alt="Business Law"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Business Law</span>
                            </div>
                        </div>
                        <div className="image-card accent">
                            <img
                                src="https://st2.depositphotos.com/1010613/7353/i/450/depositphotos_73538437-stock-photo-businessmen-shaking-hands.jpg"
                                alt="Legal Consultation"
                                className="design-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Consultation</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Mobile Slider */}
                    <div className="mobile-slider">
                        <ImageSlider images={[
                            {
                                src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                alt: "Legal Consultation",
                                title: "Legal Consultation",
                                description: "Professional legal advice"
                            },
                            {
                                src: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                alt: "Corporate Law",
                                title: "Corporate Law",
                                description: "Business legal services"
                            },
                            {
                                src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                alt: "Legal Documentation",
                                title: "Legal Documentation",
                                description: "Contract drafting & review"
                            },
                            {
                                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                alt: "Legal Advisory",
                                title: "Legal Advisory",
                                description: "Expert legal guidance"
                            },
                            {
                                src: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                alt: "Court Representation",
                                title: "Court Representation",
                                description: "Litigation support"
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSec2
