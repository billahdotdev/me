'use client';

import './MyWork.css';

export default function MyWork({ handleCompanyClick }) {
  const handleProjectClick = (projectId, githubUrl) => {
    // Open GitHub repository in new tab
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
    // Still trigger popup for additional project details
    handleCompanyClick(projectId);
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="section-title">Projects I've Created</h2>
        <div className="companies-grid">
          <div
            className="company-item clickable"
            onClick={() =>
              handleProjectClick('ecommerce', 'https://billah.dev')
            }
          >
            <div className="company-info">
              <h3>bllah.dev</h3>
              <p>
                This website was built to tell my story. Here, you'll get to
                know who I am, what I do, and the services I offer. It's more
                than just a portfolio. It's a glimpse into my journey as a
                creator and a window into the digital products I'm building
                along the way.
              </p>
            </div>
          </div>

          <div
            className="company-item clickable"
            onClick={() =>
              handleProjectClick(
                'taskmanager',
                'https://billahdotdev.github.io/dhakateez/'
              )
            }
          >
            <div className="company-info">
              <h3>DhakaTeez</h3>
              <p>
                I created this landing page before launching my clothing venture
                as a 'coming soon' preview. It reflects how serious I am about
                my business and the passion I put into my work.
              </p>
            </div>
          </div>

          <div
            className="company-item clickable"
            onClick={() =>
              handleProjectClick(
                'weather',
                'https://billahdotdev.github.io/brandotory/'
              )
            }
          >
            <div className="company-info">
              <h3>Brandotory</h3>
              <p>
                I created this website to show how powerful good branding can
                be. Brandotory is where creativity meets strategy, helping
                creators and entrepreneurs build brands that don’t just look
                good but truly connect. It's a toolkit for anyone ready to build
                something meaningful.
              </p>
            </div>
          </div>

          <div
            className="company-item clickable"
            onClick={() => handleCompanyClick('your-website')}
          >
            <div className="company-logo your-company-logo">*</div>
            <div className="company-info">
              <h3>Your Website</h3>
              <p>
                Your business has a story, and I’m here to help you tell it
                online beautifully and effectively. If you have an idea you’re
                passionate about, I’ll help bring it to life with stunning,
                user-friendly websites that truly connect with your audience.
                Let’s create something special together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
