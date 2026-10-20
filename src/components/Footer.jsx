
import { Link } from "react-router-dom";
import { HeartHandshake, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-container">
        <Link to="/" className="footer-brand">
          <div className="brand-icon">
            <img
              src="/BantayMatandaLogo.png"
              alt="Bantay Matanda Incorporated logo"
            />
          </div>
          <span>
            BANTAY MATANDA INCORPORATED
            <small>"Working towards an elderly-friendly society"</small>
          </span>
        </Link>

        <p>
          © {new Date().getFullYear()} Bantay Matanda Incorporated.
          All rights reserved.
        </p>

        <a href="#top" className="back-to-top">
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
