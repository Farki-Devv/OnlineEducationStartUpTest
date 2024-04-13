import Image from 'next/image'
import React from 'react'

function Hero() {
	return (
		<div className='flex w-full flex-col overflow-x-hidden'>
			<div className='mx-auto w-[800px]'>
				<Image
					src='/assets/hero.png'
					alt='hero'
					width={600}
					height={400}
					className='w-[400px] md:w-[600px]'
				/>
			</div>
		</div>
	)
}

export default Hero
