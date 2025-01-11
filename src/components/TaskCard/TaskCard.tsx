import React, { useState } from 'react';
import './TaskCard.css';
import { TaskCardProps, TaskType } from '../../types/types.ts';
import { ReactComponent as DeleteIcon } from '../../resources/delete.svg';
import { ReactComponent as EditIcon } from '../../resources/edit.svg';

const TaskCard: React.FC<TaskCardProps> = ({id, name, dueDate, priority,status,taskListId,tasks,description, setTasks}) => {
        
    const priorityClass = `priority-${priority.toLowerCase()}`;

    function handleDeleteTask(e : any): void {
        const id = e.target.id;
        const newTasks = tasks.filter((taskList) => taskList.id != id);
        setTasks(newTasks);
    }

    const handleEditTask = (e: any): void => {
        const taskId = e.target.id;
        const taskToEdit = tasks.find((task) => task.id === taskId);
        if (taskToEdit) {
            // TODO: Implement edit task functionality
        }
      };

    return (
        <div className="task-card" key={`task-card-${id}`}>
            <h3 className="task-name" key={`task-name-${id}`}>{name}</h3>
            <div className={`task-priority ${priorityClass}`} key={`task-priority-${id}`}>{priority}</div>
            <p className="task-due-date" key={`task-due-date-${id}`}>Due: {dueDate}</p>
            <div className="task-card-icons" >
                <button className="task-card-edit-icon" id={id} onClick={handleEditTask}>
                    Edit
                </button>
                <button className="task-card-delete-icon" id={id} onClick={handleDeleteTask}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
