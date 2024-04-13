'use client'
import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
	const t = useTranslate()
	return (
		<Link href={'/'} className='flex gap-2'>
			<Image src='/assets/logo.png' alt='logo' width={50} height={40} className='rounded-[50%]'/>
			<span className='text-[34px] font-bold text-orange-400'>{t('quran')}</span>
		</Link>
	)
}

export default Logo
