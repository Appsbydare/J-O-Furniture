import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronRight, Facebook, Instagram, Twitter, ArrowLeft, Plus, Minus, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Mock Data
const PRODUCTS = [
  { id: 'h1', category: 'home', title: 'Luxury Fabric Sofa', price: 1299, image: '/images/home/Create_me_a_4k_202601182116.jpeg', description: 'A plush, high-comfort sofa designed for modern living rooms. Features premium breathable fabric and high-density foam.' },
  { id: 'h2', category: 'home', title: 'Elegant Dining Set', price: 899, image: '/images/home/Create_me_a_4k_202601182117.jpeg', description: 'Hand-crafted wooden dining table with four minimalist chairs. Perfect for family gatherings.' },
  { id: 'h3', category: 'home', title: 'Modern Coffee Table', price: 450, image: '/images/home/Create_me_a_4k_202601182121.jpeg', description: 'Sleek walnut wood coffee table with a minimalist metal base.' },
  { id: 'h4', category: 'home', title: 'Velvet Lounge Chair', price: 650, image: '/images/home/Create_me_a_4k_202601182124.jpeg', description: 'Ergonomic lounge chair upholstered in premium velvet.' },
  { id: 'o1', category: 'office', title: 'Pro Executive Desk', price: 799, image: '/images/office/Create_me_a_4k_202601182106.jpeg', description: 'Large executive desk with cable management and high-quality finish.' },
  { id: 'o2', category: 'office', title: 'Ergonomic Office Chair', price: 350, image: '/images/office/Create_me_a_4k_202601182112.jpeg', description: 'Fully adjustable office chair with lumbar support and breathable mesh.' },
  { id: 'h5', category: 'home', title: 'Minimalist Bed Frame', price: 1100, image: '/images/home/Create_me_a_4k_202601182116 (1).jpeg', description: 'A sleek, modern bed frame crafted from solid oak wood.' },
  { id: 'h6', category: 'home', title: 'Contemporary Sideboard', price: 750, image: '/images/home/Create_me_a_4k_202601182117 (1).jpeg', description: 'Stylish sideboard with ample storage space and soft-close doors.' },
  { id: 'o3', category: 'office', title: 'Compact Workstation', price: 420, image: '/images/office/Create_me_a_4k_202601182106.jpeg', description: 'Space-saving workstation designed for home offices.' },
];

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
        <p>Crafting quality furniture since 1995. We bring modern aesthetics and comfort to your homes and offices.</p>
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
        <p>${product.price}</p>
      </div>
    </Link>
  </motion.div>
);

const Home = () => {
  const furnitureImages = PRODUCTS.map(p => p.image);

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
            <p className="price">${product.price}</p>
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
              <p><strong>Availability:</strong> In Stock</p>
              <p><strong>Shipping:</strong> Free Delivery in Sri Lanka</p>
              <p><strong>Warranty:</strong> 5 Years Company Warranty</p>
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
              <Link to="#" className="mobile-cart">
                <ShoppingCart size={20} /> Shopping Cart
              </Link>
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
