import React, { useEffect } from 'react';
import './TaskListCard.css';
import Column from '../Column/Column.tsx';

import { getColumns } from '../../data/dbData.ts';
import { dummyColumns } from '../../data/initialData.ts';
import { useAppContext } from '../../contexts/AppContext.tsx';

const TaskListCard: React.FC = () => {

    const { taskLists, selectedTaskList,  columns, setColumns} = useAppContext();

    useEffect(() => {
        const fetchColumns = async () => {
            try {
                const response: string[] = await getColumns();
                setColumns(response);
            } catch (error) {
                console.error('Error fetching columns:', error);
                setColumns(dummyColumns);
            }
        };

        fetchColumns();
    }, []);

    return (
            <ul className='task-list-items'>
                {taskLists?.some((taskList => taskList.id === selectedTaskList.id)) ? columns.map((column) => (
                    <li key={column}>
                        <Column key={column} name={column}/>
                    </li>
                )) : (
                    <li key='empty-column'>
                        <span>No Task Lists Found</span>
                    </li>
                )}
            </ul>
    );
};

export default TaskListCard;

