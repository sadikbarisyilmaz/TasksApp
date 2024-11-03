import { getAPI, postAPI } from '@/services/fetchAPI';
import { create } from 'zustand'

export const useTasksStore = create((set, get) => ({
  tasks: null,
  readTasks: () => {
    getAPI("/tasks").then((res) => {
      if (res.status && (res.status === 200 || res.status === "success")) {
        console.log(res);
      } else {
        // Priority'e göre taskları kategorize ederek state'i set eder
        set({ tasks: res });
      }
    })
  },
  createTask: (newTask) => {
    postAPI("/tasks", newTask).then((res) => {
      return res
    });
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  updateTask: (updatedTask) => {
    postAPI("/tasks", updatedTask, "PUT").then((res) => {
      return res
    });
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    }));
  },
  deleteTasks: (taskId) => {
    postAPI("/tasks", taskId, "DELETE")
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },
}))
