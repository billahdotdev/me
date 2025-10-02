'use client';

export default function MyServices({ handleServiceClick }) {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description:
        "Let's build a website that truly connects you with your customers, a digital space that feels just right.",
    },
    {
      id: 'seo-optimization',
      title: 'SEO/ GEO/ AEO',
      description:
        'Want more people to find you online? I can help your website appear when customers search for what you offer.',
    },
    {
      id: 'digital-marketing',
      title: 'Digital/ Smart Marketing',
      description:
        "Let's grow your business online with smart digital marketing, reaching your customers effectively.",
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      description:
        "I'll build a visual world for your brand, from eye-catching logos to social media magic, so your audience instantly 'gets' you.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-16 text-foreground">
          Services I Offer
        </h2>

        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer transition-all duration-300 hover-lift"
              onClick={(e) => handleServiceClick(service.id, e)}
            >
              <div className="p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all duration-300">
                <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300 mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
