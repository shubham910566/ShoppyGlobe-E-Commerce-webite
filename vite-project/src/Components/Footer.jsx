import { Link } from "react-router-dom";
import "./Footer.css";

// Footer component with About, Contact Us, Social Links, and Quick Links
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About ShoppyGlobe</h3>
          <p className="footer-text">
            ShoppyGlobe is your one-stop online store for a wide range of products.
            Discover great deals and fast delivery!
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text">Email: sdhasmana96@gmail.com</p>
          <p className="footer-text">Phone: +9105668471</p>
          <p className="footer-text">Address: 123 Shopping St, Commerce City</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="footer-link">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="footer-link">
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;