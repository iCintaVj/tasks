import React, { useState } from 'react';
import './TaskCard.css';
import { TaskCardProps, TaskType } from '../../types/types.ts';
import { deleteTask } from '../../data/dbData.ts';

const TaskCard: React.FC<TaskCardProps> = ({tasks,setTasks, setIsModalOpen, onSelectTask, ...task}) => {
        
    const priorityClass = `priority-${task.priority.toLowerCase()}`;

    function handleDeleteTask(e : any): void {
        const id = e.target.id;
        const newTasks = tasks.filter((taskList) => taskList.id != id);
        setTasks(newTasks);
        deleteTask(id);
    }

    const handleEditTask = (e: any): void => {
        onSelectTask(task);
        setIsModalOpen(true);
    };

    return (
        <div className="task-card" key={`task-card-${task.id}`}>
            <h3 className="task-name" key={`task-name-${task.id}`}>{task.name}</h3>
            <div className={`task-priority ${priorityClass}`} key={`task-priority-${task.id}`}>{task.priority}</div>
            <p className="task-due-date" key={`task-due-date-${task.id}`}>Due: {task.dueDate}</p>
            <div className="task-card-icons" >
                <button className="task-card-edit-icon" id={task.id} onClick={handleEditTask}>
                    Edit
                </button>
                <button className="task-card-delete-icon" id={task.id} onClick={handleDeleteTask}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
