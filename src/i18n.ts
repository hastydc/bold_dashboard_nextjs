import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales: string[] = ['es'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./_locales/${locale}.json`)).default,
  };
});
