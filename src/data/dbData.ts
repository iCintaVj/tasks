import axios from "axios"
import { TaskListType, TaskType } from "../types/types.ts";
import { dummyColumns, dummyTasks, dummyTaskLists } from './initialData.ts';

export const getColumns = async (): Promise<string[]> => {
    try {
        const response = await axios.get('http://localhost:8080/api/columns');
        return response.data as string[];
    } catch (error) {
        console.error('Failed to fetch columns:', error);
        return dummyColumns;
    }
}

export const getTaskLists = async (): Promise<TaskListType[]> => {
    try {
        const response = await axios.get('http://localhost:8080/api/tasklists');
        return response.data as TaskListType[];   
    } catch (error) {
        console.error('Failed to fetch task lists:', error);
        return dummyTaskLists;
    }
}

export const getTasks = async (): Promise<TaskType[]> => {
    try {
        const response = await axios.get('http://localhost:8080/api/tasks');
        return response.data as TaskType[];   
    } catch (error) {
        console.error('Failed to fetch tasks:', error);
        return dummyTasks;
    }
}

export const createTaskList = async (taskList: TaskListType): Promise<TaskListType> => {
    try {
        const response = await axios.post('http://localhost:8080/api/tasklists', taskList);
        return response.data as TaskListType;
    } catch (error) {
        console.error('Failed to create task list:', error);
        return taskList;
    }
}

export const updateTaskList = async (taskList: TaskListType): Promise<TaskListType> => {
    try {
        const response = await axios.put(`http://localhost:8080/api/tasklists/${taskList.id}`, taskList);
        return response.data as TaskListType;
    } catch (error) {
        console.error('Failed to update task list:', error);
        return taskList;
    }
}

export const deleteTaskList = async (id: string): Promise<void> => {
    try {
        await axios.delete(`http://localhost:8080/api/tasklists/${id}`);
    } catch (error) {
        console.error('Failed to delete task list:', error);
    }
}

export const createTask = async (task: TaskType): Promise<TaskType> => {
    try {
        const response = await axios.post('http://localhost:8080/api/tasks', task);
        return response.data as TaskType;
    } catch (error) {
        console.error('Failed to create task:', error);
        return task;
    }
}

export const updateTask = async (task: TaskType): Promise<TaskType> => {
    try {
        const response = await axios.put(`http://localhost:8080/api/tasks/${task.id}`, task);
        return response.data as TaskType;
    } catch (error) {
        console.error('Failed to update task:', error);
        return task;
    }
}

export const deleteTask = async (id: string): Promise<void> => {
    try {
        await axios.delete(`http://localhost:8080/api/tasks/${id}`);
    } catch (error) {
        console.error('Failed to delete task:', error);
    }
}