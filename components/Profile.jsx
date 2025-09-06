'use client';
import './Profile.css';

export default function Profile({
  isDarkMode,
  toggleDarkMode,
  scrollProgress,
}) {
  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      <section className="portfolio-section hero-section">
        <div className="portfolio-container">
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img
                src="https://avatars.githubusercontent.com/u/112099343?v=4"
                alt="Masum Billah"
                className="profile-image"
              />
              <div className="profile-pulse" />
            </div>
            <h1 className="name">Masum Billah</h1>
            <p className="handle">@billahdotdev</p>
            <p className="bio">
              I'm a web developer, bringing digital dreams to life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
