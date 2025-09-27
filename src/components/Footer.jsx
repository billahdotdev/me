'use client';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/billahdotdev',
      label: 'View GitHub profile',
    },
    {
      name: 'X',
      url: 'https://x.com/billahdotdev',
      label: 'Follow on X (Twitter)',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/billahdotdev',
      label: 'Connect on LinkedIn',
    },
  ];

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-mono hover:-translate-y-0.5 hover-lift"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-muted-foreground text-sm font-mono">
            <div className="w-6 h-6 bg-foreground text-background rounded flex items-center justify-center text-xs font-bold hover-lift">
              MB
            </div>
            Masum Billah
          </div>
        </div>
      </div>
    </footer>
  );
}
