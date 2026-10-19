
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Programs, Events, and Activities", path: "/programs" },
    { label: "Gallery", path: "/gallery" },
    { label: "Articles", path: "/articles" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-icon">
            <img
              src="/BantayMatandaLogo.png"
              alt="Bantay Matanda Incorporated logo"
            />
          </div>

          <div className="brand-text">
            <span className="brand-name">
              BANTAY MATANDA INCORPORATED
            </span>
            <span className="brand-subtitle">
              "Working towards an elderly-friendly society"
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav className={`navigation ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="nav-button"
            onClick={closeMenu}
          >
            Get Involved <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
