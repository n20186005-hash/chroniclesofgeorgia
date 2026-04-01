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
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 font-sans selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300">
      {/* 1. Header */}
      <header className="bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-wide">
              {t('title')}
            </h1>
            <nav className="hidden md:flex space-x-10">
              <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('about')}</a>
              <a href="#explore" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('explore')}</a>
              <a href="#gallery" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('gallery')}</a>
              <a href="#stories" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('stories')}</a>
              <a href="#faq" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('faq')}</a>
              <a href="#tips" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('tips')}</a>
              <a href="#reviews" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('reviews')}</a>
            </nav>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <div className="flex space-x-3 border-l border-gray-200 dark:border-gray-800 pl-6">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}`}
                    className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                      locale === lang 
                        ? 'text-gray-900 dark:text-white border-b border-gray-900 dark:border-white pb-1' 
                        : 'text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-300'
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

      {/* 2. Hero */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative h-[60vh] min-h-[500px] md:h-[65vh] md:min-h-[550px] md:max-h-[700px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center w-full">
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/gallery/images (1).jpg" 
                alt="The Chronicles of Georgia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium text-white mb-6 tracking-wide drop-shadow-lg leading-tight">
                {t('title')}
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-10 font-light tracking-wide drop-shadow-md px-4">
                {t('subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 md:mb-12">
                <div className="flex items-center text-white bg-black/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-sm w-full sm:w-auto justify-center">
                  <span className="text-yellow-400 mr-2 text-lg">★</span>
                  <span className="font-medium tracking-wide">{t('rating')} <span className="opacity-70 ml-1 text-sm font-light">({t('reviewCount')})</span></span>
                </div>
                <div className="text-white bg-black/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 font-medium tracking-wide shadow-sm w-full sm:w-auto text-center">
                  {t('openHours')}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-6">
                <a href="#map" className="bg-white text-gray-900 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-gray-100 transition-colors shadow-md w-full sm:w-auto text-center">
                  {t('mapLink')}
                </a>
                <a href="#gallery" className="bg-black/20 backdrop-blur-md border border-white/50 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white/20 transition-colors w-full sm:w-auto text-center">
                  {t('galleryLink')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About */}
      <section id="about" className="py-16 md:py-24 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-6 md:mb-8">{tAbout('title')}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 md:mb-10 leading-relaxed font-light text-base md:text-lg">
                {tAbout('description')}
              </p>
              <ul className="space-y-4 md:space-y-6">
                {Object.values(tAbout.raw('highlights')).map((item: any, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-300 dark:text-gray-700 mr-4 mt-1">—</span>
                    <span className="text-gray-600 dark:text-gray-300 font-light text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mt-8 lg:mt-0">
              <img 
                src="/gallery/images (2).jpg" 
                alt="Monument details" 
                className="w-full h-full object-cover shadow-sm grayscale-[20%] dark:grayscale-[40%] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Explore */}
      <section id="explore" className="py-16 md:py-24 bg-[#fafafa] dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">{tExplore('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light">{tExplore('subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16">
            {exploreItems.map((item, index) => (
              <div key={index} className="group">
                <div className="text-sm font-bold text-gray-300 dark:text-gray-700 mb-3 tracking-widest">0{index + 1}</div>
                <h4 className="text-xl font-serif text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gallery */}
      <section id="gallery" className="py-16 md:py-24 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 px-4 sm:px-0">
            <div>
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-2">{tGallery('title')}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light">{tGallery('subtitle')}</p>
            </div>
          </div>
          
          <div className="w-full">
            <GalleryCarousel images={galleryImages} moreLinkText={tGallery('viewMaps')} />
          </div>
        </div>
      </section>

      {/* 6. Visitor Stories */}
      <section id="stories" className="py-16 md:py-24 bg-[#fafafa] dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">{tStories('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light">{tStories('subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {storyItems.map((story) => (
              <a 
                key={story.id} 
                href={`/${locale}/stories/${story.id}`}
                className="group bg-white dark:bg-[#151515] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                    {story.country}
                  </span>
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    @{story.author}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-gray-900 dark:text-white mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-snug">
                  {story.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base mb-6 flex-grow line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-gray-900 dark:text-white mt-auto pt-4 border-t border-gray-50 dark:border-gray-800/50 group-hover:gap-2 transition-all">
                  {tStories('readMore')} <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tips & Info */}
      <section id="tips" className="py-16 md:py-24 bg-[#fafafa] dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Tips */}
            <div>
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-8 md:mb-10">{tTips('title')}</h3>
              <div className="space-y-8 md:space-y-10">
                {tipsItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-bold tracking-widest text-gray-900 dark:text-gray-200 uppercase mb-3 md:mb-4">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Info */}
            <div id="info">
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-8 md:mb-10">{tInfo('title')}</h3>
              <div className="bg-white dark:bg-[#151515] p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-sm rounded-xl transition-colors duration-300">
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  <div className="py-4 md:py-5 flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-gray-900 dark:text-gray-200 font-medium w-full sm:w-32 flex-shrink-0 mb-1 sm:mb-0">{tInfo('address.label')}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-light sm:text-right text-sm md:text-base">{tInfo('address.value')}</span>
                  </div>
                  <div className="py-4 md:py-5 flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-gray-900 dark:text-gray-200 font-medium w-full sm:w-32 flex-shrink-0 mb-1 sm:mb-0">{tInfo('hours.label')}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-light sm:text-right text-sm md:text-base">{tInfo('hours.value')}</span>
                  </div>
                  <div className="py-4 md:py-5 flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-gray-900 dark:text-gray-200 font-medium w-full sm:w-32 flex-shrink-0 mb-1 sm:mb-0">{tInfo('howToGet.label')}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-light sm:text-right text-sm md:text-base">{tInfo('howToGet.value')}</span>
                  </div>
                  <div className="py-4 md:py-5 flex flex-col sm:flex-row sm:justify-between pt-4 md:pt-5 pb-0">
                    <span className="text-gray-900 dark:text-gray-200 font-medium w-full sm:w-32 flex-shrink-0 mb-1 sm:mb-0">{tInfo('parking.label')}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-light sm:text-right text-sm md:text-base">{tInfo('parking.value')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Reviews */}
      <section id="reviews" className="py-16 md:py-24 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">{tReviews('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-sm md:text-base leading-relaxed">
              {tReviews('declaration')}
              <a 
                href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 md:mt-0 md:ml-2 text-gray-900 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors border-b border-gray-900 dark:border-gray-200 hover:border-gray-600 dark:hover:border-gray-400 pb-0.5 group"
              >
                {tReviews('viewAll')}
                <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
              </a>
            </p>
          </div>
          {/* Expanded to 8 reviews with a clean grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 md:p-8 border border-gray-100 dark:border-gray-800 rounded-xl bg-white dark:bg-[#151515] hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm transition-all duration-300 flex flex-col h-full">
                <div className="flex text-yellow-400 text-sm mb-4 md:mb-5">★★★★★</div>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6 md:mb-8 text-sm flex-grow">"{review.text}"</p>
                <div className="flex items-center justify-between border-t border-gray-50 dark:border-gray-800/50 pt-4 md:pt-5 mt-auto">
                  <span className="font-medium text-gray-900 dark:text-gray-200 text-sm">{review.name}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ / Deep Dive Guides */}
      <section id="faq" className="py-16 md:py-24 bg-[#fafafa] dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">{tFaq('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light">{tFaq('subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-[#151515] p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl opacity-20 dark:opacity-40 font-serif leading-none mt-1">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Map Section */}
      <section id="map" className="py-16 md:py-24 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">{tMap('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light">{tMap('address')}</p>
          </div>
          <div className="w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.6772256212907!2d44.807844576972414!3d41.770616471253724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d0a119ef399%3A0x377e1f1f0dbe5cb!2sChronicles%20of%20Georgia!5e0!3m2!1sen!2sus!4v1775010886938!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] dark:grayscale-[50%] dark:invert-[90%] dark:hue-rotate-180 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-800 pb-12 mb-8">
            <div>
              <h4 className="text-xl font-serif mb-4">{t('title')}</h4>
              <p className="text-gray-400 font-light max-w-sm">
                {tFooter('desc')}
              </p>
            </div>
            <div className="md:text-right">
              <a href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-gray-900 px-6 py-3 rounded text-sm font-semibold tracking-wider uppercase hover:bg-gray-200 transition-colors">
                {tMap('openMap')}
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
            <p>{tFooter('rights')}</p>
            <div className="space-x-6 mt-4 md:mt-0 flex flex-wrap justify-center gap-y-2">
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