import React, { useEffect, useRef } from 'react';
import { Page } from '../types';
import { FEATURED_ABAYAS } from '../constants';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
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

  const handleVideoClick = (e: React.MouseEvent<HTMLElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      if (video.paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  };

  const handleCardDoubleClick = () => {
    setCurrentPage('shop');
  };

  return (
    <>
      <div className="space-y-24 md:space-y-32 pb-24">
        {/* Hero Section */}
        <section 
          ref={addToRefs}
          className="fade-in min-h-[80vh] md:min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url('https://picsum.photos/seed/hero-bg/1920/1080')` }}
        >
          <div className="bg-black/30 w-full h-full flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl md:text-6xl font-playfair text-cream-white mb-4 leading-tight">
              For the women who never step out without grace.
            </h1>
            <p className="text-cream-white/90 text-lg mb-8 max-w-2xl">
              Embrace an elegance that is second nature. Discover couture abayas designed for the modern woman of faith.
            </p>
            <button
              onClick={() => setCurrentPage('shop')}
              className="bg-soft-gold text-charcoal-black font-semibold py-3 px-8 rounded-sm hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              Shop Custom Abayas
            </button>
          </div>
        </section>

        {/* Brand Story Teaser */}
        <section ref={addToRefs} className="fade-in container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-charcoal-black dark:text-cream-white mb-4">
            A Friendship Stitched Into Fabric
          </h2>
          <p className="text-lg text-charcoal-black/80 dark:text-cream-white/80 max-w-3xl mx-auto leading-relaxed">
            Mayfa Couture was born from girls who found power in modesty and expression in every fold of an abaya.
            It's not just clothing, it's identity.
          </p>
        </section>

        {/* Video Gallery */}
        <section ref={addToRefs} className="fade-in container mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal-black dark:text-cream-white">Collection — in motion</h2>
            <p className="text-sm text-charcoal-black/60 dark:text-cream-white/60">Tap to play. Double-tap to customize.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_ABAYAS.slice(0, 6).map((abaya, index) => (
               <figure
                key={abaya.id}
                className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-cream-white/60 dark:bg-charcoal-black/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={handleVideoClick}
                onDoubleClick={handleCardDoubleClick}
              >
                <div className="overflow-hidden aspect-[4/5]">
                   <video
                      className="w-full h-full object-cover pointer-events-none"
                      muted
                      playsInline
                      loop
                      preload="metadata"
                      poster={abaya.imageUrl}
                    >
                      <source src={abaya.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>
                <figcaption className="text-center p-4">
                  <h3 className="text-xl font-playfair text-charcoal-black dark:text-cream-white">
                    {abaya.name}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;