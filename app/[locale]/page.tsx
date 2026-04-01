import {useTranslations} from 'next-intl';
import {routing} from '../../src/i18n/routing';
import {notFound} from 'next/navigation';
import {ThemeToggle} from '../../components/ThemeToggle';
import {GalleryCarousel} from '../../components/GalleryCarousel';

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  return <HomeContent locale={locale} />;
}

function HomeContent({locale}: {locale: string}) {
  const t = useTranslations('hero');
  const tNav = useTranslations('nav');
  const tAbout = useTranslations('about');
  const tExplore = useTranslations('explore');
  const tGallery = useTranslations('gallery');
  const tTips = useTranslations('tips');
  const tReviews = useTranslations('reviews');
  const tStories = useTranslations('stories');
  const tFaq = useTranslations('faq');
  const tInfo = useTranslations('info');
  const tMap = useTranslations('map');
  const tFooter = useTranslations('footer');
  const tLegal = useTranslations('legal');
  
  const reviews = tReviews.raw('items') as {name: string, date: string, text: string}[];
  const exploreItems = tExplore.raw('items') as {title: string, desc: string}[];
  const tipsItems = tTips.raw('items') as {title: string, desc: string}[];
  const storyItems = [1, 2, 3, 4].map(id => ({
    id: `story-${id}`,
    ...tStories.raw(`items.story-${id}`) as {title: string, author: string, country: string, excerpt: string}
  }));
  const faqItems = tFaq.raw('items') as {title: string, desc: string}[];
  
  const galleryImages = [
    '/gallery/images (1).jpg',
    '/gallery/images (2).jpg',
    '/gallery/images (3).jpg',
    '/gallery/images (4).jpg',
    '/gallery/images (5).jpg',
    '/gallery/images (6).jpg',
    '/gallery/images (7).jpg',
    '/gallery/images (8).jpg'
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF8] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#f0f0f0] font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      {/* 1. Header (Minimalist Editorial) */}
      <header className="bg-[#FDFCF8]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-black/5 dark:border-white/5 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <h1 className="text-xl md:text-2xl font-serif text-black dark:text-white tracking-widest uppercase">
              {t('title')}
            </h1>
            <nav className="hidden lg:flex space-x-12">
              <a href="#about" className="text-[11px] font-semibold tracking-[0.2em] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white uppercase transition-colors">{tNav('about')}</a>
              <a href="#explore" className="text-[11px] font-semibold tracking-[0.2em] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white uppercase transition-colors">{tNav('explore')}</a>
              <a href="#gallery" className="text-[11px] font-semibold tracking-[0.2em] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white uppercase transition-colors">{tNav('gallery')}</a>
              <a href="#stories" className="text-[11px] font-semibold tracking-[0.2em] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white uppercase transition-colors">{tNav('stories')}</a>
              <a href="#faq" className="text-[11px] font-semibold tracking-[0.2em] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white uppercase transition-colors">{tNav('faq')}</a>
              <a href="#reviews" className="text-[11px] font-semibold tracking-[0.2em] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white uppercase transition-colors">{tNav('reviews')}</a>
            </nav>
            <div className="flex items-center space-x-8">
              <ThemeToggle />
              <div className="flex space-x-4">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}`}
                    className={`text-[10px] font-bold tracking-[0.15em] uppercase transition-colors ${
                      locale === lang 
                        ? 'text-black dark:text-white border-b border-black dark:border-white pb-1' 
                        : 'text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {lang === 'ka' ? 'KA' : lang === 'zh-Hans' ? 'CN' : lang === 'zh-Hant' ? 'TW' : lang.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero (Cinematic Edge-to-Edge with constrained height on PC) */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative w-full h-[75vh] min-h-[600px] max-h-[850px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/gallery/images (1).jpg" 
              alt="The Chronicles of Georgia" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-12">
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-serif text-white mb-6 tracking-tight leading-[0.9] drop-shadow-xl">
              {t('title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#map" className="bg-white text-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-500">
                {t('mapLink')}
              </a>
              <a href="#gallery" className="bg-transparent border border-white/50 text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500">
                {t('galleryLink')}
              </a>
            </div>
            <div className="mt-16 flex items-center justify-center space-x-8 text-white/80 text-xs tracking-widest uppercase">
              <span className="flex items-center"><span className="text-yellow-500 mr-2 text-sm">★</span> {t('rating')} ({t('reviewCount')})</span>
              <span className="w-1 h-1 rounded-full bg-white/50"></span>
              <span>{t('openHours')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About (Editorial Text & Large Bleed Image) */}
      <section id="about" className="py-24 md:py-40 border-b border-black/5 dark:border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 pt-8">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">{tNav('about')}</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-black dark:text-white mb-10 leading-[1.1] tracking-tight">{tAbout('title')}</h3>
              <p className="text-lg md:text-xl text-black/70 dark:text-white/70 mb-12 leading-relaxed font-light">
                {tAbout('description')}
              </p>
              <ul className="space-y-6 border-t border-black/10 dark:border-white/10 pt-10">
                {Object.values(tAbout.raw('highlights')).map((item: any, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-xs font-bold tracking-widest text-black/30 dark:text-white/30 mr-6 mt-1.5">0{index + 1}</span>
                    <span className="text-base text-black/80 dark:text-white/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 relative h-[60vh] md:h-[80vh] w-full group overflow-hidden">
              <img 
                src="/gallery/images (2).jpg" 
                alt="Monument details" 
                className="w-full h-full object-cover grayscale-[30%] dark:grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Explore (Minimalist Grid) */}
      <section id="explore" className="py-24 md:py-40 border-b border-black/5 dark:border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">{tNav('explore')}</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-black dark:text-white leading-[1.1] tracking-tight">{tExplore('title')}</h3>
            </div>
            <p className="text-black/50 dark:text-white/50 font-light mt-6 md:mt-0 md:max-w-sm text-right">
              {tExplore('subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {exploreItems.map((item, index) => (
              <div key={index} className="group border-t border-black/10 dark:border-white/10 pt-8">
                <div className="text-[10px] font-bold text-black/40 dark:text-white/40 mb-6 tracking-[0.2em]">0{index + 1} // 0{exploreItems.length}</div>
                <h4 className="text-2xl md:text-3xl font-serif text-black dark:text-white mb-6 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors">{item.title}</h4>
                <p className="text-black/60 dark:text-white/60 font-light leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gallery (Edge-to-Edge Carousel) */}
      <section id="gallery" className="py-24 md:py-40 bg-black text-white overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-6">{tNav('gallery')}</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] tracking-tight">{tGallery('title')}</h3>
            </div>
            <p className="text-white/60 font-light mt-6 md:mt-0">{tGallery('subtitle')}</p>
          </div>
        </div>
        
        <div className="w-full">
          <GalleryCarousel images={galleryImages} moreLinkText={tGallery('viewMaps')} />
        </div>
      </section>

      {/* 6. Visitor Stories (Newspaper Layout) */}
      <section id="stories" className="py-24 md:py-40 border-b border-black/5 dark:border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">{tNav('stories')}</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-black dark:text-white mb-6 leading-[1.1] tracking-tight">{tStories('title')}</h3>
            <p className="text-black/60 dark:text-white/60 font-light text-lg">{tStories('subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {storyItems.map((story) => (
              <a 
                key={story.id} 
                href={`/${locale}/stories/${story.id}`}
                className="group flex flex-col h-full"
              >
                <div className="border-t-2 border-black dark:border-white pt-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/50 dark:text-white/50">
                      {story.country}
                    </span>
                    <span className="text-[10px] font-medium tracking-wider text-black/50 dark:text-white/50 italic">
                      @{story.author}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-serif text-black dark:text-white mb-6 leading-tight group-hover:opacity-70 transition-opacity">
                    {story.title}
                  </h4>
                  <p className="text-black/70 dark:text-white/70 font-light leading-relaxed text-base md:text-lg mb-8 flex-grow">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-black dark:text-white mt-auto">
                    {tStories('readMore')} <span className="ml-4 w-8 h-[1px] bg-black dark:bg-white group-hover:w-16 transition-all duration-300"></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tips & Info (Editorial Split) */}
      <section id="tips" className="py-24 md:py-40 border-b border-black/5 dark:border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Tips */}
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">{tNav('tips')}</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-black dark:text-white mb-16 leading-[1.1] tracking-tight">{tTips('title')}</h3>
              <div className="space-y-12">
                {tipsItems.map((item, index) => (
                  <div key={index} className="border-t border-black/10 dark:border-white/10 pt-6">
                    <h4 className="text-[11px] font-bold tracking-[0.2em] text-black dark:text-white uppercase mb-4">{item.title}</h4>
                    <p className="text-black/60 dark:text-white/60 font-light leading-relaxed text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Info */}
            <div id="info">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">{tNav('about')} / {tInfo('title')}</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-black dark:text-white mb-16 leading-[1.1] tracking-tight">{tInfo('title')}</h3>
              
              <div className="border-y-2 border-black dark:border-white">
                <div className="py-8 flex flex-col sm:flex-row sm:justify-between border-b border-black/10 dark:border-white/10">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 w-full sm:w-40 flex-shrink-0 mb-2 sm:mb-0">{tInfo('address.label')}</span>
                  <span className="text-black dark:text-white font-light sm:text-right text-base md:text-lg">{tInfo('address.value')}</span>
                </div>
                <div className="py-8 flex flex-col sm:flex-row sm:justify-between border-b border-black/10 dark:border-white/10">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 w-full sm:w-40 flex-shrink-0 mb-2 sm:mb-0">{tInfo('hours.label')}</span>
                  <span className="text-black dark:text-white font-light sm:text-right text-base md:text-lg">{tInfo('hours.value')}</span>
                </div>
                <div className="py-8 flex flex-col sm:flex-row sm:justify-between border-b border-black/10 dark:border-white/10">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 w-full sm:w-40 flex-shrink-0 mb-2 sm:mb-0">{tInfo('howToGet.label')}</span>
                  <span className="text-black dark:text-white font-light sm:text-right text-base md:text-lg">{tInfo('howToGet.value')}</span>
                </div>
                <div className="py-8 flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 w-full sm:w-40 flex-shrink-0 mb-2 sm:mb-0">{tInfo('parking.label')}</span>
                  <span className="text-black dark:text-white font-light sm:text-right text-base md:text-lg">{tInfo('parking.value')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ / Deep Dive Guides (Minimalist Accordion-style List) */}
      <section id="faq" className="py-24 md:py-40 border-b border-black/5 dark:border-white/5 bg-[#F8F7F2] dark:bg-[#050505]">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">{tNav('faq')}</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-black dark:text-white mb-6 leading-[1.1] tracking-tight">{tFaq('title')}</h3>
              <p className="text-black/60 dark:text-white/60 font-light text-lg">{tFaq('subtitle')}</p>
            </div>
            
            <div className="lg:col-span-8 border-t-2 border-black dark:border-white">
              {faqItems.map((item, index) => (
                <div key={index} className="py-10 border-b border-black/10 dark:border-white/10 group">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-black/30 dark:text-white/30 md:w-12 pt-2">
                      0{index + 1}
                    </span>
                    <div className="flex-grow">
                      <h4 className="text-2xl md:text-3xl font-serif text-black dark:text-white mb-6 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-black/70 dark:text-white/70 font-light leading-relaxed text-base md:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Reviews (Pull-Quote Typography) */}
      <section id="reviews" className="py-24 md:py-40 border-b border-black/5 dark:border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">{tNav('reviews')}</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-black dark:text-white leading-[1.1] tracking-tight">{tReviews('title')}</h3>
            </div>
            <div className="text-right mt-8 md:mt-0 max-w-sm">
              <p className="text-black/60 dark:text-white/60 font-light text-sm mb-4">
                {tReviews('declaration')}
              </p>
              <a 
                href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-black dark:text-white hover:opacity-50 transition-opacity"
              >
                {tReviews('viewAll')} <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {reviews.map((review, index) => (
              <div key={index} className="flex flex-col h-full border-t border-black/10 dark:border-white/10 pt-8">
                <div className="text-yellow-500 text-sm tracking-[0.3em] mb-8">★★★★★</div>
                <p className="text-black/80 dark:text-white/80 font-serif text-lg md:text-xl leading-relaxed mb-10 flex-grow italic">"{review.text}"</p>
                <div className="mt-auto">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-black dark:text-white mb-1">{review.name}</div>
                  <div className="text-[10px] font-light tracking-wider text-black/50 dark:text-white/50">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Map Section (Full Bleed/Minimalist Frame) */}
      <section id="map" className="py-24 md:py-40">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">{tMap('title')}</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-black dark:text-white mb-6">{tMap('address')}</h3>
          </div>
          <div className="w-full h-[50vh] min-h-[400px] md:h-[600px] bg-gray-100 dark:bg-gray-900">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.6772256212907!2d44.807844576972414!3d41.770616471253724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d0a119ef399%3A0x377e1f1f0dbe5cb!2sChronicles%20of%20Georgia!5e0!3m2!1sen!2sus!4v1775010886938!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] dark:grayscale-[60%] dark:invert-[90%] dark:hue-rotate-180 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 11. Footer (Minimalist High-end) */}
      <footer className="bg-black text-white pt-32 pb-16">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-white/10 pb-20 mb-12">
            <div className="md:col-span-8">
              <h4 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">{t('title')}</h4>
              <p className="text-white/50 font-light text-lg max-w-xl leading-relaxed">
                {tFooter('desc')}
              </p>
            </div>
            <div className="md:col-span-4 md:text-right flex flex-col justify-end">
              <a href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/30 px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500 text-center">
                {tMap('openMap')}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center text-[10px] font-light tracking-[0.1em] text-white/40 uppercase">
            <p className="mb-6 lg:mb-0">{tFooter('rights')}</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href={`/${locale}/privacy-policy`} className="hover:text-white transition-colors">{tLegal('privacy')}</a>
              <a href={`/${locale}/terms-of-service`} className="hover:text-white transition-colors">{tLegal('terms')}</a>
              <a href={`/${locale}/cookie-settings`} className="hover:text-white transition-colors">{tLegal('cookies')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}