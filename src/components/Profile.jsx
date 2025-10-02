'use client';

export default function Profile({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <button
        className="fixed top-8 right-8 bg-surface border border-border text-foreground w-12 h-12 cursor-pointer z-50 transition-all duration-300 rounded-full flex items-center justify-center shadow-lg hover:bg-surface-hover hover:scale-105"
        onClick={toggleDarkMode}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      <section className="min-h-screen flex items-center justify-center px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/112099343?v=4"
              alt="Masum Billah"
              className="w-32 h-32 rounded-full mx-auto transition-transform duration-300 hover:scale-105 border-2 border-border shadow-xl hover-lift"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight text-foreground">
            Masum Billah
          </h1>

          <p className="text-lg text-muted-foreground mb-12 font-mono">
            @billahdotdev
          </p>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-mono">
              I'm a web developer passionate about turning ideas into simple,
              responsive, and functional websites that help businesses grow.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
