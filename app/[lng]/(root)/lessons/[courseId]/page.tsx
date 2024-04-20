import TopBar from '@/components/shared/top-bar'
import DetailedCourse from './_components/detailed-course'


function Page() {
	return (
		<div className='mx-auto mt-2 max-w-7xl'>
			<TopBar twoLink='Course' threeLink='Tajvidli o`qish'/>
			<DetailedCourse/>
			
		</div>
	)
}

export default Page
