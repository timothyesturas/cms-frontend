
import { Link } from "react-router-dom";
import { getSettings } from "../services/settings.service";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function Footer() {

  const [settings, setSettings] = useState({
    siteName: "WEBSITE NAME",
    tagline: '"TAGLINE"',
    logoUrl: "/LOGOURL.PNG",
  });


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

    loadSettings();
  }, []);


  return (
    <footer className="footer">
      <div className="section-container footer-container">
        <Link to="/" className="footer-brand">
          <div className="brand-icon">
            <img
              src={settings.logoUrl || "/BantayMatandaLogo.png"}
              alt={`${settings.siteName} logo`}
            />
          </div>
          <span>
              {settings.siteName}
            <small>{settings.tagline}</small>
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
