import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

export const cpnnectToDatabase = async () => {
	mongoose.set('strictQuery', true)
	if (!process.env.MONGODB_URl) {
		return console.log('Mongodb url is not defind')
	}

	if (isConnected) {
		return console.log('MongoDB is already connected')
	}

	try {
		const options: ConnectOptions = {
			dbName: process.env.MONGODB_DB,
			autoCreate: true,
		}
		await mongoose.connect(process.env.MONGODB_URl, options)
		isConnected = true
	} catch (error) {
		console.log('error connect to database')
	}
}
