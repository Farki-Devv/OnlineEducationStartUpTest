'use server'

import { connectToDatabase } from '@/lib/mongoose'
import { ICreateUser } from '.'
import User from '@/database/user.model'


export const createUser = async (data: ICreateUser) => {
	try {
		await connectToDatabase()
		const { clerkId, email, fullName, picture } = data
		const isExist = await User.findOne({ clerkId })

		if (isExist) {
			const updatedUser = await User.findOneAndUpdate(
				{ email },
				{ fullName, picture, clerkId },
				{ new: true }
			)

			return updatedUser
		}

		const newUser = User.create(data)

		return newUser
	} catch (error) {
		throw new Error('Error creating user. Please try again.')
	}
}