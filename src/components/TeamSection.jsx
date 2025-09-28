import React from 'react'
import '../css/TeamSection.css'

function TeamSection() {
    return (
        <div className="team-section">
            <div className="team-container">
                {/* Section Header */}
                <div className="team-header">
                    <h2 className="section-title">
                        Meet Our
                        <span className="title-highlight"> Legal Experts</span>
                    </h2>
                    <p className="section-description">
                        Over four decades of combined legal expertise. Our dedicated team of experienced 
                        advocates brings specialized knowledge across diverse practice areas to serve 
                        your legal needs with excellence and integrity.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="team-grid">
                    {/* Founder */}
                    <div className="team-card founder">
                        <div className="team-image">
                            <img
                                src="https://t4.ftcdn.net/jpg/10/88/94/95/360_F_1088949502_CcUgYnnDv5rTYrH3E6ddq8V3Sgi8ApMq.jpg"
                                alt="Mr. Subhash Oberoi"
                                className="member-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Founder</span>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3 className="member-name">Mr. Subhash Oberoi</h3>
                            <p className="member-title">Founder & Senior Advocate</p>
                            <p className="member-experience">50+ Years Experience</p>
                        </div>
                    </div>

                    {/* Senior Associates */}
                    <div className="team-card">
                        <div className="team-image">
                            <img
                                src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2020/01/11073647/JM5_5413.2e16d0ba.fill-600x440-1.jpg"
                                alt="C.M. Gopal"
                                className="member-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Senior Associate</span>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3 className="member-name">C.M. Gopal</h3>
                            <p className="member-title">Senior Advocate</p>
                            <p className="member-experience">23 Years Experience</p>
                            <div className="specializations">
                                <span className="spec-tag">Civil Law</span>
                                <span className="spec-tag">Banking</span>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-image">
                            <img
                                src="https://www.legalbites.in/wp-content/uploads/2017/09/Jasmeet-Singh.jpg"
                                alt="Rohit Oberoi"
                                className="member-image"
                            />
                            <div className="image-overlay">
                                <span className="overlay-text">Associate</span>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3 className="member-name">Rohit Oberoi</h3>
                            <p className="member-title">Advocate</p>
                            <p className="member-experience">11 Years Experience</p>
                            <div className="specializations">
                                <span className="spec-tag">Banking</span>
                                <span className="spec-tag">Litigation</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="team-stats">
                    <div className="stat-item">
                        <div className="stat-number">40+</div>
                        <div className="stat-label">Years of Excellence</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Expert Advocates</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Cases Won</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Practice Areas</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection
