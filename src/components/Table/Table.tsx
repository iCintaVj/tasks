import React, {useEffect, useRef, useState} from 'react';
import { useAppContext } from '../../contexts/AppContext.tsx';
import { getTaskListNameFromId } from '../../utils/helper.ts';
import './Table.css'
import { TaskType } from '../../types/types.ts';
import { ReactComponent as OptionButton } from '../../resources/option.svg'
import { deleteTask } from '../../data/dbData.ts';


const Table: React.FC<any> = ({ currentPage, tasksPerPage , taskContainsFilter}) => {
    const { tasks, taskLists, setSelectedTask, setIsModalOpen, selectedTask, setTasks} = useAppContext();
    const columns  = ['S.No', 'Name', 'Catagory', 'Description', 'Priority', 'Due Date', 'Status', 'Action'];

    const [isContextOpen, setIsContextOpen] = useState<boolean>(false);

    const contextMenuRef = useRef<HTMLDivElement | null>(null);

    const [sortConfig, setSortConfig] = useState<{ column: string; direction: 'asc' | 'desc' | null }>({
        column: '',
        direction: null,
      });
    
      const [sortedTasks, setSortedTasks] = useState<TaskType[]>(tasks);
    
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
        let sortableTasks = [...tasks];
        if (sortConfig.column) {
          sortableTasks.sort((a, b) => {
            let aValue = (a as any)[sortConfig.column.toLowerCase().replace(/\s+/g, '')]
            
            if(sortConfig.column === 'Catagory') {
                aValue = getTaskListNameFromId(a.taskListId, taskLists);
            } else if (sortConfig.column === 'Due Date'){
                aValue = a.dueDate
            }

            let bValue = (b as any)[sortConfig.column.toLowerCase().replace(/\s+/g, '')];

            if(sortConfig.column === 'Catagory') {
                bValue = getTaskListNameFromId(b.taskListId, taskLists);
            } else if (sortConfig.column === 'Due Date'){
                bValue = b.dueDate
            }
    
            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
          });
        }
        setSortedTasks(sortableTasks);
      }, [tasks, sortConfig]);
    
      const requestSort = (column: string) => {
        setSortConfig((prev) => ({
          column,
          direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
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
                        {columns.map((column, index) => <th key={'' + index} onClick={() => requestSort(column)} className={sortConfig.column === column && column!=columns[0] && column!=columns[columns.length-1] ? `sorted ${sortConfig.direction}` : ''} >{column}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedTasks.filter((task) => task.name.toLowerCase().includes(taskContainsFilter.toLowerCase())).map((task, index) =>
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