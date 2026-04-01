import {useTranslations} from 'next-intl';
import {routing} from '../../../src/i18n/routing';
import {notFound} from 'next/navigation';
import {ThemeToggle} from '../../../components/ThemeToggle';
import {ChevronLeft} from 'lucide-react';

export default async function TermsOfServicePage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  return <TermsContent locale={locale} />;
}

function TermsContent({locale}: {locale: string}) {
  const tLegal = useTranslations('legal');
  const tTerms = useTranslations('termsOfService');
  
  const content = tTerms.raw('content') as string[];

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
                    href={`/${lang}/terms-of-service`}
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
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 dark:text-white leading-tight mb-6">
              {tLegal('terms')}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wider uppercase">
              {tLegal('lastUpdated')}
            </p>
            <div className="w-24 h-px bg-gray-200 dark:bg-gray-800 mx-auto mt-8"></div>
          </header>

          <div className="prose prose-lg dark:prose-invert prose-gray mx-auto prose-p:leading-loose prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:font-light prose-h2:font-serif prose-h2:text-2xl prose-h2:font-normal prose-h2:mt-12 prose-h2:mb-6">
            {content.map((paragraph, index) => {
              if (/^\d+\./.test(paragraph)) {
                const [heading, ...textParts] = paragraph.split('\n');
                return (
                  <div key={index} className="mb-10">
                    <h2 className="text-gray-900 dark:text-white">{heading}</h2>
                    {textParts.length > 0 && <p>{textParts.join('\n')}</p>}
                  </div>
                );
              }
              return <p key={index} className="mb-8">{paragraph}</p>;
            })}
          </div>

          <footer className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
            <a 
              href={`/${locale}`}
              className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
            >
              {tLegal('back')}
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
}