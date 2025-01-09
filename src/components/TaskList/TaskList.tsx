import React from 'react';
import './TaskList.css';
import Column from '../Column/Column.tsx';

import { TaskListType } from '../../types/types.ts';


const TaskList: React.FC<TaskListType> = ({ name, tasks }) => {

    const columnOrder: string[] = ['Todo', 'In Progress', 'Completed'];

    return (
        <div className="task-list-container">
            <h1 className="task-list-header">{name}</h1>
            <ul className='task-list-items'>
                {columnOrder.map((column, index) => (
                    <li>
                        <Column key={index} name={column} tasks={tasks} />
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default TaskList;
