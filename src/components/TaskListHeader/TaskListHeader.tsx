import React from 'react';
import './TaskListHeader.css';
import AddButton from '../AddButton/AddButton';
import { useAppContext } from '../../contexts/AppContext.tsx';

const TaskListHeader: React.FC = () => {

    const {selectedTaskList, setSelectedTask, setIsModalOpen, isTableView} = useAppContext();

    const onAddTask = () => {
        setSelectedTask(null);
        setIsModalOpen(true);
    }

    return (
        <div className="task-list-header-container">
            <h1 className="task-list-header">{isTableView ? 'Table View' : selectedTaskList.name}</h1>
            <AddButton content={'Create new Task'} onClick={onAddTask}/>
        </div>
    );
};

export default TaskListHeader;