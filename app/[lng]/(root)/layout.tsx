import { ChildrenProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

export default function RootLayout({children}:ChildrenProps) {
  return (
    <div className='custom-scrollbar'>
			<Navbar/>
			{children}
			<Footer/>
		</div>
  );
}
