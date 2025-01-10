import React, { useState } from 'react';
import TaskCard from '../TaskCard/TaskCard.tsx';
import './Column.css';
import { ColumnProps, ColumnType } from '../../types/types.ts';
import { dummyTasks } from '../../data/initialData.ts';

const Column: React.FC<ColumnProps> = ({ id, name, taskListId }) => {

    const [tasks, setData] = useState(dummyTasks);
    
    return (
        <div className="column" id={id}>
            <h2 className="column-title">{name}</h2>
                <div className="task-list">
                    {
                        tasks.filter((task) => task.taskListId === taskListId).filter((task) => (task.status === name)).map((task) => (
                            <TaskCard key={task.id} {...task} />
                        ))
                    }
                </div>
            
        </div>
    );
};

export default Column;
