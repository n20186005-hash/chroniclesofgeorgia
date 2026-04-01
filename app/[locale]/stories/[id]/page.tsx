import {useTranslations} from 'next-intl';
import {routing} from '../../../../src/i18n/routing';
import {notFound} from 'next/navigation';
import {ThemeToggle} from '../../../../components/ThemeToggle';
import {ChevronLeft} from 'lucide-react';

export default async function StoryPage({
  params
}: {
  params: Promise<{locale: string, id: string}>
}) {
  const {locale, id} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Validate story id
  if (!['story-1', 'story-2', 'story-3', 'story-4'].includes(id)) {
    notFound();
  }
  
  return <StoryContent locale={locale} id={id} />;
}

function StoryContent({locale, id}: {locale: string, id: string}) {
  const tNav = useTranslations('nav');
  const tStories = useTranslations('stories');
  const tHero = useTranslations('hero');
  const tFooter = useTranslations('footer');
  const tMap = useTranslations('map');
  const tLegal = useTranslations('legal');
  
  const story = tStories.raw(`items.${id}`) as {
    title: string;
    author: string;
    country: string;
    content: string[];
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#f0f0f0] font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      {/* 1. Header (Minimalist Editorial) */}
      <header className="bg-[#FDFCF8]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-black/5 dark:border-white/5 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <a href={`/${locale}`} className="text-xl md:text-2xl font-serif text-black dark:text-white tracking-widest uppercase hover:opacity-70 transition-opacity">
              {tHero('title')}
            </a>
            <div className="hidden lg:flex items-center space-x-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
              <a href={`/${locale}`} className="hover:text-black dark:hover:text-white transition-colors">{tNav('home') || 'Home'}</a>
              <span>/</span>
              <a href={`/${locale}#stories`} className="hover:text-black dark:hover:text-white transition-colors">{tNav('stories')}</a>
            </div>
            <div className="flex items-center space-x-8">
              <ThemeToggle />
              <div className="flex space-x-4">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}/stories/${id}`}
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

      {/* Article Content */}
      <main className="py-24 md:py-40 min-h-[70vh]">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <header className="mb-20 md:mb-32 text-center border-b border-black/10 dark:border-white/10 pb-16">
            <div className="flex items-center justify-center gap-6 mb-10">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50">
                {story.country}
              </span>
              <span className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full"></span>
              <span className="text-[11px] font-medium tracking-wider text-black/50 dark:text-white/50 italic">
                @{story.author}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black dark:text-white leading-[1.2] tracking-tight">
              {story.title}
            </h1>
          </header>

          <div className="prose prose-lg md:prose-xl dark:prose-invert prose-gray mx-auto prose-p:leading-[2] prose-p:text-black/80 dark:prose-p:text-white/80 prose-p:font-light">
            {story.content.map((paragraph, index) => (
              <p key={index} className="mb-10">{paragraph}</p>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-black/10 dark:border-white/10 text-center flex flex-col items-center">
            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40 dark:text-white/40 mb-8">
              {tStories('title')}
            </div>
            <a 
              href={`/${locale}#stories`}
              className="inline-flex items-center justify-center border border-black/30 dark:border-white/30 text-black dark:text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-500"
            >
              <ChevronLeft className="w-4 h-4 mr-3" />
              {tStories('back')}
            </a>
          </div>
        </article>
      </main>

      {/* 11. Footer (Minimalist High-end) */}
      <footer className="bg-black text-white pt-32 pb-16">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-white/10 pb-20 mb-12">
            <div className="md:col-span-8">
              <h4 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">{tHero('title')}</h4>
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