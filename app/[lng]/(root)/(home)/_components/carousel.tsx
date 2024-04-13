'use client'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { arabLanguage } from '@/constants'

function CarouselDemo() {
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 1000,
				}),
			]}
			opts={{
				align: 'start',
			}}
			className='mx-auto max-w-7xl px-10'
		>
			<CarouselContent>
				{arabLanguage.map((_, index) => (
					<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
						<div className='p-1'>
							<Card className='flex h-[100px] items-center justify-center bg-orange-300/20 text-orange-800 hover:bg-orange-400/20'>
								<CardContent className='flex aspect-square items-center justify-center p-6'>
									<span className='text-3xl font-semibold'>{_.name}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className=' hidden lg:flex' />
			<CarouselNext className=' hidden ' />
		</Carousel>
	)
}

export default CarouselDemo
