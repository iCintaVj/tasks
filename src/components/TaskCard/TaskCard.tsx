import React from 'react';
import './TaskCard.css';
import { TaskType } from '../../types/types.ts';

const TaskCard: React.FC<TaskType> = ({ id, name, priority, dueDate }) => {
    const priorityClass = `priority-${priority.toLowerCase()}`;

    return (
        <div className="task-card" key={`task-card-${id}`}>
            <h3 className="task-name" key={`task-name-${id}`}>{name}</h3>
            <div className={`task-priority ${priorityClass}`} key={`task-priority-${id}`}>{priority}</div>
            <p className="task-due-date" key={`task-due-date-${id}`}>Due: {dueDate}</p>
        </div>
    );
};

export default TaskCard;
