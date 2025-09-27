'use client';

export default function Profile({
  isDarkMode,
  toggleDarkMode,
  scrollProgress,
}) {
  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-blue-400 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Dark Mode Toggle */}
      <button
        className="fixed top-8 right-8 bg-surface border border-border text-foreground w-12 h-12 cursor-pointer z-50 transition-all duration-300 rounded-full flex items-center justify-center shadow-lg hover:bg-surface-hover hover:scale-105 hover:shadow-xl hover-glow"
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
            className="transition-transform duration-300 hover:rotate-12"
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
            className="transition-transform duration-300 hover:rotate-12"
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 animate-fade-in-up animate-delay-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/112099343?v=4"
              alt="Masum Billah"
              className="w-32 h-32 rounded-full block relative z-10 transition-transform duration-300 hover:scale-105 border-2 border-border shadow-xl hover-lift"
            />
            <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-accent to-blue-400 opacity-10 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-custom z-0" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight text-foreground">
            Masum Billah
          </h1>

          <p className="text-lg text-muted-foreground mb-12 font-mono">
            @billahdotdev
          </p>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-mono">
              I'm a web developer passionate about crafting accessible,
              pixel-perfect digital experiences that blend thoughtful design
              with robust engineering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
