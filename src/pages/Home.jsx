
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  Users,
  HandHeart,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getSettings } from "../services/settings.service";

function Home() {

  const [settings, setSettings] = useState({
    slogan1: "SLOGAN1",
    slogan2: "SLOGAN2",
    heroImageUrl: ""
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
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              CARE, DIGNITY, AND COMPASSION
            </span>

            <h1>
              {settings.slogan1}
              <span>{settings.slogan2}</span>
            </h1>

            <p className="hero-description">
              Every senior deserves respect, meaningful care,
              and a community that treats them like family.
              Together, we can make a difference.
            </p>

            <div className="hero-actions">
              <Link to="/about" className="primary-button">
                Discover Our Mission <ArrowRight size={18} />
              </Link>

              <Link to="/programs" className="secondary-button">
                Learn More
              </Link>
            </div>

            <div className="hero-note">
              <div className="note-icon">
                <HeartHandshake size={21} />
              </div>
              <p>
                <strong>Care that comes from the heart.</strong>
                <span>Supporting older adults with compassion.</span>
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={settings.heroImageUrl || "/elderly-care.png"}
                alt="A caring interaction between generations"
                className="hero-image"
              />

              <div className="image-overlay" />

              <div className="image-message">
                <span className="image-message-icon">
                  <HeartHandshake size={25} />
                </span>
                <div>
                  <strong>Care that connects generations</strong>
                  <span>Every hand deserves kindness.</span>
                </div>
              </div>
            </div>

            <div className="visual-caption">
              <span className="caption-line" />
              <span>Growing together, caring together.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="section-container about-container">
          <div className="section-heading">
            <span className="section-label">WHO WE ARE</span>
            <h2>
              A community built on
              <span> compassion.</span>
            </h2>
          </div>

          <p className="about-description">
            Bantay Matanda Incorporated stands for a community
            where older adults are valued, respected, and cared
            for. We believe kindness and understanding can help
            create a better quality of life for our elders.
          </p>

          <Link to="/about" className="text-link">
            Get to know us <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="services section">
        <div className="section-container">
          <div className="services-heading">
            <div>
              <span className="section-label">WHAT WE STAND FOR</span>
              <h2>
                Care in every <span>little thing.</span>
              </h2>
            </div>
            <p>
              Meaningful support begins with respect,
              connection, and genuine care.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">
                <HeartHandshake size={28} />
              </div>
              <span className="card-number">01</span>
              <h3>Compassionate Care</h3>
              <p>
                Promoting kindness, dignity, and thoughtful
                support for older adults in our community.
              </p>
              <Link to="/programs" aria-label="Explore our programs">
                <ArrowRight size={19} />
              </Link>
            </article>

            <article className="service-card featured-card">
              <div className="service-icon">
                <Users size={28} />
              </div>
              <span className="card-number">02</span>
              <h3>Community Connection</h3>
              <p>
                Encouraging meaningful relationships and
                bringing people together to support our elders.
              </p>
              <Link to="/programs" aria-label="Explore our programs">
                <ArrowRight size={19} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <HandHeart size={28} />
              </div>
              <span className="card-number">03</span>
              <h3>Respect and Dignity</h3>
              <p>
                Helping create an environment where every
                older person feels valued and included.
              </p>
              <Link to="/about" aria-label="Learn about our values">
                <ArrowRight size={19} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section">
        <div className="section-container home-cta">
          <span className="section-label">LET'S MAKE A DIFFERENCE</span>
          <h2>
            A little kindness can
            <span> go a long way.</span>
          </h2>
          <p>
            Be part of a community that believes in care,
            respect, and a brighter future for older adults.
          </p>
          <Link to="/contact" className="primary-button">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
