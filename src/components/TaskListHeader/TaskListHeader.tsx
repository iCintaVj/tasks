import React from 'react';
import './TaskListHeader.css';
import AddButton from '../AddButton/AddButton';
import { TaskListHeaderProps, TaskType } from '../../types/types.ts';
import {convertToDashSeparatedId} from '../../utils/helper.ts';

const TaskListHeader: React.FC<TaskListHeaderProps> = ({ taskListName, tasks, setTasks }) => {

    const handleAddTaskList = () => {
        const newTask : TaskType = {
            id: Math.floor(Math.random() * 1000),
            taskListId: convertToDashSeparatedId(taskListName),
            name: 'New Task',
            description: 'New Task Description',
            status: 'Todo',
            priority: 'High',
            dueDate: new Date().toISOString()
        }
        tasks.push(newTask);
        setTasks([...tasks]);
    };

    return (
        <div className="task-list-header-container">
            <h1 className="task-list-header">{taskListName}</h1>
            <AddButton content={'Create new Task'} onClick={handleAddTaskList}/>
        </div>
    );
};

export default TaskListHeader;