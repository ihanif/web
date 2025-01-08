import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle localization
  const locale = request.nextUrl.locale || 'en'
  request.nextUrl.searchParams.set('locale', locale)
  
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 