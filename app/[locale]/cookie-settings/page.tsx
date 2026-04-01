"use client";

import * as React from 'react';
import {useTranslations} from 'next-intl';
import {routing} from '../../../src/i18n/routing';
import {ThemeToggle} from '../../../components/ThemeToggle';
import {ChevronLeft, Check} from 'lucide-react';
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
  const tLegal = useTranslations('legal');
  const tCookies = useTranslations('cookieSettings');
  
  const [analyticsEnabled, setAnalyticsEnabled] = React.useState(true);
  const [marketingEnabled, setMarketingEnabled] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 font-sans selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a 
              href={`/${locale}`}
              className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
              {tLegal('back')}
            </a>
            
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <div className="flex space-x-3 border-l border-gray-200 dark:border-gray-800 pl-6">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}/cookie-settings`}
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

      {/* Main Content */}
      <main className="py-16 md:py-24">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 dark:text-white leading-tight mb-6">
              {tLegal('cookies')}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-lg mx-auto">
              {tCookies('description')}
            </p>
          </header>

          <div className="space-y-6">
            {/* Necessary Cookies (Always On) */}
            <div className="bg-white dark:bg-[#151515] p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{tCookies('items.necessary.title')}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{tCookies('items.necessary.desc')}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {tCookies('items.necessary.alwaysActive')}
                  </span>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white dark:bg-[#151515] p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{tCookies('items.analytics.title')}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{tCookies('items.analytics.desc')}</p>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <button 
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${analyticsEnabled ? 'bg-gray-900 dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                    role="switch"
                    aria-checked={analyticsEnabled}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition-transform ${analyticsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-white dark:bg-[#151515] p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{tCookies('items.marketing.title')}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{tCookies('items.marketing.desc')}</p>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <button 
                    onClick={() => setMarketingEnabled(!marketingEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${marketingEnabled ? 'bg-gray-900 dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                    role="switch"
                    aria-checked={marketingEnabled}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition-transform ${marketingEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={handleSave}
              className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm w-full sm:w-auto min-w-[200px]"
            >
              {saved ? (
                <><Check className="w-4 h-4 mr-2" /> Saved</>
              ) : (
                tCookies('saveBtn')
              )}
            </button>
          </div>

          <footer className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
            <a 
              href={`/${locale}`}
              className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
            >
              {tLegal('back')}
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
}