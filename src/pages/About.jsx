import { Link } from "react-router-dom";
import {
  HeartHandshake,
  BookOpen,
  Users,
  HandHeart,
  Target,
  Eye,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import "../styles/About.css";

function About() {
  // Replace these empty values with the church's official information.
  const church = {
    name: "God's Faithful Stewards Christian Ministry Inc.",
    address: "",
    phone: "",
    email: "",
    officeHours: "",
    facebookUrl: "https://www.facebook.com/gfscmi",
    googleMapsUrl: "",
  };

  const hasAddress = Boolean(church.address.trim());

  const mapUrl = church.googleMapsUrl.trim()
    ? church.googleMapsUrl
    : hasAddress
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          church.address
        )}`
      : "";

  const mapEmbedUrl = hasAddress
    ? `https://maps.google.com/maps?q=${encodeURIComponent(
        church.address
      )}&output=embed`
    : "";

  const mission =
    "To serve God faithfully by sharing His Word, nurturing spiritual growth, and demonstrating Christ's love through worship, fellowship, and service.";

  const vision =
    "To be a Christ-centered community where people grow in faith, build meaningful relationships, and live out God's purpose in their lives.";

  const values = [
    {
      icon: HeartHandshake,
      title: "Faith",
      description:
        "Building our lives and ministry on God's Word and trusting His guidance in all that we do.",
    },
    {
      icon: Users,
      title: "Fellowship",
      description:
        "Growing together as a church family through encouragement, unity, prayer, and shared faith.",
    },
    {
      icon: BookOpen,
      title: "God's Word",
      description:
        "Learning and applying the teachings of Scripture in our daily lives.",
    },
    {
      icon: HandHeart,
      title: "Service",
      description:
        "Showing Christ's love through compassion, generosity, and service to others.",
    },
  ];

  return (
    <main className="about-page">
      {/* About the Church */}
      <section className="about-intro-section">
        <div className="about-container">
          <p className="about-eyebrow">ABOUT OUR CHURCH</p>

          <h1>Who We Are</h1>

          <p className="about-intro-text">
            {church.name} is a Christian ministry committed to growing in
            faith, sharing God's Word, and building a community centered on
            Jesus Christ. Through worship, prayer, fellowship, and service,
            we seek to encourage people to develop a deeper relationship
            with God and live according to His purpose.
          </p>
        </div>
      </section>

      {/* Church Background */}
      <section className="about-story-section">
        <div className="about-container about-story-grid">
          <div className="about-story-content">
            <p className="about-eyebrow">OUR STORY</p>

            <h2>A Community United in Christ</h2>

            <p>
              Our church is a place where people can come together to worship
              God, learn from His Word, pray with one another, and strengthen
              their faith.
            </p>

            <p>
              We believe that following Christ involves more than gathering
              for worship. It also means caring for one another, serving our
              community, and reflecting God's love through our everyday
              actions.
            </p>

            <p>
              As a church family, we aim to create an environment where
              individuals and families can grow spiritually, find
              encouragement, and participate in the work of God's ministry.
            </p>
          </div>

          <div className="about-story-image">
            <img
              src="/elderly-care.png"
              alt="Church community gathered for worship"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose-section">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-eyebrow">OUR PURPOSE</p>
            <h2>Our Mission and Vision</h2>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Target size={26} />
              </div>

              <h3>Our Mission</h3>

              <p>{mission}</p>
            </article>

            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Eye size={26} />
              </div>

              <h3>Our Vision</h3>

              <p>{vision}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-eyebrow">WHAT GUIDES US</p>
            <h2>Our Core Values</h2>
            <p>
              The principles that guide our faith, relationships, and service
              as a church community.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact and Location */}
      <section className="about-contact-section">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-eyebrow">GET IN TOUCH</p>
            <h2>Visit or Contact Us</h2>
            <p>
              We welcome you to connect with our church and learn more about
              our worship services and ministry activities.
            </p>
          </div>

          <div className="about-contact-grid">
            <div className="about-contact-information">
              <article className="about-contact-card">
                <div className="about-contact-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3>Church Address</h3>
                  <p>
                    {church.address || "Church address to be added."}
                  </p>
                </div>
              </article>

              <article className="about-contact-card">
                <div className="about-contact-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <h3>Contact Number</h3>
                  <p>{church.phone || "Contact number to be added."}</p>
                </div>
              </article>

              <article className="about-contact-card">
                <div className="about-contact-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <h3>Email Address</h3>
                  <p>{church.email || "Email address to be added."}</p>
                </div>
              </article>

              <article className="about-contact-card">
                <div className="about-contact-icon">
                  <Clock size={22} />
                </div>

                <div>
                  <h3>Service Schedule</h3>
                  <p>{church.officeHours || "Service schedule to be added."}</p>
                </div>
              </article>

              {church.facebookUrl && (
                <a
                  className="about-contact-social"
                  href={church.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                  Visit Our Facebook Page
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            <div className="about-map-card">
              <div className="about-map-heading">
                <MapPin size={21} />
                <div>
                  <h3>Find Our Church</h3>
                  <p>We look forward to welcoming you.</p>
                </div>
              </div>

              {mapEmbedUrl ? (
                <>
                  <div className="about-map-frame">
                    <iframe
                      src={mapEmbedUrl}
                      title="Church location on Google Maps"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>

                  {mapUrl && (
                    <a
                      className="about-map-directions"
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ExternalLink size={16} />
                    </a>
                  )}
                </>
              ) : (
                <div className="about-map-placeholder">
                  <MapPin size={34} />
                  <h3>Church Location</h3>
                  <p>
                    Add the church's official address to display the map
                    and provide directions to visitors.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="about-cta-section">
        <div className="about-container about-cta-content">
          <div>
            <h2>We Would Love to Connect With You</h2>
            <p>
              Have questions about our church, worship services, or ministry
              activities? Feel free to reach out to us.
            </p>
          </div>

          <Link to="/contact" className="about-cta-button">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;