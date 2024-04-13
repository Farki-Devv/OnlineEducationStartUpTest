import React from 'react'
import FormPage from './_components/form'
import Hero from './_components/hero'

function Page() {
	return (
		<div className='mx-auto grid max-w-7xl grid-cols-1 items-center justify-between p-8 md:flex'>
			<div>
				<Hero />
			</div>

			<div className='w-full'>
				<FormPage />
			</div>
		</div>
	)
}

export default Page
