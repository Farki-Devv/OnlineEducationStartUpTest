'use client'
import Logo from '@/components/shared/logo'
import { navLink } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Mobile from './mobile'
import GlobalSearch from './globalSearch'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SignUpButton, SignedIn, UserButton } from '@clerk/nextjs'
import { SignedOut } from '@clerk/clerk-react'
import LanguageDropdown from '@/components/shared/language-dropdown'
import useTranslate from '@/hooks/use-translate'

function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const t = useTranslate()
	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 20) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<div className='transition-all'>
			<div
				className={cn(
					'max-w-7xl h-[80px] mx-auto bg-gradient-to-r from-[#FDF8EE] to-blue-800/20 mt-2 rounded-md flex justify-between transition-all items-center px-10',
					scrolled ? 'rounded-[200px]  inset-0' : ''
				)}
			>
				<div>
					<Logo />
				</div>
				<div>
					<div className='hidden items-center gap-x-2 lg:flex'>
						{navLink.map(nav => (
							<Link
								href={nav.path}
								key={nav.name}
								className='mx-4 font-bold text-blue-900'
							>
								{t(nav.name)}
							</Link>
						))}
						<SignedOut>
							<SignUpButton mode='modal'>
								<Button className='rounded-full bg-orange-900'>Sign Up</Button>
							</SignUpButton>
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
						<LanguageDropdown />
					</div>

					<div className='ml-2 gap-x-2 lg:hidden'>
						<GlobalSearch />
						<Mobile />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
