
import { Mail, Phone, MapPin, HeartHandshake } from "lucide-react";

function Contact() {
  return (
    <section className="inner-page section">
      <div className="section-container">
        <span className="section-label">LET'S CONNECT</span>
        <h1>Contact Us</h1>
        <p className="inner-page-description">
          Have a question or want to get involved? Reach out to
          learn more about Bantay Matanda Incorporated.
        </p>

        <div className="contact-page-grid">
          <article className="contact-page-card">
            <Mail size={26} />
            <h2>Email</h2>
            <p>Replace this with the organization's verified email.</p>
          </article>

          <article className="contact-page-card">
            <Phone size={26} />
            <h2>Telephone</h2>
            <p>Add the official contact number here.</p>
          </article>

          <article className="contact-page-card">
            <MapPin size={26} />
            <h2>Location</h2>
            <p>Add the organization's official address here.</p>
          </article>
        </div>

        <div className="contact-page-note">
          <HeartHandshake size={23} />
          <p>
            Please confirm the official contact information before
            publishing this page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
