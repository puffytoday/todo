import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import todoRoutes from './routes/todoRoutes'
import connectDB from './config/db'

dotenv.config()

const app: Application = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api/todos', todoRoutes)

const startServer = async () => {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Failed to start server: ', error)
    process.exit(1)
  }
}

startServer()
