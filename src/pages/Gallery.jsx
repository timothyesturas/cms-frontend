import { useState } from "react";
import {
  Image as ImageIcon,
  Video,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import "../styles/Gallery.css";

function Gallery() {
  const [activeTab, setActiveTab] = useState("images");
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace these sample paths with your church's actual images.
  const images = [
    {
      id: 1,
      src: "/gallery/worship-1.jpg",
      title: "Sunday Worship",
      category: "Worship",
    },
    {
      id: 2,
      src: "/gallery/fellowship-1.jpg",
      title: "Church Fellowship",
      category: "Fellowship",
    },
    {
      id: 3,
      src: "/gallery/prayer-1.jpg",
      title: "Prayer Gathering",
      category: "Prayer",
    },
    {
      id: 4,
      src: "/gallery/youth-1.jpg",
      title: "Youth Fellowship",
      category: "Youth",
    },
    {
      id: 5,
      src: "/gallery/worship-2.jpg",
      title: "Praise and Worship",
      category: "Worship",
    },
    {
      id: 6,
      src: "/gallery/event-1.jpg",
      title: "Church Celebration",
      category: "Events",
    },
    {
      id: 7,
      src: "/gallery/bible-study-1.jpg",
      title: "Bible Study",
      category: "Bible Study",
    },
    {
      id: 8,
      src: "/gallery/outreach-1.jpg",
      title: "Community Outreach",
      category: "Outreach",
    },
  ];

  // Replace these sample paths with your church's actual videos.
  const videos = [
    {
      id: 1,
      src: "/gallery/videos/worship-service.mp4",
      poster: "/gallery/worship-1.jpg",
      title: "Sunday Worship Service",
      category: "Worship",
    },
    {
      id: 2,
      src: "/gallery/videos/church-activity.mp4",
      poster: "/gallery/event-1.jpg",
      title: "Church Activities",
      category: "Events",
    },
    {
      id: 3,
      src: "/gallery/videos/youth-fellowship.mp4",
      poster: "/gallery/youth-1.jpg",
      title: "Youth Fellowship",
      category: "Youth",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const currentItems = activeTab === "images" ? images : videos;

  const categories = [
    "All",
    ...new Set(currentItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "All"
      ? currentItems
      : currentItems.filter(
          (item) => item.category === activeCategory
        );

  function changeTab(tab) {
    setActiveTab(tab);
    setActiveCategory("All");
  }

  function changeImage(direction) {
    if (selectedImage === null) return;

    const currentIndex = filteredItems.findIndex(
      (image) => image.id === selectedImage.id
    );

    const nextIndex =
      (currentIndex + direction + filteredItems.length) %
      filteredItems.length;

    setSelectedImage(filteredItems[nextIndex]);
  }

  return (
    <section className="gallery-page section">
      <div className="section-container">
        {/* Page Heading */}
        <div className="gallery-heading">
          <span className="section-label">
            MOMENTS THAT MATTER
          </span>

          <h1>
            Our <span>Gallery.</span>
          </h1>

          <p>
            Celebrate the moments we share as a church family,
            from worship services and fellowship to special events
            and community activities.
          </p>
        </div>

        {/* Images and Videos Tabs */}
        <div
          className="gallery-tabs"
          role="tablist"
          aria-label="Gallery media type"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "images"}
            className={`gallery-tab ${
              activeTab === "images" ? "active" : ""
            }`}
            onClick={() => changeTab("images")}
          >
            <ImageIcon size={18} />
            Images
            <span className="gallery-tab-count">
              {images.length}
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "videos"}
            className={`gallery-tab ${
              activeTab === "videos" ? "active" : ""
            }`}
            onClick={() => changeTab("videos")}
          >
            <Video size={18} />
            Videos
            <span className="gallery-tab-count">
              {videos.length}
            </span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`gallery-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        {activeTab === "images" && (
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <button
                type="button"
                className="gallery-card"
                key={item.id}
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-card-image">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-card-overlay">
                    <span>View Image</span>
                  </div>
                </div>

                <div className="gallery-card-info">
                  <span className="gallery-card-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && (
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <article
                className="gallery-video-card"
                key={item.id}
              >
                <div className="gallery-video-player">
                  <video
                    controls
                    preload="metadata"
                    poster={item.poster}
                    playsInline
                  >
                    <source
                      src={item.src}
                      type="video/mp4"
                    />
                    Your browser does not support video playback.
                  </video>
                </div>

                <div className="gallery-card-info">
                  <span className="gallery-card-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="gallery-empty">
            {activeTab === "images" ? (
              <ImageIcon size={36} />
            ) : (
              <Video size={36} />
            )}

            <h2>No {activeTab} available</h2>

            <p>
              There are currently no {activeTab} in this category.
              Check back later for more church memories.
            </p>
          </div>
        )}

        {/* Gallery Footer */}
        <div className="gallery-footer">
          <p>
            Every moment is a reminder of God's goodness and the
            blessing of being part of a church family.
          </p>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            className="gallery-lightbox-nav previous"
            onClick={(event) => {
              event.stopPropagation();
              changeImage(-1);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>

          <button
            type="button"
            className="gallery-lightbox-nav next"
            onClick={(event) => {
              event.stopPropagation();
              changeImage(1);
            }}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;