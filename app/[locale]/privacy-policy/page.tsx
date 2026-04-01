import {useTranslations} from 'next-intl';
import {routing} from '../../../src/i18n/routing';
import {notFound} from 'next/navigation';
import {ThemeToggle} from '../../../components/ThemeToggle';
import {ChevronLeft} from 'lucide-react';

export default async function PrivacyPolicyPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  return <PrivacyPolicyContent locale={locale} />;
}

function PrivacyPolicyContent({locale}: {locale: string}) {
  const tNav = useTranslations('nav');
  const tLegal = useTranslations('legal');
  const tPrivacy = useTranslations('privacyPolicy');
  const tHero = useTranslations('hero');
  const tFooter = useTranslations('footer');
  const tMap = useTranslations('map');
  
  const content = tPrivacy.raw('content') as string[];

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
              <span className="text-gray-900 dark:text-white">{tLegal('privacy')}</span>
            </div>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <div className="flex space-x-4 border-l border-gray-200 dark:border-gray-800 pl-6">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}/privacy-policy`}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 dark:text-white leading-tight tracking-tight">
              {tLegal('privacy')}
            </h1>
          </header>

          <div className="prose prose-lg md:prose-xl dark:prose-invert prose-gray mx-auto prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:font-light prose-h2:font-serif prose-h2:text-3xl prose-h2:font-normal prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-gray-900 dark:prose-h2:text-white">
            {content.map((paragraph, index) => {
              // Simple check if the paragraph starts with a number, treat as a heading
              if (/^\d+\./.test(paragraph)) {
                const [heading, ...textParts] = paragraph.split('\n');
                return (
                  <div key={index} className="mb-10">
                    <h2 className="border-t border-gray-100 dark:border-gray-800 pt-8">{heading}</h2>
                    {textParts.length > 0 && <p>{textParts.join('\n')}</p>}
                  </div>
                );
              }
              return <p key={index} className="mb-8">{paragraph}</p>;
            })}
          </div>

          <div className="mt-24 pt-12 border-t border-gray-100 dark:border-gray-900 text-center flex flex-col items-center">
            <a 
              href={`/${locale}`}
              className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
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