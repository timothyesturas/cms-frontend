
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  HandHeart,
  Target,
  Eye,
  Heart,
  Sprout,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "We believe that genuine care begins with empathy, patience, and understanding.",
  },
  {
    icon: ShieldCheck,
    title: "Dignity and Respect",
    description:
      "Every older person deserves respect, a voice, and recognition of their worth.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Stronger communities grow when people support one another and work together.",
  },
  {
    icon: HandHeart,
    title: "Service",
    description:
      "Meaningful acts of service can help create a more caring and inclusive society.",
  },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>

            <span className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              GET TO KNOW US
            </span>

            <h1>
              Every elder deserves
              <span> a community that cares.</span>
            </h1>

            <p>
              We believe in a society where older adults are respected,
              valued, and supported. Through compassion and community
              involvement, we aspire to help build a kinder future
              for our elders.
            </p>

            <a href="#our-story" className="primary-button">
              Discover Our Story <ArrowRight size={18} />
            </a>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-image-frame">
              <img
                src="/elderly-care.png"
                alt="A caring interaction between generations"
                className="about-hero-image"
              />

              <div className="about-image-shade" />

              <div className="about-image-card">
                <div className="about-image-card-icon">
                  <HeartHandshake size={25} />
                </div>
                <div>
                  <strong>Care with purpose</strong>
                  <span>Respect. Connection. Compassion.</span>
                </div>
              </div>
            </div>

            <div className="about-image-caption">
              <span />
              Building an elderly-friendly society
            </div>
          </div>
        </div>
      </section>

      <section className="about-story-section" id="our-story">
        <div className="section-container about-story-grid">
          <div className="about-story-heading">
            <span className="section-label">OUR STORY</span>
            <h2>
              Because caring for our elders is a
              <span> shared responsibility.</span>
            </h2>
            <div className="about-story-decoration">
              <HeartHandshake size={35} />
            </div>
          </div>

          <div className="about-story-copy">
            <p className="about-story-lead">
              A kinder society begins when we recognize the value
              of every generation.
            </p>

            <p>
              Older adults carry years of experience, knowledge,
              relationships, and contributions that help shape
              families and communities. They deserve to live with
              dignity, feel included, and know that they are valued.
            </p>

            <p>
              Bantay Matanda Incorporated stands for a community
              that values older adults and encourages people to
              participate in building a more caring and
              elderly-friendly society.
            </p>

            <p>
              We believe that small acts of kindness, meaningful
              connections, and collective effort can make a positive
              difference in the lives of older adults.
            </p>
          </div>
        </div>
      </section>

      <section className="about-purpose-section">
        <div className="section-container">
          <div className="about-centered-heading">
            <span className="section-label">OUR PURPOSE</span>
            <h2>
              Guided by care.
              <span> Driven by purpose.</span>
            </h2>
            <p>
              Our direction begins with the kind of society we want
              to help create for older adults.
            </p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Target size={30} />
              </div>
              <span className="about-purpose-overline">
                WHAT WE STRIVE TO DO
              </span>
              <h3>Our Mission</h3>
              <p>
                To promote the dignity, well-being, and inclusion of
                older adults by encouraging compassionate care,
                meaningful community involvement, and respect for
                their needs and contributions.
              </p>
              <div className="about-purpose-bottom">
                <Heart size={17} />
                <span>Making care meaningful</span>
              </div>
            </article>

            <article className="about-purpose-card about-vision-card">
              <div className="about-purpose-icon">
                <Eye size={30} />
              </div>
              <span className="about-purpose-overline">
                THE FUTURE WE ENVISION
              </span>
              <h3>Our Vision</h3>
              <p>
                A compassionate and elderly-friendly society where
                every older adult is valued, respected, included,
                and supported in living a life of dignity.
              </p>
              <div className="about-purpose-bottom">
                <Sprout size={17} />
                <span>Growing a kinder future</span>
              </div>
            </article>
          </div>

          <p className="about-purpose-disclaimer">
            The mission and vision above are proposed website copy.
            Confirm the organization's official statements before
            publishing.
          </p>
        </div>
      </section>

      <section className="about-values-section">
        <div className="section-container">
          <div className="about-values-heading">
            <div>
              <span className="section-label">OUR CORE VALUES</span>
              <h2>
                The values behind
                <span> everything we do.</span>
              </h2>
            </div>
            <p>
              The way we treat people matters. These principles
              represent the values that guide a caring community.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-card-top">
                    <div className="about-value-icon">
                      <Icon size={27} />
                    </div>
                    <span className="about-value-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="section-container">
          <div className="about-cta-content">
            <div className="about-cta-icon">
              <HeartHandshake size={32} />
            </div>
            <span className="about-section-label">
              BE PART OF THE CHANGE
            </span>
            <h2>
              A more caring society
              <span> starts with us.</span>
            </h2>
            <p>
              Every helping hand, kind word, and meaningful
              connection can contribute to a community where older
              adults feel respected and included.
            </p>
            <Link to="/contact" className="primary-button about-cta-button">
              Connect With Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
