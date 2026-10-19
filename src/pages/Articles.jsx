
import { Link } from "react-router-dom";
import { Newspaper, ArrowRight } from "lucide-react";

function Articles() {
  return (
    <section className="inner-page section">
      <div className="section-container">
        <span className="section-label">NEWS AND INSIGHTS</span>
        <h1>Articles and Updates</h1>
        <p className="inner-page-description">
          Read news, useful information, and updates related to
          elderly care and community involvement.
        </p>

        <div className="placeholder-card">
          <Newspaper size={36} />
          <h2>Articles coming soon</h2>
          <p>
            News stories, announcements, and informative articles
            will be published here.
          </p>
          <Link to="/contact" className="text-link">
            Contact our organization <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Articles;
