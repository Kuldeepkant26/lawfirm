import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import ContactForm from './ContactForm'
import UnderDevelopment from './UnderDevelopment'
import '../css/Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isDevModalOpen, setIsDevModalOpen] = useState(false)
  const [devPageName, setDevPageName] = useState('')

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Scroll detection for navbar hide/show animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)
      
      // Only trigger animation if scroll difference is significant (prevents micro-scrolls)
      if (scrollDifference < 10) return
      
      // Show navbar when at top of page
      if (currentScrollY < 100) {
        setIsNavbarVisible(true)
      } 
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false)
        setIsMenuOpen(false) // Close mobile menu when hiding navbar
        setIsServicesOpen(false) // Close services dropdown
      } 
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let timeoutId = null
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll()
          timeoutId = null
        }, 10)
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  const handleLinkClick = (e, page) => {
    e.preventDefault()
    if (page === 'contact') {
      setIsContactFormOpen(true)
      closeMenu()
    } else {
      // Show development modal for other pages
      setDevPageName(page)
      setIsDevModalOpen(true)
      closeMenu()
    }
  }

  const services = [
    { name: 'Corporate Law', href: '/services/corporate-law' },
    { name: 'Litigation Services', href: '/services/litigation' },
    { name: 'Real Estate Law', href: '/services/real-estate' },
    { name: 'Banking & Finance', href: '/services/banking-finance' },
    { name: 'Intellectual Property', href: '/services/intellectual-property' }
  ]

  return (
    <div className={`law-navbar-container ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <nav className='law-navbar'>
        {/* Logo */}
        <div className='law-navbar-brand'>
          <a href='/' className='law-brand-link'>
            <div className='law-brand-content'>
              <div className='law-brand-icon'>⚖</div>
              <div className='law-brand-text'>
                <span className='law-brand-primary'>OBEROI</span>
                <span className='law-brand-secondary'>S&R Legal</span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className='law-navbar-menu'>
          <ul className='law-nav-links'>
            <li className='law-nav-item'>
              <a href='/' className='law-nav-link' onClick={(e) => handleLinkClick(e, 'Home')}>Home</a>
            </li>
            <li 
              className='law-nav-item law-services-dropdown'
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href='/services' className='law-nav-link' onClick={(e) => handleLinkClick(e, 'Services')}>
                Services
                <ChevronDown className={`law-chevron-icon ${isServicesOpen ? 'rotated' : ''}`} size={16} />
              </a>
              <div className={`law-dropdown-menu ${isServicesOpen ? 'visible' : ''}`}>
                {services.map((service, index) => (
                  <a 
                    key={index}
                    href={service.href} 
                    className='law-dropdown-item'
                    onClick={(e) => handleLinkClick(e, service.name)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </li>
            <li className='law-nav-item'>
              <a href='/projects' className='law-nav-link' onClick={(e) => handleLinkClick(e, 'Projects')}>Projects</a>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className='law-navbar-contact'>
          <button 
            className='law-contact-btn'
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='law-mobile-menu-btn'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          <div className='mobile-overlay' onClick={closeMenu}></div>
          <div className='mobile-sidebar'>
            <div className='mobile-sidebar-header'>
              <div className='mobile-logo'>
                <span className='mobile-logo-text'>OneAxis</span>
                <span className='mobile-logo-accent'>Studios</span>
              </div>
              <button 
                className='mobile-close-btn'
                onClick={closeMenu}
                aria-label='Close menu'
              >
                <X size={24} />
              </button>
            </div>
            <div className='mobile-menu'>
              <a href='/' className='mobile-nav-link' onClick={(e) => handleLinkClick(e, 'Home')}>
                Home
              </a>
              <div className='mobile-services'>
                <button 
                  className='mobile-nav-link services-toggle'
                  onClick={toggleServices}
                >
                  Services
                  <ChevronDown className={`chevron-icon ${isServicesOpen ? 'rotated' : ''}`} size={16} />
                </button>
                {isServicesOpen && (
                  <div className='mobile-dropdown'>
                    {services.map((service, index) => (
                      <a 
                        key={index}
                        href={service.href} 
                        className='mobile-dropdown-item'
                        onClick={(e) => handleLinkClick(e, service.name)}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href='/projects' className='mobile-nav-link' onClick={(e) => handleLinkClick(e, 'Projects')}>
                Projects
              </a>
              <button className='mobile-contact-btn' onClick={(e) => handleLinkClick(e, 'contact')}>
                Contact Us
              </button>
            </div>
          </div>
        </>
      )}

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />

      {/* Under Development Modal */}
      <UnderDevelopment 
        isOpen={isDevModalOpen} 
        onClose={() => setIsDevModalOpen(false)}
        pageName={devPageName}
      />
    </div>
  )
}

export default Navbar
