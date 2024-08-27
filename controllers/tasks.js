// importar modelo
import { TaskModel } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.getAllTasks()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const addTask = async (req, res) => {
  try {
    const task = await TaskModel.addTask(req.body.description)
    res.json(task)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    await TaskModel.deleteTask(Number(req.params.id))
    res.json({ message: 'Deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
