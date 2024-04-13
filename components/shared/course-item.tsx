import { ICOurse } from '@/types'
import React from 'react'

import Image from 'next/image'

interface Props {
	course: ICOurse
}
function CourseItem({ course }: Props) {
	return (
		<div className='max-w-7xl  cursor-pointer overflow-hidden rounded shadow-md hover:shadow-xl'>
			<Image
				className='w-full'
				src={course.image}
				width={400}
				height={200}
				alt='Sunset in the mountains'
			/>
			<div className='px-6 py-4'>
				<div className='mb-2 text-xl font-bold'>The Coldest Sunset</div>
				<p className='text-base text-gray-700'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
					quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
					nihil.
				</p>
			</div>
			<div className='px-6 pb-2 pt-4'>
				<span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
					#photography
				</span>
				<span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
					#travel
				</span>
				<span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
					#winter
				</span>
			</div>
		</div>
	)
}

export default CourseItem