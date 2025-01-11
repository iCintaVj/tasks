import React, { useState } from 'react';
import './TaskListCard.css';
import Column from '../Column/Column.tsx';
import { dummyColumns, dummyTasks } from '../../data/initialData.ts';

import { TaskListCardProps, TaskListType } from '../../types/types.ts';
import TaskListHeader from '../TaskListHeader/TaskListHeader.tsx';

const TaskListCard: React.FC<TaskListCardProps> = ({ id, name, taskLists, tasks, setTasks }) => {
    const [columns, setColumns] = useState(dummyColumns);
    
    return (
        <div className="task-list-container" id={id}>
            <TaskListHeader key= {name} taskListId = {id} taskListName={name} tasks={tasks} setTasks={setTasks}/>
            <ul className='task-list-items'>
                { taskLists && taskLists.some((taskList => taskList.id === id)) ? columns.map((column) => (
                    <li key={column.id}>
                        <Column id={column.id} name={column.name} taskListId={id} tasks={tasks} setTasks={setTasks}/>
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
