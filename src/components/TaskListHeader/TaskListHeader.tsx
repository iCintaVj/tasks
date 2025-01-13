import React, { useState } from 'react';
import './TaskListHeader.css';
import AddButton from '../AddButton/AddButton';
import { useAppContext } from '../../contexts/AppContext.tsx';

const TaskListHeader: React.FC = () => {

    const {selectedTaskList, setSelectedTask, setModalOpen} = useAppContext();

    const onAddTask = () => {
        setSelectedTask(null);
        setModalOpen(true);
    }

    return (
        <div className="task-list-header-container">
            <h1 className="task-list-header">{selectedTaskList.name}</h1>
            <AddButton content={'Create new Task'} onClick={onAddTask}/>
        </div>
    );
};

export default TaskListHeader;