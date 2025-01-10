import React from 'react';
import './TaskListHeader.css';
import AddButton from '../AddButton/AddButton';

const TaskListHeader: React.FC<any> = ({ taskListName }) => {
    const handleAddTaskList = () => {
        console.log('Add Task List');
    };
    return (
        <div className="task-list-header-container">
            <h1 className="task-list-header">{taskListName}</h1>
            <AddButton content={'Create new Task List'} onClick={handleAddTaskList}/>
        </div>
    );
};

export default TaskListHeader;