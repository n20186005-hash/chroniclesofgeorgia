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
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300">
      {/* 1. Header (Clean Modern) */}
      <header className="bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href={`/${locale}`} className="text-xl md:text-2xl font-serif text-gray-900 dark:text-white tracking-widest uppercase hover:opacity-70 transition-opacity">
              {tHero('title')}
            </a>
            <div className="hidden lg:flex items-center space-x-4 text-sm font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
              <a href={`/${locale}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">{tNav('home') || 'Home'}</a>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">{tLegal('cookies')}</span>
            </div>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <div className="flex space-x-4 border-l border-gray-200 dark:border-gray-800 pl-6">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}/cookie-settings`}
                    className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                      locale === lang 
                        ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-1' 
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

      {/* Main Content */}
      <main className="py-20 md:py-32 min-h-[70vh]">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <header className="mb-16 md:mb-24 text-center border-b border-gray-100 dark:border-gray-900 pb-12">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-4">
              {tLegal('lastUpdated')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 dark:text-white leading-tight tracking-tight mb-8">
              {tLegal('cookies')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              {tCookie('description')}
            </p>
          </header>

          <div className="space-y-12 mb-16 border-y border-gray-100 dark:border-gray-900 py-12">
            {categories.map((category) => (
              <div key={category} className="border-b border-gray-100 dark:border-gray-800 pb-12 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div className="pr-8">
                    <h3 className="text-xl md:text-2xl font-serif text-gray-900 dark:text-white mb-4">
                      {tCookie(`categories.${category}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-base">
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
                          ? 'bg-gray-900 dark:bg-white' 
                          : 'bg-gray-200 dark:bg-gray-700'
                      } ${category === 'essential' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-900 shadow ring-0 transition duration-200 ease-in-out ${
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
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 w-full md:w-auto shadow-sm rounded-full"
            >
              {isSaved ? tCookie('saved') : tCookie('save')}
            </button>
            
            <a 
              href={`/${locale}`}
              className="inline-flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {tLegal('back')}
            </a>
          </div>
        </article>
      </main>

      {/* 11. Footer (Clean Modern) */}
      <footer className="bg-gray-900 dark:bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-b border-gray-800 pb-16 mb-10">
            <div className="md:col-span-8">
              <h4 className="text-2xl md:text-4xl font-serif mb-6 tracking-wide">{tHero('title')}</h4>
              <p className="text-gray-400 font-light text-base max-w-xl leading-relaxed">
                {tFooter('desc')}
              </p>
            </div>
            <div className="md:col-span-4 md:text-right flex flex-col justify-end">
              <a href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" target="_blank" rel="noopener noreferrer" className="inline-block border border-gray-600 px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-gray-900 hover:border-white transition-colors duration-300 text-center">
                {tMap('openMap')}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center text-xs font-light text-gray-500 uppercase tracking-wider">
            <p className="mb-4 lg:mb-0">{tFooter('rights')}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
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