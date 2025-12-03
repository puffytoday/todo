import { Request, Response } from 'express'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from '../services/todoService'

export const createTodoHandler = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body
    if (!title) return res.status(400).json({ message: 'Title is required' })
    const todo = await createTodo(title, description)
    res.status(201).json(todo)
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo: ', error })
  }
}

export const fetchTodosHandler = async (req: Request, res: Response) => {
  try {
    const todos = await getTodos()
    res.status(200).json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos: ', error })
  }
}

export const updateTodoHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const updates = req.body
    const updatedTodo = await updateTodo(id, updates)
    if (!updateTodo) return res.status(404).json({ message: 'Todo not found' })
    res.status(200).json(updateTodo)
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo: ', error })
  }
}

export const deleteTodoHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deletedTodo = await deleteTodo(id)
    if (!deleteTodo) return res.status(404).json({ message: 'Todo not found' })
    res.status(200).json({ message: 'Deleted todo: ', deleteTodo })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo: ', error })
  }
}
