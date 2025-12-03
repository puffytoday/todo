import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'

configDotenv()

const uri = process.env.MONGO_URI

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(uri || '')
    console.log(`Connected to MongoDB: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`)
    process.exit(1)
  }
}

export default connectDB
