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
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300">
      {/* 1. Header */}
      <header className="bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-wide">
              {t('title')}
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('about')}</a>
              <a href="#explore" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('explore')}</a>
              <a href="#gallery" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('gallery')}</a>
              <a href="#stories" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('stories')}</a>
              <a href="#faq" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('faq')}</a>
              <a href="#tips" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">{tNav('tips')}</a>
            </nav>
            <div className="flex items-center space-x-4 md:space-x-6">
              <ThemeToggle />
              <div className="flex space-x-2 md:space-x-3 border-l border-gray-200 dark:border-gray-800 pl-4 md:pl-6">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}`}
                    className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                      locale === lang 
                        ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-0.5 md:pb-1' 
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
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-20 w-full overflow-hidden bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative h-[60vh] min-h-[450px] md:h-[70vh] md:min-h-[600px] md:max-h-[750px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center w-full group">
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/gallery/images (1).jpg" 
                alt="The Chronicles of Georgia" 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s]"
              />
              <div className="absolute inset-0 bg-black/30 dark:bg-black/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10 md:mt-20">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium text-white mb-4 md:mb-6 tracking-wide drop-shadow-xl leading-[1.1]">
                {t('title')}
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-12 font-light tracking-wide drop-shadow-lg px-4 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-6 mb-8 md:mb-12">
                <a href="#map" className="bg-white text-gray-900 px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-wider hover:bg-gray-100 hover:scale-105 transition-all shadow-xl w-full sm:w-auto text-center flex items-center justify-center">
                  {t('mapLink')}
                </a>
                <a href="#gallery" className="bg-black/30 backdrop-blur-md border border-white/40 text-white px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-wider hover:bg-white/20 hover:border-white transition-all w-full sm:w-auto text-center">
                  {t('galleryLink')}
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 opacity-90">
                <div className="flex items-center text-white text-sm md:text-base">
                  <span className="text-yellow-400 mr-2 text-lg md:text-xl drop-shadow-md">★</span>
                  <span className="font-medium tracking-wide drop-shadow-md">{t('rating')} <span className="opacity-80 ml-1 text-xs md:text-sm font-light">({t('reviewCount')})</span></span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/50"></div>
                <div className="text-white font-medium tracking-wide text-sm md:text-base drop-shadow-md">
                  {t('openHours')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About */}
      <section id="about" className="py-16 md:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6 md:mb-8">
                <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                {tNav('about')}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight tracking-tight">{tAbout('title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 md:mb-10 leading-relaxed font-light text-base md:text-lg">
                {tAbout('description')}
              </p>
              <ul className="space-y-4 md:space-y-6">
                {Object.values(tAbout.raw('highlights')).map((item: any, index) => (
                  <li key={index} className="flex items-start bg-[#fafafa] dark:bg-[#111111] p-4 md:p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-bold mr-4 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl group">
              <img 
                src="/gallery/images (2).jpg" 
                alt="Monument details" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Explore */}
      <section id="explore" className="py-16 md:py-24 bg-[#fafafa] dark:bg-[#111111] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400"></span>
                {tNav('explore')}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white leading-tight">{tExplore('title')}</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-light md:max-w-sm text-sm md:text-base leading-relaxed">
              {tExplore('subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {exploreItems.map((item, index) => (
              <div key={index} className="group bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-500">
                <div className="text-4xl font-serif text-gray-200 dark:text-gray-800 mb-6 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">0{index + 1}</div>
                <h4 className="text-xl md:text-2xl font-serif text-gray-900 dark:text-white mb-4">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gallery */}
      <section id="gallery" className="py-16 md:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                {tNav('gallery')}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white leading-tight">{tGallery('title')}</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-light md:max-w-sm text-sm md:text-base leading-relaxed">
              {tGallery('subtitle')}
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <GalleryCarousel images={galleryImages} moreLinkText={tGallery('viewMaps')} />
        </div>
      </section>

      {/* 6. Visitor Stories */}
      <section id="stories" className="py-16 md:py-24 bg-[#fafafa] dark:bg-[#111111] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400"></span>
              {tNav('stories')}
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white mb-6 leading-tight">{tStories('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-base md:text-lg">
              {tStories('subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {storyItems.map((story) => (
              <a 
                key={story.id} 
                href={`/${locale}/stories/${story.id}`}
                className="group bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
                    {story.country}
                  </span>
                  <span className="text-sm font-medium text-gray-400 dark:text-gray-500 italic">
                    @{story.author}
                  </span>
                </div>
                <h4 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-snug">
                  {story.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-base md:text-lg mb-8 flex-grow line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center text-sm font-bold tracking-wider uppercase text-gray-900 dark:text-white mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 group-hover:gap-2 transition-all">
                  {tStories('readMore')} <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tips & Info */}
      <section id="tips" className="py-16 md:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Tips */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                {tNav('tips')}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white mb-10 leading-tight">{tTips('title')}</h3>
              <div className="space-y-10">
                {tipsItems.map((item, index) => (
                  <div key={index} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
                    <h4 className="text-base font-bold tracking-wider text-gray-900 dark:text-gray-100 uppercase mb-3">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Info */}
            <div id="info">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                {tInfo('title')}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white mb-10 leading-tight">{tInfo('title')}</h3>
              <div className="bg-[#fafafa] dark:bg-[#111111] p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  <div className="py-5 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span className="text-gray-900 dark:text-gray-200 font-medium text-sm md:text-base">{tInfo('address.label')}</span>
                    <span className="text-gray-600 dark:text-gray-400 font-light sm:text-right text-sm md:text-base">{tInfo('address.value')}</span>
                  </div>
                  <div className="py-5 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span className="text-gray-900 dark:text-gray-200 font-medium text-sm md:text-base">{tInfo('hours.label')}</span>
                    <span className="text-gray-600 dark:text-gray-400 font-light sm:text-right text-sm md:text-base">{tInfo('hours.value')}</span>
                  </div>
                  <div className="py-5 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span className="text-gray-900 dark:text-gray-200 font-medium text-sm md:text-base">{tInfo('howToGet.label')}</span>
                    <span className="text-gray-600 dark:text-gray-400 font-light sm:text-right text-sm md:text-base">{tInfo('howToGet.value')}</span>
                  </div>
                  <div className="py-5 flex flex-col sm:flex-row sm:justify-between gap-2 pb-0">
                    <span className="text-gray-900 dark:text-gray-200 font-medium text-sm md:text-base">{tInfo('parking.label')}</span>
                    <span className="text-gray-600 dark:text-gray-400 font-light sm:text-right text-sm md:text-base">{tInfo('parking.value')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Reviews */}
      <section id="reviews" className="py-16 md:py-24 bg-[#fafafa] dark:bg-[#111111] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400"></span>
                {tNav('reviews')}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white leading-tight">{tReviews('title')}</h3>
            </div>
            <div className="md:text-right max-w-md">
              <p className="text-gray-500 dark:text-gray-400 font-light text-sm md:text-base leading-relaxed mb-3">
                {tReviews('declaration')}
              </p>
              <a 
                href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 dark:text-white font-medium text-sm tracking-wide hover:text-gray-500 dark:hover:text-gray-300 transition-colors group"
              >
                {tReviews('viewAll')}
                <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="p-8 border border-gray-100 dark:border-gray-800 rounded-3xl bg-white dark:bg-[#1a1a1a] hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                <div className="flex text-yellow-400 text-sm mb-6">★★★★★</div>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8 text-sm md:text-base flex-grow">"{review.text}"</p>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
                  <span className="font-medium text-gray-900 dark:text-gray-200 text-sm">{review.name}</span>
                  <span className="text-xs font-light text-gray-400 dark:text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ / Deep Dive Guides */}
      <section id="faq" className="py-16 md:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></span>
              {tNav('faq')}
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white mb-6 leading-tight">{tFaq('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-base md:text-lg">{tFaq('subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#fafafa] dark:bg-[#111111] p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
                <div className="flex items-start gap-5">
                  <span className="text-4xl opacity-20 dark:opacity-30 font-serif leading-none mt-1 text-gray-900 dark:text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white mb-4">
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
      <section id="map" className="py-16 md:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-4">{tMap('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-base">{tMap('address')}</p>
          </div>
          <div className="w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.6772256212907!2d44.807844576972414!3d41.770616471253724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d0a119ef399%3A0x377e1f1f0dbe5cb!2sChronicles%20of%20Georgia!5e0!3m2!1sen!2sus!4v1775010886938!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] dark:grayscale-[50%] dark:invert-[90%] dark:hue-rotate-180 group-hover:grayscale-0 dark:group-hover:grayscale-[30%] transition-all duration-700"
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