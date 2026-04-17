import React, { useState } from 'react'
import "./Shop.css"
import Navbar from '../../components/Navbar/Navbar'
import { FaFilter, FaSortAmountDown, FaShoppingCart, FaHeart, FaStar, FaMotorcycle, FaGasPump, FaCogs } from 'react-icons/fa'
import Footer from '../../components/Footer/Footer'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products', icon: <FaMotorcycle /> },
    { id: 'sport', name: 'Sport Bikes', icon: <FaGasPump /> },
    { id: 'cruiser', name: 'Cruisers', icon: <FaMotorcycle /> },
    { id: 'adventure', name: 'Adventure', icon: <FaCogs /> },
    { id: 'offroad', name: 'Off-Road', icon: <FaCogs /> },
    { id: 'scooter', name: 'Scooters', icon: <FaMotorcycle /> },
    { id: 'electric', name: 'Electric', icon: <FaGasPump /> },
  ];

  const products = [
    {
      id: 1,
      name: "Thunderbolt XR",
      category: "sport",
      price: 15999,
      discountedPrice: 14499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=300&fit=crop",
      featured: true,
      engine: "1000cc",
      fuelType: "Petrol",
      color: "Matte Black"
    },
    {
      id: 2,
      name: "Road King Classic",
      category: "cruiser",
      price: 21999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      featured: true,
      engine: "1800cc",
      fuelType: "Petrol",
      color: "Chrome"
    },
    {
      id: 3,
      name: "Adventure Pro 850",
      category: "adventure",
      price: 18499,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1522290184063-278295c4271c?w=400&h=300&fit=crop",
      engine: "850cc",
      fuelType: "Petrol",
      color: "Blue"
    },
    {
      id: 4,
      name: "Trail Blazer 450",
      category: "offroad",
      price: 8999,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1523533608260-22fabc9b5d87?w=400&h=300&fit=crop",
      engine: "450cc",
      fuelType: "Petrol",
      color: "Orange"
    },
    {
      id: 5,
      name: "E-Pulse City",
      category: "electric",
      price: 7499,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      featured: true,
      engine: "Electric",
      fuelType: "Electric",
      color: "White"
    },
    {
      id: 6,
      name: "Urban Glide 300",
      category: "scooter",
      price: 5499,
      discountedPrice: 4999,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1554446422-b03a6b8d1c6a?w=400&h=300&fit=crop",
      engine: "300cc",
      fuelType: "Petrol",
      color: "Red"
    },
    {
      id: 7,
      name: "Night Fury 1200",
      category: "cruiser",
      price: 18999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=400&h=300&fit=crop",
      engine: "1200cc",
      fuelType: "Petrol",
      color: "Black"
    },
    {
      id: 8,
      name: "Crossfire 250",
      category: "offroad",
      price: 6999,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1511994717241-8e4e484dfa8e?w=400&h=300&fit=crop",
      engine: "250cc",
      fuelType: "Petrol",
      color: "Green"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return (a.discountedPrice || a.price) - (b.discountedPrice || b.price);
      case 'price-high':
        return (b.discountedPrice || b.price) - (a.discountedPrice || a.price);
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.featured - a.featured;
    }
  });

  return (
    <div className="moto-shop">
      <Navbar />
      
      {/* Shop Hero Section */}
      <section className="moto-shop-hero">
        <div className="moto-shop-hero-content">
          <h1 className="moto-shop-title">MOTO MASTER SHOP</h1>
          <p className="moto-shop-subtitle">Premium Motorcycles & Gear for Every Rider</p>
          <div className="moto-shop-stats">
            <div className="moto-stat-item">
              <span className="moto-stat-number">{products.length}+</span>
              <span className="moto-stat-label">Models</span>
            </div>
            <div className="moto-stat-item">
              <span className="moto-stat-number">50+</span>
              <span className="moto-stat-label">Brands</span>
            </div>
            <div className="moto-stat-item">
              <span className="moto-stat-number">24/7</span>
              <span className="moto-stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Controls */}
      <div className="moto-shop-controls">
        <div className="moto-container">
          <div className="moto-controls-wrapper">
            <div className="moto-category-filter">
              <button className="moto-filter-toggle">
                <FaFilter /> Categories
              </button>
              <div className="moto-category-list">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`moto-category-btn ${selectedCategory === cat.id ? 'moto-category-active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="moto-sort-filter">
              <FaSortAmountDown />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="moto-sort-select">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="moto-container">
        <div className="moto-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="moto-product-card">
              {product.featured && <span className="moto-featured-badge">FEATURED</span>}
              {product.discountedPrice && <span className="moto-discount-badge">SAVE ${product.price - product.discountedPrice}</span>}
              
              <div className="moto-product-image">
                <img src={product.image} alt={product.name} className="moto-product-img" />
                <div className="moto-product-overlay">
                  <button className="moto-icon-btn moto-wishlist-btn">
                    <FaHeart />
                  </button>
                  <button className="moto-icon-btn moto-cart-btn">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>

              <div className="moto-product-info">
                <div className="moto-product-category">
                  {categories.find(c => c.id === product.category)?.name}
                </div>
                <h3 className="moto-product-name">{product.name}</h3>
                
                <div className="moto-product-specs">
                  <div className="moto-spec">
                    <FaCogs />
                    <span>{product.engine}</span>
                  </div>
                  <div className="moto-spec">
                    <FaGasPump />
                    <span>{product.fuelType}</span>
                  </div>
                  <div className="moto-spec">
                    <span className="moto-color-dot" style={{backgroundColor: product.color.toLowerCase()}}></span>
                    <span>{product.color}</span>
                  </div>
                </div>

                <div className="moto-product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(product.rating) ? 'moto-star-filled' : 'moto-star-empty'}
                    />
                  ))}
                  <span className="moto-rating-value">{product.rating}</span>
                </div>

                <div className="moto-product-price">
                  {product.discountedPrice ? (
                    <>
                      <span className="moto-original-price">${product.price.toLocaleString()}</span>
                      <span className="moto-current-price">${product.discountedPrice.toLocaleString()}</span>
                    </>
                  ) : (
                    <span className="moto-current-price">${product.price.toLocaleString()}</span>
                  )}
                </div>

                <button className="moto-view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Footer */}
        <div className="moto-shop-footer">
          <div className="moto-shop-features">
            <div className="moto-feature">
              <div className="moto-feature-icon">🚚</div>
              <h4 className="moto-feature-title">Free Shipping</h4>
              <p className="moto-feature-desc">On orders over $5,000</p>
            </div>
            <div className="moto-feature">
              <div className="moto-feature-icon">🔧</div>
              <h4 className="moto-feature-title">Free Assembly</h4>
              <p className="moto-feature-desc">Professional setup included</p>
            </div>
            <div className="moto-feature">
              <div className="moto-feature-icon">🛡️</div>
              <h4 className="moto-feature-title">2-Year Warranty</h4>
              <p className="moto-feature-desc">Extended coverage available</p>
            </div>
            <div className="moto-feature">
              <div className="moto-feature-icon">🔄</div>
              <h4 className="moto-feature-title">30-Day Returns</h4>
              <p className="moto-feature-desc">No questions asked</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop