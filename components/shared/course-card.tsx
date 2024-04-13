import { courses } from '@/constants'
import React from 'react'
import CourseItem from './course-item'

function CourseCard() {
	return (
		<div className='mx-auto mt-4 flex max-w-7xl gap-20'>
			<div className='grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:grid-cols-3 '>
				{courses.map(course => (
					<CourseItem key={course.id} course={course} />
				))}
			</div>
		</div>
	)
}

export default CourseCard
