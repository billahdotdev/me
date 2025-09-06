'use client';

import './MyServices.css';

export default function MyServices({ handleServiceClick }) {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="section-title">Services I Offer</h2>
        <div className="services-grid">
          <div
            className="service-item"
            onClick={() => handleServiceClick('product-design')}
          >
            <div className="service-info">
              <h3>Product Design</h3>
              <p>
                I help you figure out what to build and how to build it. My
                approach combines strong design fundamentals with practical
                technical knowledge so we can ship something people love.
              </p>
            </div>
          </div>

          <div
            className="service-item"
            onClick={() => handleServiceClick('web-development')}
          >
            <div className="service-info">
              <h3>Web App Development</h3>
              <p>
                I create web applications that do exactly what they need to do -
                no bloat, no unnecessary features. Just clean code, thoughtful
                interfaces, and solutions that make sense.
              </p>
            </div>
          </div>

          <div
            className="service-item"
            onClick={() => handleServiceClick('plugin-development')}
          >
            <div className="service-info">
              <h3>Plugin Development</h3>
              <p>
                I build efficient plugins that solve real problems. Adobe and
                Grammarly trust my code because it works reliably and respects
                how people actually use software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
