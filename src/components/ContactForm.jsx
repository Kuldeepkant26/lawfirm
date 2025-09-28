import React, { useState, useEffect } from 'react'
import { X, Mail, Phone, User, MessageSquare, Send, MapPin } from 'lucide-react'
import '../css/ContactForm.css'

function ContactForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('contact-form-modal-open')
        } else {
            document.body.classList.remove('contact-form-modal-open')
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('contact-form-modal-open')
        }
    }, [isOpen])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success')
            setIsSubmitting(false)
            
            // Reset form and close after 2 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    preferredContact: 'email'
                })
                setSubmitStatus(null)
                onClose()
            }, 2000)
        }, 1500)
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className="contact-form-overlay" onClick={handleOverlayClick}>
            <div className="contact-form-container">
                {/* Header */}
                <div className="contact-form-header">
                    <div className="contact-form-title-section">
                        <div className="contact-form-icon">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h2 className="contact-form-title">Get in Touch</h2>
                            <p className="contact-form-subtitle">We're here to help with your legal needs</p>
                        </div>
                    </div>
                    <button className="contact-form-close" onClick={onClose} aria-label="Close">
                        <X size={20} />
                    </button>
                </div>

                {/* Contact Info Banner */}
                <div className="contact-info-banner">
                    <div className="contact-info-item">
                        <Phone size={16} />
                        <span>+91-11-26532082</span>
                    </div>
                    <div className="contact-info-item">
                        <Mail size={16} />
                        <span>legal@oberoisrlegal.com</span>
                    </div>
                    <div className="contact-info-item">
                        <MapPin size={16} />
                        <span>Green Park Main, Delhi</span>
                    </div>
                </div>

                {/* Form Content */}
                <div className="contact-form-content">
                    {submitStatus === 'success' ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h3>Message Sent Successfully!</h3>
                            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            {/* Personal Information Row */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        <User size={16} />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        <Mail size={16} />
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Information Row */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">
                                        <Phone size={16} />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="preferredContact" className="form-label">
                                        Preferred Contact Method
                                    </label>
                                    <select
                                        id="preferredContact"
                                        name="preferredContact"
                                        value={formData.preferredContact}
                                        onChange={handleInputChange}
                                        className="form-select"
                                    >
                                        <option value="email">Email</option>
                                        <option value="phone">Phone</option>
                                        <option value="both">Both Email & Phone</option>
                                    </select>
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">
                                    <MessageSquare size={16} />
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="form-select"
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="corporate-law">Corporate Law Consultation</option>
                                    <option value="litigation">Litigation Services</option>
                                    <option value="real-estate">Real Estate Law</option>
                                    <option value="banking-finance">Banking & Finance</option>
                                    <option value="intellectual-property">Intellectual Property</option>
                                    <option value="labour-employment">Labour & Employment</option>
                                    <option value="general-inquiry">General Inquiry</option>
                                    <option value="emergency">Emergency Legal Support</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    <MessageSquare size={16} />
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="form-textarea"
                                    placeholder="Please describe your legal requirements or questions in detail..."
                                    rows="4"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="form-actions">
                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="loading-spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Additional Info */}
                            <div className="form-footer">
                                <p className="form-notice">
                                    * Required fields. All information is kept confidential and used only for legal consultation purposes.
                                </p>
                                <p className="response-time">
                                    <strong>Response Time:</strong> We typically respond within 2-4 business hours during office hours.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContactForm