import React, { useState } from 'react';
import './TaskListCard.css';
import Column from '../Column/Column.tsx';
import { dummyColumns } from '../../data/initialData.ts';

import { TaskListType } from '../../types/types.ts';


const TaskListCard: React.FC<TaskListType> = ({ id, name }) => {

    const [columns, setColumns] = useState(dummyColumns);

    return (
        <div className="task-list-container" id={id}>
            <h1 className="task-list-header" >{name}</h1>
            <ul className='task-list-items'>
                {columns.map((column, index) => (
                    <li>
                        <Column key={index} id={column.id} name={column.name} taskListId={id}/>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default TaskListCard;
