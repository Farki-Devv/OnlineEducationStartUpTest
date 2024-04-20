import { ReactNode } from 'react'

export interface ChildrenProps {
	children:ReactNode
}
export interface ICOurse {
	name:string
	teacher:string
	rating:number
	price:number
	hours:number
	minut:number
	lessons:number
	students:number
	image:string
	id:number
	level:number
	duration:number
	quizzes:number
	certifications:string
	graduation:number
}
export interface LngParams {
	params: { lng: string }
}