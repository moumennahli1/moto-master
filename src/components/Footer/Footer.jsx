import React from 'react';
import './Footer.css';

const Footer = () => {
  // SVG Icons
  const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const links = {
    shop: [
      { text: 'All Products', href: '/shop' },
      { text: 'Best Sellers', href: '/shop/best' },
      { text: 'Kawasaki', href: '/shop/Kawasaki' },
      { text: 'Honda', href: '/Honda' },
      { text: 'Suzuki', href: '/Suzuki' },
    ],
    categories: [
      { text: 'Scooters', href: '/categories/scooters' },
      { text: 'Accessories', href: '/categories/accessories' },
      { text: 'Electronics moto', href: '/categories/electronics' },
    ],
    company: [
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Press', href: '/press' },
      { text: 'Sustainability', href: '/sustainability' }
    ],
    support: [
      { text: 'Help Center', href: '/help' },
      { text: 'Contact Us', href: '/contact' },
      { text: 'Shipping Info', href: '/shipping' },
      { text: 'Returns & Exchanges', href: '/returns' },
      { text: 'Size Guide', href: '/size-guide' }
    ]
  };

  const paymentMethods = ['VISA', 'MC', 'AMEX', 'PP', 'AP'];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">MotoMaster</a>
            <p className="footer-tagline">
              good vibes. great rides. best deals.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://youtube.com" className="social-link" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="newsletter">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest updates, exclusive offers, 
              and style inspiration.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
            <p className="newsletter-note">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          {/* Shop Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Shop</h4>
            <ul className="footer-links-list">
              {links.shop.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Categories</h4>
            <ul className="footer-links-list">
              {links.categories.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links-list">
              {links.company.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <PhoneIcon />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <EmailIcon />
                <span>support@motomaster.com</span>
              </div>
              <div className="contact-item">
                <MapPinIcon />
                <span>123 Fashion Ave, morocco, NY 10001</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} MotoMaster. All rights reserved.
          </div>
          
          <div className="payment-methods">
            {paymentMethods.map((method, index) => (
              <div key={index} className="payment-method">
                {method}
              </div>
            ))}
          </div>
          
          <div className="legal-links">
            <a href="/privacy" className="legal-link">Privacy Policy</a>
            <a href="/terms" className="legal-link">Terms of Service</a>
            <a href="/cookies" className="legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;