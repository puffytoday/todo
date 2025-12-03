import Todo, { ITodo } from '../models/Todo'

type UpdateTodoInput = {
  title?: string
  description?: string
  isCompleted?: boolean
}

//Create
export const createTodo = async (
  title: string,
  description?: string
): Promise<ITodo> => {
  const newTodo = new Todo({ title, description })
  return await newTodo.save()
}

//Fetch All
export const getTodos = async (): Promise<ITodo[]> => {
  return await Todo.find().sort({ updatedAt: -1 })
}

//Update
export const updateTodo = async (
  id: string,
  updates: UpdateTodoInput
): Promise<ITodo | null> => {
  return await Todo.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  })
}

//Delete
export const deleteTodo = async (id: string): Promise<ITodo | null> => {
  return await Todo.findByIdAndDelete(id)
}
