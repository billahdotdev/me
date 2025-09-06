'use client';

import { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import MyWork from '../components/MyWork';
import MyServices from '../components/MyServices';
import Footer from '../components/Footer';
import './app.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activePopup, setActivePopup] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [popupPosition, setPopupPosition] = useState({
    x: 0,
    y: 0,
    direction: 'right',
  });

  useEffect(() => {
    document.documentElement.className = isDarkMode
      ? 'dark-theme'
      : 'light-theme';
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);
    };

    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleLoad);
    handleLoad();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCompanyClick = (company, event) => {
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Determine best direction to show popup
      const direction = centerX > window.innerWidth / 2 ? 'left' : 'right';

      setPopupPosition({
        x: centerX,
        y: centerY,
        direction,
        elementRect: rect,
      });
    }

    if (company === 'adobe') {
      window.open('https://www.adobe.com', '_blank');
    } else if (company === 'grammarly') {
      window.open('https://www.grammarly.com', '_blank');
    } else if (company === 'your-website') {
      if (activePopup === 'your-website') {
        closePopup();
      } else {
        setActivePopup('your-website');
        setIsClosing(false);
      }
    }
  };

  const handleServiceClick = (service, event) => {
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Determine best direction to show popup
      const direction = centerX > window.innerWidth / 2 ? 'left' : 'right';

      setPopupPosition({
        x: centerX,
        y: centerY,
        direction,
        elementRect: rect,
      });
    }

    if (activePopup === service) {
      closePopup();
    } else {
      setActivePopup(service);
      setIsClosing(false);
    }
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActivePopup(null);
      setIsClosing(false);
      setEmailCopied(false);
    }, 400);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('billahdotdev@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const getPopupContent = () => {
    const baseContent = {
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/popup-EP9aTiigeajV99a1kU0vZcFYMjDFGc.png',
      email: 'billahdotdev@gmail.com',
    };

    switch (activePopup) {
      case 'product-design':
        return {
          ...baseContent,
          title: "Let's Design Something Amazing",
          subtitle: 'From concept to pixel-perfect execution',
        };
      case 'web-development':
        return {
          ...baseContent,
          title: 'Ready to Build Together?',
          subtitle: 'Clean code meets thoughtful design',
        };
      case 'plugin-development':
        return {
          ...baseContent,
          title: 'Need a Reliable Plugin?',
          subtitle: 'Efficient solutions that just work',
        };
      case 'your-website':
        return {
          ...baseContent,
          title: 'Ready to Build Together?',
          subtitle: 'Clean code meets thoughtful design',
        };
      default:
        return {
          ...baseContent,
          title: "Let's Work Together",
          subtitle: 'Drop me a line anytime',
        };
    }
  };

  const getPopupStyle = () => {
    const popupWidth = 350;
    const popupHeight = 400;
    const margin = 20;
    const offset = 30; // Distance from clicked element

    let x, y;
    const { direction } = popupPosition;

    // Position based on direction and element bounds
    if (direction === 'left') {
      x = popupPosition.x - popupWidth - offset;
    } else {
      x = popupPosition.x + offset;
    }

    // Center vertically on the clicked element
    y = popupPosition.y - popupHeight / 2;

    // Smart boundary detection
    if (x < margin) {
      x = margin;
    }
    if (x + popupWidth > window.innerWidth - margin) {
      x = window.innerWidth - popupWidth - margin;
    }

    if (y < margin) {
      y = margin;
    }
    if (y + popupHeight > window.innerHeight - margin) {
      y = window.innerHeight - popupHeight - margin;
    }

    // Add scroll offset
    y += window.scrollY;

    return {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transform: 'none',
      transformOrigin: direction === 'left' ? 'right center' : 'left center',
    };
  };

  const popupContent = getPopupContent();

  return (
    <div className={`portfolio-app ${isLoaded ? 'loaded' : ''}`}>
      <Profile
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        scrollProgress={scrollProgress}
        isLoaded={isLoaded}
      />
      <MyWork handleCompanyClick={handleCompanyClick} />
      <MyServices handleServiceClick={handleServiceClick} />
      <Footer />

      {/* Contact Popup */}
      <div
        className={`popup-overlay ${activePopup ? 'active' : ''}`}
        onClick={closePopup}
      >
        <div
          className={`popup ${isClosing ? 'closing' : ''} popup-${
            popupPosition.direction
          }`}
          onClick={(e) => e.stopPropagation()}
          style={activePopup ? getPopupStyle() : {}}
        >
          <button
            className="popup-close"
            onClick={closePopup}
            aria-label="Close popup"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="popup-profile">
            <img
              src={popupContent.image || '/placeholder.svg'}
              alt="Aleksandar Tasevski"
            />
            <h3>{popupContent.title}</h3>
            {popupContent.subtitle && (
              <p className="popup-subtitle">{popupContent.subtitle}</p>
            )}
            <p className="popup-email">{popupContent.email}</p>
            <button
              className={`copy-email-btn ${emailCopied ? 'copied' : ''}`}
              onClick={copyEmail}
            >
              {emailCopied ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
