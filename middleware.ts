import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
	locales: ['ar',  'uz'],
	defaultLocale: 'uz',
})

export default authMiddleware({
	beforeAuth: req => intlMiddleware(req),
	publicRoutes: [
		'/:lng',
	],
	ignoredRoutes: ['/en/api/webhook'],
})


export const config = { 
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)']
};