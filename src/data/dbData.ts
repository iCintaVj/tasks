import axios from "axios"
import { TaskListType, TaskType, ColumnType } from "../types/types";

export const getColumns = async (): Promise<ColumnType[]> => {
    const response = await axios.get('http://localhost:8080/api/columns');
    return response.data;
}

export const getTaskLists = async (): Promise<TaskListType[]> => {
    const response = await axios.get('http://localhost:8080/api/tasklists');
    return response.data;
}

export const getTasks = async (): Promise<TaskType[]> => {
    const response = await axios.get('http://localhost:8080/api/tasks');
    return response.data;
}

export const createTaskList = async (taskList: TaskListType): Promise<TaskListType> => {
    const response = await axios.post('http://localhost:8080/api/tasklists', taskList);
    return response.data;
}

export const updateTaskList = async (taskList: TaskListType): Promise<TaskListType> => {
    const response = await axios.put(`http://localhost:8080/api/tasklists/${taskList.id}`, taskList);
    return response.data;
}

export const deleteTaskList = async (id: string): Promise<void> => {
    await axios.delete(`http://localhost:8080/api/tasklists/${id}`);
}

export const createTask = async (task: TaskType): Promise<TaskType> => {
    const response = await axios.post('http://localhost:8080/api/tasks', task);
    return response.data;
}

export const updateTask = async (task: TaskType): Promise<TaskType> => {
    const response = await axios.put(`http://localhost:8080/api/tasks/${task.id}`, task);
    return response.data;
}

export const deleteTask = async (id: string): Promise<void> => {
    await axios.delete(`http://localhost:8080/api/tasks/${id}`);
}