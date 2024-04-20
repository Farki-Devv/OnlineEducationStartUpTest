import CourseCard from '@/components/shared/course-card'
import TopBar from '@/components/shared/top-bar'
import React from 'react'

function Page() {
	return (
		<div className='mt-2'>
			<TopBar twoLink='Lessons'/>
			<CourseCard/>
		</div>
	)
}

export default Page
