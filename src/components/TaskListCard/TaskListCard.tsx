import React, { useState } from 'react';
import './TaskListCard.css';
import Column from '../Column/Column.tsx';
import { dummyColumns, dummyTasks } from '../../data/initialData.ts';

import { TaskListCardProps, TaskListType, TaskType } from '../../types/types.ts';
import TaskListHeader from '../TaskListHeader/TaskListHeader.tsx';
import TaskModal from '../TaskModal/TaskModal.tsx';

const TaskListCard: React.FC<TaskListCardProps> = ({ id, name, taskLists, tasks, setTasks }) => {
    const [columns, setColumns] = useState(dummyColumns);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedTask(null);        
    }
    
    return (
        <div className="task-list-container" id={id}>
            <TaskListHeader key= {name} taskListId = {id} taskListName={name} tasks={tasks} setTasks={setTasks} setIsModalOpen={setIsModalOpen} onSelectTask={setSelectedTask}/>
            <ul className='task-list-items'>
                { taskLists && taskLists.some((taskList => taskList.id === id)) ? columns.map((column) => (
                    <li key={column.id}>
                        <Column id={column.id} name={column.name} taskListId={id} tasks={tasks} setTasks={setTasks} setIsModalOpen={setIsModalOpen} onSelectTask={setSelectedTask}/>
                    </li>
                )) : (
                    <li key='empty-column'>
                        <span>No Task Lists Found</span>
                    </li>
                )}
            </ul>
            { isModalOpen && 
                <TaskModal
                    task={selectedTask}
                    tasks={tasks}
                    setTasks={setTasks}
                    onClose={handleModalClose}
                    taskListId={id}
                />
            }
        </div>
    );
};

export default TaskListCard;
