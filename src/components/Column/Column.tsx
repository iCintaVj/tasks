import React from 'react';
import TaskCard from '../TaskCard/TaskCard.tsx';
import './Column.css';
import { ColumnType } from '../../types/types.ts';

const Column: React.FC<ColumnType> = ({ name, tasks }) => {
    return (
        <div className="column">
            <h2 className="column-title">{name}</h2>
            <div className="task-list">
                {tasks
                    .filter((task) => task.status === name)
                    .map((task) => (
                        <TaskCard
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            priority={task.priority}
                            dueDate={task.dueDate}
                            status={task.status}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Column;
