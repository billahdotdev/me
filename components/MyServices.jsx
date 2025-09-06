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
              <h3>Web Development</h3>
              <p>
                Let's build a website that truly connects you with your
                customers, a digital space that feels just right.
              </p>
            </div>
          </div>

          <div
            className="service-item"
            onClick={() => handleServiceClick('web-development')}
          >
            <div className="service-info">
              <h3>SEO/ GEO/ AEO</h3>
              <p>
                Want more people to find you online? I can help your website
                appear when customers search for what you offer.
              </p>
            </div>
          </div>

          <div
            className="service-item"
            onClick={() => handleServiceClick('plugin-development')}
          >
            <div className="service-info">
              <h3>Digital/ Smart Marketing</h3>
              <p>
                Let's grow your business online with smart digital marketing,
                reaching your customers effectively.
              </p>
            </div>
          </div>

          <div
            className="service-item"
            onClick={() => handleServiceClick('plugin-development')}
          >
            <div className="service-info">
              <h3>Brand Identity Design</h3>
              <p>
                I'll build a visual world for your brand, from eye-catching
                logos to social media magic, so your audience instantly 'gets'
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
