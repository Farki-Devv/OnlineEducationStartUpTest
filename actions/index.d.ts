import { IUser } from '@/app.types'

export interface ICreateUser {
	clerkId: string
	fullName: string
	email: string
	picture: string
}
export interface IUpdateUser {
	clerkId: string
	path?: string
	updatedData: Partial<IUser>
}