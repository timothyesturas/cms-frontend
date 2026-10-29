import { useEffect, useState } from "react";
import { getSettings } from "../services/settings.service";
import { getNavigationItems } from "../services/navigation.service";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";



function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [settings, setSettings] = useState({
    siteName: "WEBSITE NAME",
    tagline: '"TAGLINE"',
    logoUrl: "/LOGOURL.PNG",
  });

  const [navItems, setNavItems] = useState([]);

  const [isLoadingNavigation, setIsLoadingNavigation] = useState(true);

  useEffect(() => {
    async function loadSettings() {
      try {
        const data = await getSettings();

        setSettings((current) => ({
          ...current,
          ...data,
        }));
      } catch (error) {
        console.error("Failed to load website settings:", error);
      }
    }

    async function loadNavigation() {
      try {
        const data = await getNavigationItems();

        setNavItems(
          data
            .filter((item) => item.isActive && item.isEnabled)
            .sort((a, b) => a.sortOrder - b.sortOrder)
        );
      } catch (error) {
        console.error("Failed to load navigation items:", error);
      } finally {
        setIsLoadingNavigation(false);
      }
    }

    loadSettings();
    loadNavigation();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-icon">
            <img
              src={settings.logoUrl || "/BantayMatandaLogo.png"}
              alt={`${settings.siteName} logo`}
            />
          </div>

          <div className="brand-text">
            <span className="brand-name">
              {settings.siteName}
            </span>

            <span className="brand-subtitle">
              {settings.tagline}
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav className={`navigation ${menuOpen ? "active" : ""}`}>
          {!isLoadingNavigation &&
            navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                {item.name}
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
