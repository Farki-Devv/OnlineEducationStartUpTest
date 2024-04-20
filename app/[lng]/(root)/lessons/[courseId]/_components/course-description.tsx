import { BadgeCheck } from 'lucide-react'
import React from 'react'

function CourseDescription() {
	return (
		<div className=' xs:w-[580px] mt-2  flex flex-col justify-center rounded bg-white p-10 shadow-xl lg:w-[700px] xl:w-[900px]'>
			<span className='text-xl font-bold'>Course Description</span>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
				accusantium fuga earum odio aliquam accusamus aspernatur nemo suscipit
				vel iste consequatur consequuntur, error at veniam corporis natus ipsam,
				quidem aperiam provident. Porro quam perspiciatis earum nemo harum
				laborum quas sapiente.
			</p>
			<span className='mt-2 text-xl font-bold'>What you will learn</span>
			<div className=' flex w-full justify-between'>
				<div className='mt-2 flex flex-col'>
					<span className='mt-2 flex gap-2 '>
						<BadgeCheck className='text-yellow-600' />
						<span className='font-bold'>Full course</span>
					</span>
					<span className='mt-2 flex gap-2 '>
						<BadgeCheck className='text-yellow-600' />
						<span className='font-bold'>Arab Alifbe</span>
					</span>
					<span className='mt-2 flex gap-2 '>
						<BadgeCheck className='text-yellow-600' />
						<span className='font-bold'>Learn Tajvid</span>
					</span>
					<span className='mt-2 flex gap-2 '>
						<BadgeCheck className='text-yellow-600' />
						<span className='font-bold'>Reading Qur`an</span>
					</span>
				</div>

				<div className='mt-2 flex flex-col px-20'>
					<span className='mt-2 flex gap-2 '>
						<BadgeCheck className='text-yellow-600' />
						<span className='font-bold'>Full course</span>
					</span>
					<span className='mt-2 flex gap-2 '>
						<BadgeCheck className='text-yellow-600' />
						<span className='font-bold'>Arab Alifbe</span>
					</span>
					<span className='mt-2 flex gap-2 '>
						<BadgeCheck className='text-yellow-600' />
						<span className='font-bold'>Learn Tajvid</span>
					</span>
					<span className='mt-2 flex gap-2 '>
						<BadgeCheck className='text-yellow-600' />
						<span className='font-bold'>Reading Qur`an</span>
					</span>
				</div>
			</div>
		</div>
	)
}

export default CourseDescription
