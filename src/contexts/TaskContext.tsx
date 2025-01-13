import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import {TasksContextType, TaskType} from '../types/types.ts';
import { getTasks, createTask, updateTask, deleteTask } from '../data/dbData.ts';

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response: TaskType[] = await getTasks();
        setTasks(response);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setTasks([]);
      }
    };
    fetchTasks();
  },[]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, selectedTask, setSelectedTask, updateTask, createTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
