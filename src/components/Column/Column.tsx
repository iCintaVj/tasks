import React, { useState } from 'react';
import TaskCard from '../TaskCard/TaskCard.tsx';
import './Column.css';
import { ColumnProps, ColumnType } from '../../types/types.ts';


const Column: React.FC<ColumnProps> = ({ id, name, taskListId, tasks, setTasks }) => {

    
    
    return (
        <div className="column" id={id}>
            <h2 className="column-title">{name}</h2>
                <div className="task-list">
                    {
                        tasks.length > 0 && tasks.some((task) => task.taskListId === taskListId) ?
                       tasks.filter((task) => task.taskListId === taskListId).filter((task) => (task.status === name)).map((task) => (
                            <TaskCard key={task.id} {...task} tasks={tasks} setTasks={setTasks}/>
                        )) :
                        (
                            <span className='empty-task-list'>No tasks found</span>
                        )
                    }
                </div>
            
        </div>
    );
};

export default Column;
