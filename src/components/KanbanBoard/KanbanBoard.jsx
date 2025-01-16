import React from 'react';
import TaskListCard from '../TaskListCard/TaskListCard.tsx';
import { useAppContext } from '../../contexts/AppContext.tsx';

const KanbanBoard = () => {
    const { taskLists } = useAppContext();
    return (
        <>
            {taskLists.length > 0 ?
                <TaskListCard key="task-list-card" /> :
                <span className='empty-task-list'> No Task Lists Found</span>}
        </>
    );
};

export default KanbanBoard;