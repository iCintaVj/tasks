import React from 'react';
import TaskCard from '../TaskCard/TaskCard.tsx';
import './Column.css';
import { ColumnProps } from '../../types/types.ts';
import { useAppContext } from '../../contexts/AppContext.tsx';


const Column: React.FC<ColumnProps> = (column) => {

    const { selectedTaskList, tasks } = useAppContext();

    return (
        <div className="column">
            <h2 className="column-title">{column.name}</h2>
                <div className="task-list">
                    {
                        tasks.length > 0 && tasks.some((task) => task.taskListId === selectedTaskList.id) ?
                        tasks.filter((task) => task.taskListId === selectedTaskList.id).filter((task) => (task.status === column.name)).map((task) => (
                            <TaskCard key={task.id} {...task}/>
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
