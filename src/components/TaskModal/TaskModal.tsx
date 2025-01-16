import React, { useState } from 'react';
import './TaskModal.css';
import { TaskListType, TaskType } from '../../types/types';
import { createTask, createTaskList, updateTask } from '../../data/dbData.ts';
import { useAppContext } from '../../contexts/AppContext.tsx';
import { convertToDashSeparatedId, getTaskListNameFromId } from '../../utils/helper.ts';

const TaskModal: React.FC = () => {

    const {taskLists, selectedTask, setTasks, tasks, setSelectedTask, setIsModalOpen } = useAppContext();

    const [taskName, setTaskName] = useState(selectedTask?.name || '');
    const [description, setDescription] = useState(selectedTask?.description || undefined);
    const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>(selectedTask?.priority || 'Medium');
    const [dueDate, setDueDate] = useState(selectedTask?.dueDate || new Date().toISOString().split('T')[0]);
    const [status, setStatus] = useState<'Todo' | 'In Progress' | 'Done'>(selectedTask?.status || 'Todo');
    const [taskListId, setTaskListId] = useState<any>(selectedTask?.taskListId || taskLists[0].id);

    const handleSave = (e) => {
        try{
            e.preventDefault();
            const newTask: TaskType = {
                id: (selectedTask?.id || Math.floor(Math.random() * 1000)) + '',
                taskListId : taskListId, 
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
        } catch (error) {
            console.log('Error saving task:', error);
        }

        onClose();
    };

    const onClose = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{selectedTask ? 'Edit Task' : 'Add Task'}</h2>
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
                <select value={taskListId} onChange={(e) => setTaskListId(e.target.value)} autoComplete="off">
                    {taskLists.map((taskList) => (
                        <option key={taskList.id} value={taskList.id}>{getTaskListNameFromId(taskList.id, taskLists)}</option>
                    ))}
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
