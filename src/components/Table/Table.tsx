import React from 'react';
import { useAppContext } from '../../contexts/AppContext.tsx';
import { getTaskListNameFromId } from '../../utils/helper.ts';
import './Table.css'


const Table: React.FC<any> = ({currentPage, tasksPerPage}) => {
    const {tasks, taskLists} = useAppContext();
    const columns = ['S.No', 'Task Name', 'Task List', 'Description', 'Priority', 'Due Date', 'Status', 'Action'];

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => <th key={''+index}>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task, index) =>
                        (index+1 >  currentPage*tasksPerPage && index+1<=(currentPage*tasksPerPage)+tasksPerPage) &&
                        <tr key={task.id || index}>
                            <td>{index+1}</td>
                            <td>{task.name}</td>
                            <td>{getTaskListNameFromId(task.taskListId, taskLists)}</td>
                            <td>{task.description}</td>
                            <td>{task.priority}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.status}</td>
                            <td><button>Edit</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default Table;