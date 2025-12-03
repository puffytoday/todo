import mongoose from 'mongoose'
import connectDB from './config/db'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from './services/todoService'

const main = async () => {
  try {
    await connectDB()

    const up = updateTodo('6930894dfad9d772e47ff631', {
      title: 'new title',
      isCompleted: true,
    })

    console.log(up)
    const todos = await getTodos()
    console.log(`All: ${todos}`)
  } catch (err) {
    console.error(`An error occured: ${err}`)
  } finally {
    await mongoose.disconnect()
    console.log('Connection closed')
    process.exit(0)
  }
}

main()
