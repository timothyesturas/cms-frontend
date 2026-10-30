import { Link } from "react-router-dom";
import {
  Clock,
  MapPin,
  CalendarDays,
  Church,
  BookOpen,
  HandHeart,
  Users,
  Music,
  ArrowRight,
} from "lucide-react";

function Services() {
  const churchServices = [
    {
      title: "Sunday Worship Service",
      category: "WORSHIP",
      description:
        "Join us for a time of worship, prayer, praise, and biblical teaching as we gather together to celebrate God's goodness and grow in faith.",
      day: "Every Sunday",
      time: "9:00 AM – 11:00 AM",
      location: "Main Church Sanctuary",
      icon: Church,
    },
    {
      title: "Bible Study",
      category: "BIBLE STUDY",
      description:
        "Explore the teachings of the Bible, deepen your understanding of God's Word, and discover how to apply Scripture to your everyday life.",
      day: "Every Wednesday",
      time: "7:00 PM – 8:30 PM",
      location: "Church Fellowship Hall",
      icon: BookOpen,
    },
    {
      title: "Prayer Meeting",
      category: "PRAYER",
      description:
        "Come together in prayer as we seek God's guidance, give thanks for His blessings, and pray for our families, church, and community.",
      day: "Every Friday",
      time: "6:30 PM – 7:30 PM",
      location: "Main Church Sanctuary",
      icon: HandHeart,
    },
    {
      title: "Youth Fellowship",
      category: "YOUTH",
      description:
        "A welcoming gathering for young people to build friendships, strengthen their faith, study God's Word, and encourage one another.",
      day: "Every Saturday",
      time: "3:00 PM – 5:00 PM",
      location: "Church Fellowship Hall",
      icon: Users,
    },
    {
      title: "Praise and Worship",
      category: "WORSHIP",
      description:
        "Gather with fellow believers through music, singing, and heartfelt praise as we express our gratitude and devotion to God.",
      day: "Every Saturday",
      time: "5:00 PM – 6:00 PM",
      location: "Main Church Sanctuary",
      icon: Music,
    },
  ];

  return (
    <>
      <section className="services section" id="church-services">
        <div className="section-container">
          <div className="services-heading">
            <div>
              <span className="section-label">
                OUR WEEKLY GATHERINGS
              </span>

              <h2>
                Church Services and
                <span> Schedules.</span>
              </h2>
            </div>

            <p>
              Find a place to worship, study God's Word, pray
              together, and connect with our church family.
              We welcome you to join us.
            </p>
          </div>

          <div className="church-service-list">
            {churchServices.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <article
                  className="church-service-card"
                  key={service.title}
                >
                  <div className="church-service-icon">
                    <ServiceIcon size={30} />
                  </div>

                  <div className="church-service-content">
                    <span className="church-service-category">
                      {service.category}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="church-service-details">
                      <span>
                        <CalendarDays size={16} />
                        {service.day}
                      </span>

                      <span>
                        <Clock size={16} />
                        {service.time}
                      </span>

                      <span>
                        <MapPin size={16} />
                        {service.location}
                      </span>
                    </div>
                  </div>

                  <div className="church-service-action">
                    <span className="church-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Link
                      to="/contact"
                      aria-label={`Ask about ${service.title}`}
                      className="church-service-link"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact section">
        <div className="section-container home-cta">
          <span className="section-label">PLAN YOUR VISIT</span>

          <h2>
            We'd love to
            <span> worship with you.</span>
          </h2>

          <p>
            Have questions about our service times, location,
            or upcoming gatherings? Contact us. We look forward
            to welcoming you.
          </p>

          <Link to="/contact" className="primary-button">
            Get Service Information <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;