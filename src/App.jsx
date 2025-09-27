'use client';

import { useState, useEffect } from 'react';
import Profile from './components/Profile';
import MyWork from './components/MyWork';
import MyServices from './components/MyServices';
import TestUserWebsite from './components/TestUserWebsite';
import Footer from './components/Footer';
import './index.css';

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
    document.documentElement.className = isDarkMode ? 'dark' : 'light';
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

      const direction = centerX > window.innerWidth / 2 ? 'left' : 'right';

      setPopupPosition({
        x: centerX,
        y: centerY,
        direction,
        elementRect: rect,
      });
    }

    if (company === 'your-website') {
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
      image: 'https://avatars.githubusercontent.com/u/112099343?v=4',
      email: 'billahdotdev@gmail.com',
    };

    switch (activePopup) {
      case 'product-design':
        return {
          ...baseContent,
          title: 'Ready to Build Together?',
          subtitle: 'Clean code meets thoughtful design',
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
          title: "Let's Work Together",
          subtitle: 'Drop me a line anytime',
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
    const offset = 30;

    let x, y;
    const { direction } = popupPosition;

    if (direction === 'left') {
      x = popupPosition.x - popupWidth - offset;
    } else {
      x = popupPosition.x + offset;
    }

    y = popupPosition.y - popupHeight / 2;

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
    <div
      className={`min-h-screen font-mono transition-all duration-300 bg-background text-foreground ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <Profile
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        scrollProgress={scrollProgress}
        isLoaded={isLoaded}
      />

      <MyWork handleCompanyClick={handleCompanyClick} />

      <MyServices handleServiceClick={handleServiceClick} />

      <TestUserWebsite />

      <Footer />

      {/* Contact Popup */}
      {activePopup && (
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-all duration-300 ${
            activePopup ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closePopup}
        >
          <div
            className={`${
              isDarkMode
                ? 'bg-surface border-border text-foreground'
                : 'bg-white border-gray-200 text-gray-900 shadow-xl'
            } rounded-2xl p-10 transition-all duration-400 backdrop-blur-xl animate-slide-in-scale hover-glow ${
              isClosing ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
            } ${
              popupPosition.direction === 'left'
                ? 'origin-right'
                : 'origin-left'
            }`}
            onClick={(e) => e.stopPropagation()}
            style={activePopup ? getPopupStyle() : {}}
          >
            <button
              className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isDarkMode
                  ? 'hover:bg-surface-hover text-muted-foreground hover:text-foreground'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
              } hover:rotate-90 hover-lift`}
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

            <div className="text-center">
              <img
                src={popupContent.image || '/placeholder.svg'}
                alt="Masum Billah"
                className={`w-20 h-20 rounded-full mx-auto mb-5 border-2 ${
                  isDarkMode ? 'border-border' : 'border-gray-200'
                } shadow-lg hover-lift`}
              />
              <h3
                className={`text-xl font-medium mb-3 ${
                  isDarkMode ? 'text-foreground' : 'text-gray-900'
                }`}
              >
                {popupContent.title}
              </h3>
              {popupContent.subtitle && (
                <p
                  className={`text-sm mb-5 italic ${
                    isDarkMode ? 'text-muted-foreground' : 'text-gray-600'
                  }`}
                >
                  {popupContent.subtitle}
                </p>
              )}
              <p
                className={`text-sm mb-6 px-3 py-2 rounded-lg font-mono ${
                  isDarkMode
                    ? 'bg-surface text-muted-foreground'
                    : 'bg-gray-50 text-gray-700 border border-gray-200'
                }`}
              >
                {popupContent.email}
              </p>
              <button
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 min-w-[140px] hover-lift ${
                  emailCopied
                    ? 'bg-accent text-white scale-105 animate-gentle-bounce'
                    : isDarkMode
                    ? 'bg-surface-hover text-foreground hover:bg-border hover:-translate-y-0.5 hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-lg border border-gray-200'
                }`}
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
      )}
    </div>
  );
}

export default App;
