
import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";

function Programs() {
  return (
    <section className="inner-page section">
      <div className="section-container">
        <span className="section-label">OUR INITIATIVES</span>
        <h1>Programs, Events, and Activities</h1>
        <p className="inner-page-description">
          Discover activities and initiatives that encourage
          connection, participation, and support for older adults.
        </p>

        <div className="placeholder-card">
          <CalendarDays size={36} />
          <h2>Our programs are being organized</h2>
          <p>
            Program descriptions, event schedules, and activity
            announcements will appear here.
          </p>
          <Link to="/contact" className="text-link">
            Ask us for more information <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Programs;
