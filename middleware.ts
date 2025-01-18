import { NextRequest, NextResponse } from 'next/server';
import { setRequestLocale } from 'next-intl/server';
import { routing } from './i18n/routing';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const locale = pathname.split('/')[1]; 

  if (locale === 'en' || locale === 'ru') {
    setRequestLocale(locale);
  } else {
    setRequestLocale(routing.defaultLocale || 'en');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/(ru|en|ko)/:path*']
};
