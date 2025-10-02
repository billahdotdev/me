'use client';

import { useState, useEffect } from 'react';
import Profile from './components/Profile';
import MyWork from './components/MyWork';
import MyServices from './components/MyServices';

import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });
  const [showContactModal, setShowContactModal] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('billahdotdev@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleItemClick = (id, event) => {
    event.preventDefault();
    setShowContactModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContactModal = () => {
    setShowContactModal(false);
    setEmailCopied(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Profile isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <MyWork handleCompanyClick={handleItemClick} />

      <MyServices handleServiceClick={handleItemClick} />

      <Footer />

      {showContactModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={closeContactModal}
        >
          <div
            className="relative max-w-md w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-75 animate-pulse"></div>

            {/* Main modal content */}
            <div className="relative bg-surface rounded-3xl p-8 shadow-2xl">
              <button
                onClick={closeContactModal}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-all duration-200 hover:rotate-90 hover:scale-110"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center">
                {/* Profile image with gradient border */}
                <div className="mb-6 relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-sm opacity-75"></div>
                  <img
                    src="https://avatars.githubusercontent.com/u/112099343?v=4"
                    alt="Masum Billah"
                    className="relative w-28 h-28 rounded-full border-4 border-surface shadow-xl"
                  />
                </div>

                <h3 className="text-3xl font-semibold text-foreground mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Let's Work Together
                </h3>

                <p className="text-muted-foreground italic mb-8 text-sm">
                  Drop me a line anytime ✨
                </p>

                {/* Email display with gradient border */}
                <div className="relative mb-6 group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                  <div className="relative bg-background border border-border rounded-2xl p-5">
                    <p className="text-foreground text-base break-all">
                      billahdotdev@gmail.com
                    </p>
                  </div>
                </div>

                {/* Copy button with gradient background */}
                <button
                  onClick={copyEmail}
                  className="relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-200 w-full justify-center group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-105"></div>
                  <div className="relative flex items-center gap-2 text-white">
                    {emailCopied ? (
                      <>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-bounce"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className="font-semibold">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:scale-110 transition-transform"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span className="font-semibold">Copy Email</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
