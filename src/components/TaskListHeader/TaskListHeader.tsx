import React, { useState } from 'react';
import './TaskListHeader.css';
import AddButton from '../AddButton/AddButton';
import { TaskListHeaderProps, TaskType } from '../../types/types.ts';

const TaskListHeader: React.FC<TaskListHeaderProps> = ({ taskListId, taskListName, tasks, setTasks, setIsModalOpen, onSelectTask }) => {

    const onAddTask = () => {
        onSelectTask(null);
        setIsModalOpen(true);
    }

    return (
        <div className="task-list-header-container">
            <h1 className="task-list-header">{taskListName}</h1>
            <AddButton content={'Create new Task'} onClick={()=>setIsModalOpen(true)}/>
        </div>
    );
};

export default TaskListHeader;