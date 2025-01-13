import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { TaskListType, AppContextType, TaskType } from '../types/types.ts';
import { getTasks, createTask, deleteTask, updateTask, getColumns, getTaskLists, createTaskList, deleteTaskList, updateTaskList } from '../data/dbData.ts';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    
    const [taskLists, setTaskLists] = useState<TaskListType[]>([]);

    const [selectedTaskList, setSelectedTaskList] = useState<TaskListType>({ id: '', name: '' });

    const [tasks, setTasks] = useState<TaskType[]>([]);
    
    const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const [columns, setColumns] = useState<string[]>([]);

    useEffect(() => {
        const fetchTaskList = async () => {
            try {
                const response: TaskListType[] = await getTaskLists();
                setTaskLists(response);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setTaskLists([]);
            }
        };
        fetchTaskList();

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

        const fetchColumns = async () => {
            try {
            const response: string[] = await getColumns();
            setColumns(response);
            } catch (error) {
            console.error('Error fetching tasks:', error);
            setColumns([]);
            }
        };
        fetchColumns();
    }, []);

    useEffect(() => {
        if (taskLists.length === 0) {
            setSelectedTaskList({ id: '', name: '' }); // No task lists left
        } else if (!taskLists.find((taskList) => taskList.id === selectedTaskList?.id)) {
            setSelectedTaskList(taskLists[0]); // Set to first task list if current selection is removed
        }
    }, [taskLists, selectedTaskList]);

    return (
        <AppContext.Provider value={ { taskLists, setTaskLists, selectedTaskList, setSelectedTaskList, tasks, setTasks, selectedTask, setSelectedTask, isModalOpen, setModalOpen, columns, setColumns, createTask, deleteTask, updateTask, createTaskList, deleteTaskList, updateTaskList } }>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a ColumnProvider');
    }
    return context;
};
