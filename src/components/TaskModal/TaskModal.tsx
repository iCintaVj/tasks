import React, { useState } from 'react';
import './TaskModal.css';
import { TaskModalProps, TaskType } from '../../types/types';
import { createTask, updateTask } from '../../data/dbData.ts';

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, taskListId, tasks, setTasks }) => {
    const [taskName, setTaskName] = useState(task?.name || '');
    const [description, setDescription] = useState(task?.description || undefined);
    const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>(task?.priority || 'Medium');
    const [dueDate, setDueDate] = useState(task?.dueDate || new Date().toISOString().split('T')[0]);
    const [status, setStatus] = useState<'Todo' | 'In Progress' | 'Done'>(task?.status || 'Todo');

    // useEffect(() => {
    //     if (task) {
    //         setTaskName(task.name);
    //         setDescription(task.description);
    //         setPriority(task.priority);
    //         setDueDate(task.dueDate);
    //         setStatus(task.status);
    //     } 
        
    // }, [task]);

    const handleSave = () => {
        const newTask: TaskType = {
            id: (task?.id || Math.floor(Math.random() * 1000)) + '',
            taskListId,
            name: taskName,
            description,
            priority,
            dueDate,
            status,
        };

        if (taskName === '' || dueDate === '') {
            alert('Task Name and Due Date are required');
            return;
        }

        // Check if the task already exists
        const taskIndex = tasks.findIndex((t) => t.id === newTask.id);

        if (taskIndex > -1) {
            // If the task exists, update it
            const updatedTasks = [...tasks];
            updatedTasks[taskIndex] = newTask;
            setTasks(updatedTasks);
            updateTask(newTask);
        } else {
            // If the task doesn't exist, add it
            setTasks([...tasks, newTask]);
            createTask(newTask);
        }

        onClose();
    };

    console.log('TaskModal', task);

    console.log('TaskModal', taskName, description, priority, dueDate, status);
    

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    autoComplete="off"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoComplete="off"
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')} autoComplete="off">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    autoComplete="off"
                />
                <select value={status} onChange={(e) => setStatus(e.target.value as 'Todo' | 'In Progress' | 'Done')} autoComplete="off">
                    <option value="Todo">Todo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <div className="modal-actions">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
