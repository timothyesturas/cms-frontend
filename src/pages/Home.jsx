import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getSettings } from "../services/settings.service";

function Home() {
  const [settings, setSettings] = useState({
    slogan1: "SLOGAN1",
    slogan2: "SLOGAN2",
    heroImageUrl: "",
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
              FAITH, HOPE, AND LOVE
            </span>

            <h1>
              {settings.slogan1}
              <span>{settings.slogan2}</span>
            </h1>

            <p className="hero-description">
              A church family growing together in faith, sharing
              God's love, and serving our community with compassion.
              There is a place for everyone in our fellowship.
            </p>

            <div className="hero-actions">
              <Link to="/about" className="primary-button">
                Discover Our Church <ArrowRight size={18} />
              </Link>

              <Link to="/programs" className="secondary-button">
                Explore Our Ministries
              </Link>
            </div>

            <div className="hero-note">
              <div className="note-icon">
                <Heart size={21} />
              </div>
              <p>
                <strong>Rooted in faith. United in love.</strong>
                <span>Growing closer to God, together.</span>
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={settings.heroImageUrl || "/church-worship.png"}
                alt="Church congregation gathered in worship"
                className="hero-image"
              />

              <div className="image-overlay" />

              <div className="image-message">
                <span className="image-message-icon">
                  <Heart size={25} />
                </span>
                <div>
                  <strong>A place to belong</strong>
                  <span>Come as you are. Grow in faith.</span>
                </div>
              </div>
            </div>

            <div className="visual-caption">
              <span className="caption-line" />
              <span>One faith, one family, one purpose.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="section-container about-container">
          <div className="section-heading">
            <span className="section-label">WHO WE ARE</span>
            <h2>
              A church built on
              <span> faith and fellowship.</span>
            </h2>
          </div>

          <p className="about-description">
            We are a community of believers committed to knowing
            God, following the teachings of Jesus Christ, and
            sharing His love with others. Through worship, prayer,
            fellowship, and service, we seek to strengthen our
            faith and make a meaningful difference in our community.
          </p>

          <Link to="/about" className="text-link">
            Get to know our church <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="services section">
        <div className="section-container">
          <div className="services-heading">
            <div>
              <span className="section-label">OUR FAITH IN ACTION</span>
              <h2>
                Growing together in
                <span> God's grace.</span>
              </h2>
            </div>
            <p>
              Building a stronger relationship with God through
              worship, fellowship, learning, and service.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">
                <Heart size={28} />
              </div>
              <span className="card-number">01</span>
              <h3>Worship and Prayer</h3>
              <p>
                Gather with our church family to worship God,
                pray together, and grow deeper in faith.
              </p>
              <Link
                to="/programs"
                aria-label="Explore worship and prayer activities"
              >
                <ArrowRight size={19} />
              </Link>
            </article>

            <article className="service-card featured-card">
              <div className="service-icon">
                <Users size={28} />
              </div>
              <span className="card-number">02</span>
              <h3>Fellowship and Community</h3>
              <p>
                Build meaningful relationships, encourage one
                another, and experience the joy of belonging
                to a church family.
              </p>
              <Link
                to="/programs"
                aria-label="Explore our fellowship activities"
              >
                <ArrowRight size={19} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <BookOpen size={28} />
              </div>
              <span className="card-number">03</span>
              <h3>Bible Study and Discipleship</h3>
              <p>
                Discover God's Word, strengthen your understanding
                of Scripture, and apply biblical principles
                to everyday life.
              </p>
              <Link
                to="/programs"
                aria-label="Explore Bible study and discipleship"
              >
                <ArrowRight size={19} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section">
        <div className="section-container home-cta">
          <span className="section-label">YOU ARE WELCOME HERE</span>
          <h2>
            Come grow in faith.
            <span> Find your church family.</span>
          </h2>
          <p>
            Whether you are exploring faith or looking for a church
            to call home, we invite you to worship with us, build
            friendships, and discover God's purpose for your life.
          </p>
          <Link to="/contact" className="primary-button">
            Connect With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
