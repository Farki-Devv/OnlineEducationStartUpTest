
import { Dot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
	twoLink: string
	threeLink?: string
	title?: string
}
async function TopBar({ title, twoLink,threeLink }: Props) {
	return (
		<div className='mx-auto flex h-[40px] max-w-7xl items-center rounded bg-gradient-to-r from-blue-800/20 to-[#FDF8EE] px-20'>
			<div className='flex items-center'>
				<Link href={'/'} className=' font-bold text-blue-800'>
					Bosh sahifa
				</Link>
				<Dot/>
				<span className='font-bold text-blue-800'>{twoLink}</span>
				<Dot/>
				<span className='font-bold text-blue-800'>{threeLink}</span>
			</div>
		</div>
	)
}

export default TopBar
