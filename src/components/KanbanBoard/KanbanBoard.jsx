import React from 'react';
import TaskListCard from '../TaskListCard/TaskListCard.tsx';
import { useAppContext } from '../../contexts/AppContext.tsx';
import SidePanel from '../SidePanel/SidePanel.tsx';
import TaskListHeader from '../TaskListHeader/TaskListHeader.tsx';
import './KanbanBoard.css'

const KanbanBoard = () => {
    const { taskLists, selectedTaskList } = useAppContext();
    return (
        <>
            <div className="left-section">
                <SidePanel key="side-panel" />
            </div>
            <div className="right-section">
                <TaskListHeader key={selectedTaskList.id} />
                <div className="task-list-container" id={selectedTaskList.id}>
                    {taskLists.length > 0 ?
                        <TaskListCard key="task-list-card" /> :
                        <span className='empty-task-list'> No Task Lists Found</span>}
                </div>
            </div>
        </>
    );
};

export default KanbanBoard;