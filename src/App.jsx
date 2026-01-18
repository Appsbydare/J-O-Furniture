import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home Furniture', href: '#' },
    { title: 'Office Furniture', href: '#' },
    { title: 'About Us', href: '#' },
  ];

  const furnitureImages = [
    '/images/home/Create_me_a_4k_202601182116.jpeg',
    '/images/home/Create_me_a_4k_202601182117.jpeg',
    '/images/home/Create_me_a_4k_202601182121.jpeg',
    '/images/home/Create_me_a_4k_202601182124.jpeg',
    '/images/office/Create_me_a_4k_202601182106.jpeg',
    '/images/office/Create_me_a_4k_202601182112.jpeg',
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <img src="/logo.png" alt="Leebadu Logo" />
          </div>

          <div className="desktop-menu">
            {menuItems.map((item) => (
              <a key={item.title} href={item.href} className="nav-link">
                {item.title}
              </a>
            ))}
            <div className="cart-icon">
              <ShoppingCart size={24} />
              <span className="cart-count">0</span>
            </div>
          </div>

          <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {menuItems.map((item) => (
              <a key={item.title} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </a>
            ))}
            <a href="#" className="mobile-cart">
              <ShoppingCart size={20} /> Shopping Cart
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img src="/images/Hero.jpeg" alt="Furniture Showroom" className="hero-bg" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your Living Space <br />
            <span>with Timeless Elegance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our curated collection of premium home and office furniture designed for modern comfort.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="btn-primary"
          >
            Shop Now <ChevronRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* Moving Cards Section */}
      <section className="moving-cards">
        <div className="container">
          <h2 className="section-title">Featured Collections</h2>
        </div>
        <div className="carousel-wrapper">
          <motion.div
            className="carousel-track"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...furnitureImages, ...furnitureImages].map((img, idx) => (
              <div key={idx} className="furniture-card">
                <img src={img} alt={`Furniture ${idx}`} />
                <div className="card-info">
                  <h3>Premium Piece</h3>
                  <p>$1,299</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-about">
            <img src="/logo.png" alt="J&O Furniture Logo" className="footer-logo" />
            <p>Crafting quality furniture since 1995. We bring modern aesthetics and comfort to your homes and offices.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>124, Pugoda, Sri Lanka</p>
            <p>Email: contact.jofurniture@gmail.com</p>
            <p>Phone: +94 763498605</p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <Facebook size={24} />
              <Instagram size={24} />
              <Twitter size={24} />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 J&O Furniture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
