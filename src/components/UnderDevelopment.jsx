import React from 'react'
import { X, Wrench, Clock } from 'lucide-react'
import '../css/UnderDevelopment.css'

function UnderDevelopment({ isOpen, onClose, pageName }) {
    if (!isOpen) return null

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className="dev-modal-overlay" onClick={handleOverlayClick}>
            <div className="dev-modal-container">
                <div className="dev-modal-header">
                    <div className="dev-modal-icon">
                        <Wrench size={32} />
                    </div>
                    <button className="dev-modal-close" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>
                
                <div className="dev-modal-content">
                    <h2 className="dev-modal-title">Page Under Development</h2>
                    <p className="dev-modal-message">
                        The <strong>{pageName}</strong> page is currently under development. 
                        We're working hard to bring you an amazing experience!
                    </p>
                    
                    <div className="dev-modal-info">
                        <div className="dev-info-item">
                            <Clock size={20} />
                            <span>Coming Soon</span>
                        </div>
                    </div>

                    <div className="dev-modal-suggestion">
                        <p>In the meantime, you can:</p>
                        <ul>
                            <li>Contact us directly for immediate assistance</li>
                            <li>Check back soon for updates</li>
                            <li>Explore our other available sections</li>
                        </ul>
                    </div>

                    <div className="dev-modal-actions">
                        <button className="dev-action-btn primary" onClick={onClose}>
                            Got it, thanks!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderDevelopment