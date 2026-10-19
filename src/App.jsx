
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

import "./App.css";

function PageLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="app" id="top">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="not-found section">
                <div className="section-container">
                  <span className="section-label">404 ERROR</span>
                  <h1>Page not found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                  <a className="primary-button" href="/">
                    Return Home
                  </a>
                </div>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
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
