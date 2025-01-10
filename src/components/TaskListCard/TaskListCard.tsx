import React, { useState } from 'react';
import './TaskListCard.css';
import Column from '../Column/Column.tsx';
import { dummyColumns } from '../../data/initialData.ts';

import { TaskListCardProps, TaskListType } from '../../types/types.ts';
import TaskListHeader from '../TaskListHeader/TaskListHeader.tsx';

const TaskListCard: React.FC<TaskListCardProps> = ({ id, name, taskLists }) => {
    const [columns, setColumns] = useState(dummyColumns);
    
    return (
        <div className="task-list-container" id={id}>
            <TaskListHeader key= {name} taskListName={name}/>
            <ul className='task-list-items'>
                { taskLists && taskLists.some((taskList => taskList.id === id)) ? columns.map((column, index) => (
                    <li key={column.id}>
                        <Column id={column.id} name={column.name} taskListId={id}/>
                    </li>
                )) : (
                    <li key='empty-column'>
                        <span>No Task Lists Found</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default TaskListCard;
