import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartItemsCount = 3; // Example cart count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="up-nav">
        <p>Top 1 In Morocco</p>
      </div>
      
      <nav className="navbar">
        {/* Mobile Menu Toggle */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="menu-icon" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>


        {/* Desktop Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeAllMenus}>Home</Link>
          </li>
          <li>
            <Link to="/shop" onClick={closeAllMenus}>Shop</Link>
          </li>
          <li>
            <Link to="/categories" onClick={closeAllMenus}>Categories</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeAllMenus}>About</Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeAllMenus}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeAllMenus}>Contact</Link>
          </li>
        </ul>
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeAllMenus}>
            <p>MotoMaster</p>
          </Link>
        </div>

        {/* Search and User Actions */}
        <div className="nav-actions">
          {/* Desktop Search */}
          <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              id="query"
              className="search-input"
              type="search"
              placeholder="Search products..."
              name="searchbar"
            />
          </div>

          {/* Mobile Search Toggle */}
          <div 
            className="mobile-search-toggle icon-wrapper"
            onClick={toggleSearch}
            aria-label="Toggle search"
            style={{ display: window.innerWidth <= 768 ? 'flex' : 'none' }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" 
              fill="#fff" />
            </svg>
          </div>

          {/* User Actions */}
          <div className="user-actions">
            <div className="icon-wrapper" onClick={closeAllMenus}>
              <img src={user} alt="User Account" className="user-icon" />
            </div>
            <div className="icon-wrapper" onClick={closeAllMenus}>
              <img src={cart} alt="Shopping Cart" className="cart-icon" />
              {cartItemsCount > 0 && (
                <span className="cart-count">{cartItemsCount}</span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;