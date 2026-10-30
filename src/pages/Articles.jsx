import { useState } from "react";
import { ArrowRight, ExternalLink, Newspaper } from "lucide-react";
import "../styles/Articles.css";

function Articles() {
  const facebookPageUrl = "https://www.facebook.com/gfscmi";

  // Add your church's actual Facebook post URLs here.
  const posts = [
    {
      id: 1,
      url: "https://www.facebook.com/gfscmi/posts/pfbid0NsuEDgNeeFTugLp1c2wJVKKdrgxWosaT7xJ52EgzyidQytJ67dLStwNBmS1LGBu9l",
    },
    {
      id: 2,
      url: "https://www.facebook.com/gfscmi/posts/pfbid0VfPJTtgdZYP1kErDnCjBtiN4uJnB87jk7aB3LsCXAdFc1t5Hx2dmsyuGfTY1APCSl",
    },
    {
      id: 3,
      url: "https://www.facebook.com/gfscmi/posts/pfbid0PcVY5V5esKxzp9o8CuoknHvZkY6P6g5VJdN96UDYx8HTc7saZSQStKSbVfzZR8Jjl",
    },
    {
      id: 4,
      url: "https://www.facebook.com/gfscmi/posts/pfbid0ZjH7tRGizoAvzEYijyBzX2K7DVNFvhbbhFNHmfnXofFmXQmq3CaJWnBPpSygbyZMl",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < posts.length;

  function handleSeeMore() {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + 3, posts.length)
    );
  }

  return (
    <section className="articles-page section">
      <div className="section-container">
        <div className="articles-heading">
          <div>
            <span className="section-label">
              CHURCH NEWS & UPDATES
            </span>

            <h1>
              Articles and <span>Updates.</span>
            </h1>

            <p>
              Stay connected with our church through announcements,
              ministry activities, events, and messages shared on
              our Facebook page.
            </p>
          </div>

          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="articles-facebook-button"
          >
            <ExternalLink size={18} />
            Visit Our Facebook
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="articles-feed-heading">
          <div className="articles-feed-icon">
            <Newspaper size={23} />
          </div>

          <div>
            <h2>Latest Church Updates</h2>
            <p>
              Read the latest announcements and updates from our church.
            </p>
          </div>
        </div>

        {visiblePosts.length > 0 ? (
          <div className="articles-post-grid">
            {visiblePosts.map((post) => {
              const embedUrl =
                `https://www.facebook.com/plugins/post.php?href=${
                  encodeURIComponent(post.url)
                }&show_text=true&width=500`;

              return (
                <article
                  className="articles-post-card"
                  key={post.id}
                >
                  <div className="articles-post-embed">
                    <iframe
                      title={`Church Facebook post ${post.id}`}
                      src={embedUrl}
                      loading="lazy"
                      scrolling="no"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>

                  <div className="articles-post-footer">
                    <span>CHURCH UPDATE</span>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="articles-text-link"
                    >
                      View on Facebook
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="articles-empty-state">
            <Newspaper size={36} />

            <h2>No articles available</h2>

            <p>
              Please visit our Facebook page for the latest church updates.
            </p>

            <a
              href={facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="articles-text-link"
            >
              Visit Facebook
              <ArrowRight size={17} />
            </a>
          </div>
        )}

        <div className="articles-see-more-container">
          {hasMorePosts && (
            <button
              type="button"
              className="articles-see-more-button"
              onClick={handleSeeMore}
            >
              See More Posts
              <ArrowRight size={17} />
            </button>
          )}

          {!hasMorePosts && posts.length > 3 && (
            <button
              type="button"
              className="articles-see-more-button"
              onClick={() => setVisibleCount(3)}
            >
              Show Less
            </button>
          )}
        </div>

        <div className="articles-bottom-link">
          <p>
            Follow our Facebook page for more church announcements,
            upcoming services, and community activities.
          </p>

          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="articles-text-link"
          >
            See all updates on Facebook
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Articles;