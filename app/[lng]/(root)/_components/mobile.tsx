'use client'
import LanguageDropdown from '@/components/shared/language-dropdown'
import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLink } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { Menu } from 'lucide-react'
import Link from 'next/link'
function Mobile() {
	const t = useTranslate()
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline'>
					<Menu className='space-x-2' />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<div>
						<Logo />
					</div>
				</SheetHeader>
				<hr className='mt-2' />

				<div className='mt-2 flex flex-col'>
					{navLink.map(nav => (
					
							<Link
								href={nav.path}
								key={nav.name}
								className='group	 mx-4 mt-1 flex h-[40px] items-center gap-2 rounded border from-blue-400 to-blue-800 px-2 font-bold text-blue-900 transition-all hover:bg-gradient-to-b'
							>
								<nav.icon />
								<span className='transition-all group-hover:text-white'>
								{t(nav.name)}
								</span>
							</Link>
						
					))}
				</div>

				<SheetFooter className='mt-2'>
					<LanguageDropdown isMobile/>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
