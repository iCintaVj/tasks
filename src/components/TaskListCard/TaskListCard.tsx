import React, { useState, useEffect } from 'react';
import './TaskListCard.css';
import Column from '../Column/Column.tsx';

import { ColumnType, TaskListCardProps, TaskType } from '../../types/types.ts';
import TaskListHeader from '../TaskListHeader/TaskListHeader.tsx';
import TaskModal from '../TaskModal/TaskModal.tsx';
import { getColumns } from '../../data/dbData.ts';
import { dummyColumns } from '../../data/initialData.ts';

const TaskListCard: React.FC<TaskListCardProps> = ({ id, name, taskLists, tasks, setTasks }) => {

    useEffect(() => {
        const fetchColumns = async () => {
            try {
                const response: ColumnType[] = await getColumns();
                setColumns(response);
            } catch (error) {
                console.error('Error fetching columns:', error);
                setColumns(dummyColumns);
            }
        };

        fetchColumns();
    }, []);

    const [columns, setColumns] = useState<ColumnType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    }

    return (
        <div className="task-list-container" id={id}>
            <TaskListHeader key={name} taskListId={id} taskListName={name} tasks={tasks} setTasks={setTasks} setIsModalOpen={setIsModalOpen} onSelectTask={setSelectedTask} />
            <ul className='task-list-items'>
                {taskLists?.some((taskList => taskList.id === id)) ? columns.map((column) => (
                    <li key={column}>
                        <Column name={column} taskListId={id} tasks={tasks} setTasks={setTasks} setIsModalOpen={setIsModalOpen} onSelectTask={setSelectedTask} />
                    </li>
                )) : (
                    <li key='empty-column'>
                        <span>No Task Lists Found</span>
                    </li>
                )}
            </ul>
            {isModalOpen &&
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
