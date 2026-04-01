import {routing} from '../../src/i18n/routing';
import {notFound} from 'next/navigation';

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  return (
    <main>
      <h1>欢迎来到格鲁吉亚编年史</h1>
      <p>这是一个Next.js应用</p>
      <p>当前语言: {locale}</p>
    </main>
  )
}