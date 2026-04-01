import {redirect} from 'next/navigation';
import {routing} from '../src/i18n/routing';

export default function RootPage() {
  // 重定向到默认语言版本
  redirect(`/${routing.defaultLocale}`);
}