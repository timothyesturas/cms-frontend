
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import { useSiteSettings } from "./hooks/useSiteSettings";

import "./App.css";
import "./brand-settings.css";

function PageLayout() {
  const location = useLocation();
  const { settings, isLoading, error } = useSiteSettings();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    document.title = settings.siteName || "SET YOUR SITENAME";
  }, [settings.siteName]);

  return (
    <div className="app" id="top">
      <Navbar settings={settings} />

      <main>
        {error && (
          <div className="site-settings-notice" role="status">
            Website branding could not be refreshed. Using the
            available default settings.
          </div>
        )}

        {isLoading && (
          <div className="site-settings-loading" aria-live="polite">
            Loading website settings...
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

          <Route
            path="*"
            element={
              <section className="not-found section">
                <div className="section-container">
                  <span className="section-label">404 ERROR</span>
                  <h1>Page not found</h1>
                  <p>
                    The page you're looking for doesn't exist.
                  </p>
                  <a className="primary-button" href="/">
                    Return Home
                  </a>
                </div>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer settings={settings} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PageLayout />
    </BrowserRouter>
  );
}

export default App;
