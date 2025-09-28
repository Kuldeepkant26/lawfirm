import React, { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'
import '../css/Chatbot.css'
import botFace from '../assets/botface.jpeg'

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm your legal assistant. I'm currently under maintenance, but I'll be back soon to help you with your legal queries.",
            isBot: true,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)

    // Professional maintenance messages
    const maintenanceMessages = [
        "Thank you for your message. Our legal assistant is currently under maintenance. Please contact our office directly for immediate assistance with your legal matters.",
        "I appreciate your inquiry. Unfortunately, I'm currently undergoing system maintenance. For urgent legal assistance, please call our office or schedule a consultation.",
        "Thank you for reaching out. Our AI legal assistant is temporarily unavailable due to scheduled maintenance. Our experienced attorneys are ready to assist you personally.",
        "I understand you need legal guidance. While I'm currently under maintenance, our legal team is available to provide you with expert consultation and representation.",
        "Your question is important to us. Due to ongoing system updates, I'm temporarily unavailable. Please contact OBEROI S&R Legal directly for professional legal advice.",
        "Thank you for your patience. Our legal assistant is currently being updated to serve you better. For immediate legal support, please reach out to our qualified attorneys.",
        "I apologize for the inconvenience. During this maintenance period, please contact our law firm directly for all your legal needs and professional consultation services.",
        "Thank you for your interest in our legal services. While I'm temporarily offline for improvements, our dedicated legal team is ready to assist you with your legal requirements."
    ]

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const toggleChat = () => {
        setIsOpen(!isOpen)
    }

    const getRandomMaintenanceMessage = () => {
        return maintenanceMessages[Math.floor(Math.random() * maintenanceMessages.length)]
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (inputMessage.trim() === '') return

        // Add user message
        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            isBot: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessages(prev => [...prev, userMessage])
        setInputMessage('')

        // Show typing indicator
        setIsTyping(true)

        // Add bot response after typing animation
        setTimeout(() => {
            setIsTyping(false)
            const botMessage = {
                id: Date.now() + 1,
                text: getRandomMaintenanceMessage(),
                isBot: true,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            setMessages(prev => [...prev, botMessage])
        }, 2000)
    }

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-header-info">
                            <div className="bot-avatar">
                                <img src={botFace} alt="Legal Assistant" />
                            </div>
                            <div className="bot-info">
                                <h4>Legal Assistant</h4>
                                <span className="bot-status">Under Maintenance</span>
                            </div>
                        </div>
                        <button 
                            className="close-chat-btn"
                            onClick={toggleChat}
                            aria-label="Close chat"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((message) => (
                            <div 
                                key={message.id} 
                                className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
                            >
                                {message.isBot && (
                                    <div className="message-avatar">
                                        <img src={botFace} alt="Bot" />
                                    </div>
                                )}
                                <div className="message-content">
                                    <div className="message-bubble">
                                        {message.text}
                                    </div>
                                    <div className="message-time">
                                        {message.timestamp}
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="message bot-message">
                                <div className="message-avatar">
                                    <img src={botFace} alt="Bot" />
                                </div>
                                <div className="message-content">
                                    <div className="message-bubble typing-bubble">
                                        <div className="typing-indicator">
                                            <div className="typing-dot"></div>
                                            <div className="typing-dot"></div>
                                            <div className="typing-dot"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input-form" onSubmit={handleSendMessage}>
                        <div className="input-container">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your legal question..."
                                className="chat-input"
                            />
                            <button 
                                type="submit" 
                                className="send-btn"
                                aria-label="Send message"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <div className="maintenance-notice">
                            Assistant is currently under maintenance
                        </div>
                    </form>
                </div>
            )}

            {/* Floating Chat Button */}
            <button 
                className={`chatbot-toggle ${isOpen ? 'chat-open' : ''}`}
                onClick={toggleChat}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <div className="chat-button-content">
                        <img src={botFace} alt="Legal Assistant" className="bot-face" />
                        <div className="pulse-indicator"></div>
                    </div>
                )}
            </button>
        </>
    )
}

export default Chatbot