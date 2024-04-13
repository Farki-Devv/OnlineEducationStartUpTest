import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ChildrenProps } from '@/types'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Qu`ran',
	description:
		'Biz bilan arab tili va tajvidli o`qishni mukammal va tez fursatda o`rganing',
}

interface Props extends ChildrenProps {
	params: { lng: string }
}

export default function RootLayout({ children, params: { lng } }: Props) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={`${inter.className} custom-scrollbar`}>
					<div className=' text-gray-800'>{children} 
					</div>
					<Toaster />
				</body>
			</html>
		</ClerkProvider>
	)
}
