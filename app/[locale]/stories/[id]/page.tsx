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
  
  const story = tStories.raw(`items.${id}`) as {
    title: string;
    author: string;
    country: string;
    content: string[];
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 font-sans selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a 
              href={`/${locale}#stories`}
              className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
              {tStories('back')}
            </a>
            
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <div className="flex space-x-3 border-l border-gray-200 dark:border-gray-800 pl-6">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}/stories/${id}`}
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

      {/* Article Content */}
      <main className="py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 md:mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full">
                {story.country}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                @{story.author}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 dark:text-white leading-tight mb-8">
              {story.title}
            </h1>
            <div className="w-24 h-px bg-gray-200 dark:bg-gray-800 mx-auto"></div>
          </header>

          <div className="prose prose-lg dark:prose-invert prose-gray mx-auto prose-p:leading-loose prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:font-light">
            {story.content.map((paragraph, index) => (
              <p key={index} className="mb-8">{paragraph}</p>
            ))}
          </div>

          <footer className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
            <a 
              href={`/${locale}#stories`}
              className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
            >
              {tStories('back')}
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
}