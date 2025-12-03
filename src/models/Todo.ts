import mongoose, { Document, Schema } from 'mongoose'

export interface ITodo extends Document {
  title: string
  description?: string
  isCompleted: boolean
  createdAt: Date
  updatedAt: Date
}

const TodoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model<ITodo>('Todo', TodoSchema)
