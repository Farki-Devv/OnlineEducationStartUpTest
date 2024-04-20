'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

import {
	ArrowRight,
	BarChart2,
	Book,
	Calendar,
	Clock3,
	Facebook,
	GraduationCap,
	Instagram,
	LucideVerified,
	PartyPopper,
	Star,
	Twitter,
	Youtube,
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback } from '@/components/ui/avatar'
import CourseDescription from './course-description'

function DetailedCourse() {
	return (
		<div className='mx-auto mt-2 grid max-w-7xl grid-cols-1 justify-between px-10 lg:flex lg:px-0 '>
			<div className='flex flex-col'>
				<Image
					src='/assets/course.svg'
					alt=''
					width={900}
					height={400}
					className='lg:w-[700px] xl:w-[900px]'
				/>
				<div className='mt-2 flex gap-4'>
					<Badge variant={'default'}>Development</Badge>
					<Star className='text-yellow-400' />
					(4.5 Baholar)
				</div>
				<span className='mt-2 text-[30px] font-bold text-[#161439]'>
					{"Bu kursda siz arab tilini mukammal or'ganasiz"}
				</span>
				<div className='flex'>
					<Avatar className='flex items-center gap-2'>
						<AvatarFallback className='size-[40px]'>CN</AvatarFallback>
						<span className='font-medium '>Farrux G`aniboyev</span>
						<span className='grid grid-cols-2 gap-2 md:flex'>
							<span className='flex'>
								<Calendar /> 20.22.2022
							</span>

							<span className='flex'>
								<GraduationCap /> students (2000)
							</span>
						</span>
					</Avatar>
				</div>

				<CourseDescription />

				<div className='mt-2 grid grid-cols-2 gap-4 md:flex'>
					<Button className='group h-[60px] w-full rounded-full bg-purple-500'>
						{' '}
						Free lessons{' '}
						<ArrowRight className='ml-2 group-hover:translate-x-2 ' />
					</Button>
					<Button className='group h-[60px] w-full rounded-full bg-yellow-600 text-white'>
						Quizzes <ArrowRight className='ml-2 group-hover:translate-x-2 ' />
					</Button>
					<Button className='group h-[60px] w-full rounded-full bg-yellow-600 text-white'>
						Get certificate{' '}
						<ArrowRight className='ml-2 group-hover:translate-x-2 ' />
					</Button>
					<Button className='group h-[60px] w-full rounded-full bg-yellow-600 text-white'>
						Know the level
						<ArrowRight className='ml-2 group-hover:translate-x-2 ' />
					</Button>
				</div>
			</div>
			<div className='mt-2 flex h-[680px] flex-col items-center justify-center  rounded border bg-white px-2 shadow-xl lg:mt-0 lg:w-1/4'>
				<div className=' flex h-[80px] w-full flex-col rounded-md bg-blue-500 p-4 md:w-[240px]'>
					<span className=' text-white'>Bu kurs bepul</span>

					<span className='flex gap-2 font-bold text-white'>
						$18.00{' '}
						<span className='flex items-center text-[12px] font-bold text-gray-600'>
							$22.00
						</span>
					</span>
				</div>
				<span className=' mt-2 font-bold'>Kursda nimalar bor: </span>

				<div className='flex w-full flex-col px-12'>
					<span className='mt-2  flex w-full justify-between'>
						{' '}
						<span className='flex gap-2'>
							<BarChart2 /> Daraja
						</span>{' '}
						<span className='text-gray-400'>Mukammal</span>{' '}
					</span>
					<Separator className='mt-1 text-gray-600' />
					<span className='mt-6  flex w-full justify-between'>
						{' '}
						<span className='flex gap-2'>
							<Clock3 /> Soat
						</span>{' '}
						<span className='text-gray-400'>11soat 12m</span>{' '}
					</span>
					<Separator className='mt-1 text-gray-600' />
					<span className='mt-6  flex w-full justify-between'>
						{' '}
						<span className='flex gap-2'>
							<Book /> Mavzular
						</span>{' '}
						<span className='text-gray-400'>89</span>{' '}
					</span>
					<Separator className='mt-1 text-gray-600' />
					<span className='mt-6  flex w-full justify-between'>
						{' '}
						<span className='flex gap-2'>
							<PartyPopper /> Testlar
						</span>{' '}
						<span className='text-gray-400'>899</span>{' '}
					</span>
					<Separator className='mt-1 text-gray-600' />
					<span className='mt-6  flex w-full justify-between'>
						{' '}
						<span className='flex gap-2'>
							<LucideVerified /> Sertificat
						</span>{' '}
						<span className='text-gray-400'>Ha</span>{' '}
					</span>
					<Separator className='mt-1 text-gray-600' />{' '}
					<span className='mt-6  flex w-full justify-between'>
						{' '}
						<span className='flex gap-2'>
							<GraduationCap /> O`quvchilar
						</span>{' '}
						<span className='text-gray-400'>89</span>{' '}
					</span>
					<Separator className='mt-1 text-gray-600' />
					<div className='mt-2 flex flex-col '>
						<span className='mt-2 font-bold'>Ushbu kursni ulashish</span>
						<div className='mt-2 flex items-center justify-center gap-4'>
							<span className='group flex size-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-600 text-gray-200'>
								<Twitter className='group-hover:animate-bounce' />
							</span>
							<span className='group flex size-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-600 text-gray-200'>
								<Instagram className='group-hover:animate-bounce' />
							</span>
							<span className='group flex size-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-600 text-gray-200'>
								<Facebook className='group-hover:animate-bounce' />
							</span>
							<span className='group flex size-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-600 text-gray-200'>
								<Youtube className='group-hover:animate-bounce' />
							</span>
						</div>
					</div>
					<Separator className='mt-8' />
					<div className='mt-8'>
						<Button className='group h-[60px] w-full rounded-full border border-black bg-yellow-500 font-bold text-black  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-yellow-600'>
							Kursni ko`rish{' '}
							<ArrowRight className='ml-2  group-hover:translate-x-2' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailedCourse
