import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { TaskListType, TaskListContextType } from '../types/types.ts';
import { createTaskList, updateTaskList, deleteTaskList, getTaskLists } from '../data/dbData.ts';

const TaskListContext = createContext<TaskListContextType | undefined>(undefined);

export const TaskListProvider = ({ children }: { children: ReactNode }) => {

    const [taskLists, setTaskLists] = useState<TaskListType[]>([]);

    const [selectedTaskList, setSelectedTaskList] = useState<TaskListType>({ id: '', name: '' });

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
    }, []);

    useEffect(() => {
        if (taskLists.length === 0) {
            setSelectedTaskList({ id: '', name: '' }); // No task lists left
        } else if (!taskLists.find((taskList) => taskList.id === selectedTaskList?.id)) {
            setSelectedTaskList(taskLists[0]); // Set to first task list if current selection is removed
        }
    }, [taskLists, selectedTaskList]);

    return (
        <TaskListContext.Provider value={{ taskLists, setTaskLists, createTaskList, deleteTaskList, updateTaskList, selectedTaskList, setSelectedTaskList }}>
            {children}
        </TaskListContext.Provider>
    );
};

export const useTaskListContext = () => {
    const context = useContext(TaskListContext);
    if (!context) {
        throw new Error('useTaskListContext must be used within a TaskListProvider');
    }
    return context;
};