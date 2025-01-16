import React, {useEffect, useRef, useState} from 'react';
import { useAppContext } from '../../contexts/AppContext.tsx';
import { getTaskListNameFromId } from '../../utils/helper.ts';
import './Table.css'
import { TaskType } from '../../types/types.ts';
import { ReactComponent as EditButton } from '../../resources/edit.svg'
import { ReactComponent as DeleteButton } from '../../resources/delete.svg'
import { ReactComponent as OptionButton } from '../../resources/option.svg'
import { deleteTask } from '../../data/dbData.ts';


const Table: React.FC<any> = ({ currentPage, tasksPerPage }) => {
    const { tasks, taskLists, setSelectedTask, setIsModalOpen, selectedTask, setTasks} = useAppContext();
    const columns = ['S.No', 'Task Name', 'Catagory', 'Description', 'Priority', 'Due Date', 'Status', 'Action'];

    const [isContextOpen, setIsContextOpen] = useState<boolean>(false);

    const contextMenuRef = useRef<HTMLDivElement | null>(null);
    
      const onEditTask = (task: TaskType | null) => {
        setIsModalOpen(true);
      };

      const onDeleteTask = (id : string) => {
        const newTasks = tasks.filter((taskList) => taskList.id != id);
        setTasks(newTasks);
        deleteTask(id);
      };
    
      const openContextMenu = (e: React.MouseEvent, task: TaskType) => {
        e.preventDefault();
        setSelectedTask(task);
        setIsContextOpen(true);
      };
    
      const closeContextMenu = () => {
        setIsContextOpen(false);
      };

      useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
          if (
            contextMenuRef.current &&
            !contextMenuRef.current.contains(e.target as Node)
          ) {
            closeContextMenu();
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    return (
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => <th key={'' + index}>{column}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) =>
                            (index + 1 > currentPage * tasksPerPage && index + 1 <= (currentPage * tasksPerPage) + tasksPerPage) &&
                            <tr key={task.id || index}>
                                <td>{index + 1}</td>
                                <td>{task.name}</td>
                                <td>{getTaskListNameFromId(task.taskListId, taskLists)}</td>
                                <td>{task.description}</td>
                                <td>{task.priority}</td>
                                <td>{task.dueDate}</td>
                                <td>{task.status}</td>
                                <td>
                                    <OptionButton className="icon" onClick={(e) => openContextMenu(e, task)} />
                                    {isContextOpen && selectedTask && task.id === selectedTask.id && (
                                        <div
                                            className="context-menu" ref={contextMenuRef}
                                        >
                                            <button onClick={() => onEditTask(selectedTask)}>Edit</button>
                                            <button onClick={() => onDeleteTask(selectedTask.id)}>Delete</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
    );
};

export default Table;