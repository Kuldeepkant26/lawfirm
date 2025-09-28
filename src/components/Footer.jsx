import React from 'react'
import '../css/Footer.css'

function Footer() {
    return (
        <footer className="law-firm-footer">
            <div className="law-footer-wrapper">
                {/* Main Footer Content */}
                <div className="law-footer-content">
                    {/* Company Column */}
                    <div className="law-footer-column law-footer-brand">
                        <div className="law-brand-logo">
                            <div className="law-logo-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L12 22M8 6L16 6M10 10L14 10M9 14L15 14M8 18L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="law-brand-text">
                                <h3 className="law-firm-name">OBEROI S&R Legal</h3>
                                <p className="law-firm-tagline">Advocates & Legal Consultants</p>
                            </div>
                        </div>
                        <p className="law-brand-description">
                            Delivering exceptional legal services with integrity, expertise, and unwavering commitment to our clients' success for over four decades.
                        </p>
                        <div className="law-brand-stats">
                            <div className="law-stat-item">
                                <span className="law-stat-number">40+</span>
                                <span className="law-stat-label">Years Experience</span>
                            </div>
                            <div className="law-stat-item">
                                <span className="law-stat-number">500+</span>
                                <span className="law-stat-label">Cases Won</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="law-footer-column law-footer-services">
                        <h4 className="law-column-title">Practice Areas</h4>
                        <nav className="law-services-nav">
                            <ul className="law-services-list">
                                <li className="law-service-item">
                                    <a href="#corporate" className="law-service-link">Corporate Law</a>
                                </li>
                                <li className="law-service-item">
                                    <a href="#litigation" className="law-service-link">Litigation Services</a>
                                </li>
                                <li className="law-service-item">
                                    <a href="#realestate" className="law-service-link">Real Estate Law</a>
                                </li>
                                <li className="law-service-item">
                                    <a href="#banking" className="law-service-link">Banking & Finance</a>
                                </li>
                                <li className="law-service-item">
                                    <a href="#intellectual" className="law-service-link">Intellectual Property</a>
                                </li>
                                <li className="law-service-item">
                                    <a href="#labour" className="law-service-link">Labour & Employment</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Quick Links Column */}
                    <div className="law-footer-column law-footer-links">
                        <h4 className="law-column-title">Quick Links</h4>
                        <nav className="law-quick-nav">
                            <ul className="law-quick-list">
                                <li className="law-quick-item">
                                    <a href="#about" className="law-quick-link">About Us</a>
                                </li>
                                <li className="law-quick-item">
                                    <a href="#team" className="law-quick-link">Our Team</a>
                                </li>
                                <li className="law-quick-item">
                                    <a href="#cases" className="law-quick-link">Case Studies</a>
                                </li>
                                <li className="law-quick-item">
                                    <a href="#news" className="law-quick-link">Legal News</a>
                                </li>
                                <li className="law-quick-item">
                                    <a href="#contact" className="law-quick-link">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div className="law-footer-column law-footer-contact">
                        <h4 className="law-column-title">Contact Information</h4>
                        <div className="law-contact-info">
                            <div className="law-contact-group">
                                <div className="law-contact-item law-contact-address">
                                    <span className="law-contact-icon">📍</span>
                                    <div className="law-contact-details">
                                        <span className="law-contact-label">Office Address</span>
                                        <span className="law-contact-value">L-18, LGF, Green Park Main,<br/>New Delhi - 110016</span>
                                    </div>
                                </div>
                                <div className="law-contact-item law-contact-phone">
                                    <span className="law-contact-icon">📞</span>
                                    <div className="law-contact-details">
                                        <span className="law-contact-label">Phone Numbers</span>
                                        <span className="law-contact-value">+91-11-26532082<br/>+91-11-26517046</span>
                                    </div>
                                </div>
                                <div className="law-contact-item law-contact-email">
                                    <span className="law-contact-icon">✉️</span>
                                    <div className="law-contact-details">
                                        <span className="law-contact-label">Email Address</span>
                                        <span className="law-contact-value">legal@oberoisrlegal.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="law-footer-bottom">
                    <div className="law-bottom-content">
                        <div className="law-copyright">
                            <p className="law-copyright-text">© 2025 OBEROI S&R Legal. All rights reserved.</p>
                        </div>
                        <div className="law-legal-links">
                            <nav className="law-legal-nav">
                                <a href="#privacy" className="law-legal-link">Privacy Policy</a>
                                <span className="law-link-separator">|</span>
                                <a href="#terms" className="law-legal-link">Terms of Service</a>
                                <span className="law-link-separator">|</span>
                                <a href="#disclaimer" className="law-legal-link">Legal Disclaimer</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer