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
}