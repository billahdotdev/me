import './Footer.css';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="portfolio-container">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://x.com/billahdotdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X (Twitter)"
            >
              X
            </a>
            <a
              href="https://linkedin.com/in/billahdotdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/billahdotdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
            >
              GitHub
            </a>
           
          </div>
          <div className="brand">
            <div className="brand-icon">MB</div>
            Masum Billah
          </div>
        </div>
      </div>
    </footer>
  );
}
