'use client';

export default function MyWork({ handleCompanyClick }) {
  const handleProjectClick = (projectId, githubUrl, event) => {
    // Open GitHub repository in new tab
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
    // Still trigger popup for additional project details
    handleCompanyClick(projectId, event);
  };

  const projects = [
    {
      id: 'billah-dev',
      title: 'billah.dev',
      description:
        "This website was built to tell my story. Here, you'll get to know who I am, what I do, and the services I offer. It's more than just a portfolio—it's a glimpse into my journey as a creator.",
      url: 'https://billah.dev',
      year: '2024',
    },
    {
      id: 'dhakateez',
      title: 'DhakaTeez',
      description:
        "I created this landing page before launching my clothing venture as a 'coming soon' preview. It reflects how serious I am about my business and the passion I put into my work.",
      url: 'https://billahdotdev.github.io/dhakateez/',
      year: '2024',
    },
    {
      id: 'brandotory',
      title: 'Brandotory',
      description:
        'I created this website to show how powerful good branding can be. Brandotory is where creativity meets strategy, helping creators and entrepreneurs build brands that truly connect.',
      url: 'https://billahdotdev.github.io/brandotory/',
      year: '2023',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-16 text-foreground animate-fade-in-up animate-delay-400">
          Projects I've Created
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer transition-all duration-300 hover:translate-y-[-4px] animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              onClick={(e) => handleProjectClick(project.id, project.url, e)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all duration-300">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="text-sm text-muted font-mono">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Your Website CTA */}
          <div
            className="group cursor-pointer transition-all duration-300 hover:translate-y-[-4px] animate-fade-in-up animate-delay-1200"
            onClick={(e) => handleCompanyClick('your-website', e)}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 p-6 rounded-xl border border-dashed border-border hover:border-accent hover:bg-surface transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center text-accent text-2xl font-bold group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <span className="text-green-700">*</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                  Your Website
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your business has a story, and I'm here to help you tell it
                  online beautifully and effectively. If you have an idea you're
                  passionate about, I'll help bring it to life with stunning,
                  user-friendly websites that truly connect with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
