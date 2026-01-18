import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronRight, Facebook, Instagram, Twitter, ArrowLeft, Plus, Minus, Star, Truck, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Mock Data with LKR Prices and Corrected Names
const PRODUCTS = [
  { id: 'h1', category: 'home', title: 'Luxury 3-Seater Fabric Sofa', price: 185000, image: '/images/home/Create_me_a_4k_202601182116.jpeg', description: 'A plush, high-comfort sofa designed for modern living rooms. Features premium breathable fabric and high-density foam cushions.' },
  { id: 'h2', category: 'home', title: 'Solid Wood Dining Set', price: 125000, image: '/images/home/Create_me_a_4k_202601182117.jpeg', description: 'Hand-crafted wooden dining table with four minimalist chairs. Perfect for family gatherings and modern dining spaces.' },
  { id: 'h3', category: 'home', title: 'Minimalist Walnut Coffee Table', price: 35000, image: '/images/home/Create_me_a_4k_202601182121.jpeg', description: 'Sleek walnut wood coffee table with a minimalist metal base. A perfect centerpiece for your living room.' },
  { id: 'h4', category: 'home', title: 'Premium Velvet Lounge Chair', price: 45000, image: '/images/home/Create_me_a_4k_202601182124.jpeg', description: 'Ergonomic lounge chair upholstered in premium velvet with solid wood legs for ultimate relaxation.' },
  { id: 'o1', category: 'office', title: 'Executive Management Desk', price: 75000, image: '/images/office/Create_me_a_4k_202601182106.jpeg', description: 'Large executive desk with integrated cable management and high-quality premium finish for professional spaces.' },
  { id: 'o2', category: 'office', title: 'Modern L-Shaped Office Desk', price: 65000, image: '/images/office/Create_me_a_4k_202601182112.jpeg', description: 'Spacious L-shaped corner desk designed for maximum productivity and efficient workspace utilization.' },
  { id: 'h5', category: 'home', title: 'Modern Solid Oak Bed Frame', price: 145000, image: '/images/home/Create_me_a_4k_202601182116 (1).jpeg', description: 'A sleek, durable bed frame crafted from solid oak wood, combining minimalist design with sturdy construction.' },
  { id: 'h6', category: 'home', title: 'Elegant Living Room Sideboard', price: 85000, image: '/images/home/Create_me_a_4k_202601182117 (1).jpeg', description: 'Stylish storage sideboard with ample space and soft-close doors, perfect for organizing your living or dining area.' },
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 0,
  }).format(price);
};

const Navbar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => (
  <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="container nav-content">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="J&O Furniture Logo" />
      </Link>

      <div className="desktop-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/home-furniture" className="nav-link">Home Furniture</Link>
        <Link to="/office-furniture" className="nav-link">Office Furniture</Link>
        <Link to="/about" className="nav-link">About Us</Link>
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
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-about">
        <img src="/logo.png" alt="J&O Furniture Logo" className="footer-logo" />
        <p>Crafting quality furniture since 1995. We bring modern aesthetics and comfort to your homes and offices across Sri Lanka.</p>
      </div>
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/home-furniture">Home Furniture</Link></li>
          <li><Link to="/office-furniture">Office Furniture</Link></li>
          <li><Link to="/about">About Us</Link></li>
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
);

const ProductCard = ({ product }) => (
  <motion.div
    className="furniture-card"
    whileHover={{ y: -10 }}
  >
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title} />
      <div className="card-info">
        <h3>{product.title}</h3>
        <p>{formatPrice(product.price)}</p>
      </div>
    </Link>
  </motion.div>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img src="/images/Hero.jpeg" alt="Furniture Showroom" className="hero-bg" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your <br />
            Living Space
            <span>with Timeless Elegance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our curated collection of premium home and office furniture designed for modern comfort.
          </motion.p>
          <div className="btn-group">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="btn-primary"
            >
              Shop Now <ChevronRight size={20} />
            </motion.button>
          </div>
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
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...PRODUCTS, ...PRODUCTS].map((product, idx) => (
              <div key={idx} className="furniture-card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <div className="card-info">
                    <h3>{product.title}</h3>
                    <p>{formatPrice(product.price)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

const CategoryPage = ({ category, title }) => {
  const products = PRODUCTS.filter(p => p.category === category);

  return (
    <div className="category-page pt-100 pb-100">
      <div className="container">
        <h1 className="page-title">{title}</h1>
        <div className="product-grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="container pt-100">Product Not Found</div>;

  return (
    <div className="product-detail-page pt-100 pb-100">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> Back to Collection
        </button>

        <div className="product-detail-grid">
          <div className="product-gallery">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={product.image}
              alt={product.title}
              className="main-image"
            />
          </div>

          <div className="product-info">
            <span className="category-tag">{product.category} Furniture</span>
            <h1>{product.title}</h1>
            <div className="rating">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "var(--accent)" : "none"} color="var(--accent)" />)}
              <span style={{ marginLeft: '10px', color: '#666' }}>(24 reviews)</span>
            </div>
            <p className="price">{formatPrice(product.price)}</p>
            <p className="description">{product.description}</p>

            <div className="actions">
              <div className="qty-selector">
                <button onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}><Plus size={16} /></button>
              </div>
              <button className="btn-primary add-to-cart">Add to Cart</button>
            </div>

            <div className="meta">
              <p><Truck size={18} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> <strong>Delivery:</strong> Charges based on location. <strong>Within Colombo Area: FREE.</strong></p>
              <p><Clock size={18} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> <strong>Availability:</strong> In Stock (Ready to Deliver)</p>
              <p><ShieldCheck size={18} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> <strong>Warranty:</strong> 5 Years J&O Company Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

  return (
    <Router>
      <div className="app">
        <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu"
            >
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/home-furniture" onClick={() => setIsMenuOpen(false)}>Home Furniture</Link>
              <Link to="/office-furniture" onClick={() => setIsMenuOpen(false)}>Office Furniture</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-furniture" element={<CategoryPage category="home" title="Home Furniture" />} />
          <Route path="/office-furniture" element={<CategoryPage category="office" title="Office Furniture" />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
