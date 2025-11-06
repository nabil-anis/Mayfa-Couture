import React, { useEffect, useRef } from 'react';

const AboutPage: React.FC = () => {
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={addToRefs} className="fade-in max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair text-charcoal-black dark:text-cream-white mb-6">
            Our Story
          </h1>
          <p className="text-lg text-charcoal-black/80 dark:text-cream-white/80 leading-relaxed mb-12">
            We’re not just a brand; we’re a reflection of women who never have to choose between elegance and modesty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16 md:mt-24">
          <div ref={addToRefs} className="fade-in space-y-6 text-charcoal-black dark:text-cream-white" style={{ transitionDelay: '200ms' }}>
            <h2 className="text-3xl font-playfair">Born from Identity</h2>
            <p className="leading-loose">
              Mayfa Couture was born from girls who never remember leaving the house without an abaya — it’s not just clothing, it’s identity. It's the first thing we reach for, a silent statement of who we are before we've even spoken.
            </p>
            <p className="leading-loose">
              Together, we created Mayfa so women like us can wear it and slay in a halal manner. We believe that true confidence shines brightest when it's rooted in one's values, and that elegance is a language understood by all.
            </p>
          </div>
          <div ref={addToRefs} className="fade-in" style={{ transitionDelay: '400ms' }}>
            <div className="relative aspect-w-4 aspect-h-5">
              <img
                src="https://picsum.photos/seed/founders/800/1000"
                alt="Silhouettes of Mayfa Couture founders"
                className="w-full h-full object-cover filter blur-sm grayscale brightness-75"
              />
              <div className="absolute inset-0 bg-deep-olive/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;