"use client";

import * as React from 'react';
import {useTranslations} from 'next-intl';
import {routing} from '../../../src/i18n/routing';
import {ThemeToggle} from '../../../components/ThemeToggle';
import {ChevronLeft} from 'lucide-react';
import {useParams} from 'next/navigation';

export default function CookieSettingsPage() {
  const params = useParams();
  const locale = params.locale as string;
  
  if (!routing.locales.includes(locale as any)) {
    return null;
  }
  
  return <CookieSettingsContent locale={locale} />;
}

function CookieSettingsContent({locale}: {locale: string}) {
  const tNav = useTranslations('nav');
  const tLegal = useTranslations('legal');
  const tCookie = useTranslations('cookieSettings');
  const tHero = useTranslations('hero');
  const tFooter = useTranslations('footer');
  const tMap = useTranslations('map');

  const [preferences, setPreferences] = React.useState({
    essential: true, // Always true
    analytics: false,
    marketing: false,
    preferences: false
  });

  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const categories = ['essential', 'analytics', 'marketing', 'preferences'] as const;

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
              <span className="text-black dark:text-white">{tLegal('cookies')}</span>
            </div>
            <div className="flex items-center space-x-8">
              <ThemeToggle />
              <div className="flex space-x-4">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}/cookie-settings`}
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

      {/* Main Content */}
      <main className="py-24 md:py-40 min-h-[70vh]">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <header className="mb-20 md:mb-32 text-center border-b border-black/10 dark:border-white/10 pb-16">
            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-6">
              {tLegal('lastUpdated')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black dark:text-white leading-[1.2] tracking-tight mb-8">
              {tLegal('cookies')}
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              {tCookie('description')}
            </p>
          </header>

          <div className="space-y-12 mb-16 border-y border-black/10 dark:border-white/10 py-12">
            {categories.map((category) => (
              <div key={category} className="border-b border-black/5 dark:border-white/5 pb-12 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div className="pr-8">
                    <h3 className="text-xl md:text-2xl font-serif text-black dark:text-white mb-4">
                      {tCookie(`categories.${category}.title`)}
                    </h3>
                    <p className="text-black/70 dark:text-white/70 font-light leading-relaxed">
                      {tCookie(`categories.${category}.desc`)}
                    </p>
                  </div>
                  <div className="flex-shrink-0 pt-2">
                    <button
                      type="button"
                      disabled={category === 'essential'}
                      onClick={() => setPreferences(prev => ({...prev, [category]: !prev[category as keyof typeof prev]}))}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        preferences[category] 
                          ? 'bg-black dark:bg-white' 
                          : 'bg-gray-200 dark:bg-gray-800'
                      } ${category === 'essential' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black shadow ring-0 transition duration-200 ease-in-out ${
                          preferences[category] ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <button
              onClick={handleSave}
              className="bg-black text-white dark:bg-white dark:text-black px-12 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black/80 dark:hover:bg-white/80 transition-colors duration-500 w-full md:w-auto"
            >
              {isSaved ? tCookie('saved') : tCookie('save')}
            </button>
            
            <a 
              href={`/${locale}`}
              className="inline-flex items-center justify-center border border-black/30 dark:border-white/30 text-black dark:text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-500"
            >
              <ChevronLeft className="w-4 h-4 mr-3" />
              {tLegal('back')}
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