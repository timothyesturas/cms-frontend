
import { Image as ImageIcon } from "lucide-react";

function Gallery() {
  return (
    <section className="inner-page section">
      <div className="section-container">
        <span className="section-label">MOMENTS THAT MATTER</span>
        <h1>Our Gallery</h1>
        <p className="inner-page-description">
          A collection of moments, activities, and community
          experiences worth sharing.
        </p>

        <div className="placeholder-card">
          <ImageIcon size={36} />
          <h2>Our memories will be featured here</h2>
          <p>
            Add approved photographs from your organization's
            activities and events to build your gallery.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
