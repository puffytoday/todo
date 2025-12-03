import { Router } from 'express'
import {
  createTodoHandler,
  fetchTodosHandler,
  updateTodoHandler,
} from '../controllers/todoController'

const router = Router()

router.post('/', createTodoHandler)
router.get('/', fetchTodosHandler)
router.put('/:id', updateTodoHandler)
router.delete('/:id')

export default router
