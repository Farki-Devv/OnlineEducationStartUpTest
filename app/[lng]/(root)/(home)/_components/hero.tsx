'use client'
import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Hero() {
	const t = useTranslate()
	return (
		<>
			<section className=' text-gray-600'>
				<div className=' mx-auto flex max-w-7xl flex-wrap items-center px-5 py-12 md:py-0'>
					<div className='flex flex-col pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0'>
						<span className='px-10 text-[30px] font-semibold md:px-0  md:text-[40px]'>
							{t('heroTitle1')} <span className='text-orange-400'>{t('heroTitle2')} </span>{t('heroTitle3')}
						  	<span className='font-semibold text-orange-400'></span>{' '}
						
						</span>

						<span className='px-10 text-[14px] text-gray-800 md:px-0'>
						{t('heroSmallTitle')}
						</span>

						<div className='mt-2 grid  grid-cols-1 gap-2 md:flex'>
							<Button
								className='group w-full rounded-full'
								variant={'destructive'}
							>
								{t('heroOnebtn')}
								<ArrowRight className='transition-all group-hover:translate-x-2' />
							</Button>
							<Button className='group rounded-full'>
								{t('heroTwobtn')}
								<ArrowRight className='transition-all group-hover:translate-x-2' />
							</Button>
						</div>
					</div>
					<div className='mt-10 flex  w-full flex-col rounded-lg p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/5'>
						<Image src='/assets/hero.png' alt='hero' width={600} height={200} />
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
