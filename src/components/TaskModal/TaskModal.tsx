import React, { useState, useEffect } from 'react';
import './TaskModal.css';
import { TaskModalProps, TaskType } from '../../types/types';

const TaskModal: React.FC<TaskModalProps> = ({ task, isOpen, onClose, taskListId, tasks, setTasks }) => {
  const [taskName, setTaskName] = useState(task?.name || '');
  const [description, setDescription] = useState(task?.description || undefined);
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>(task?.priority || 'Medium');
  const [dueDate, setDueDate] = useState(task?.dueDate || new Date().toISOString().split('T')[0]);

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setDescription(task.description);
      setPriority(task.priority);
      setDueDate(task.dueDate);
    }else {
        setTaskName('');
        setDescription('');
        setPriority('Medium');
        setDueDate('');
      }
  }, [task]);

  const handleSave = () => {
    const newTask: TaskType = {
      id: (task?.id || Math.floor(Math.random() * 1000)) + '',
      taskListId,
      name: taskName,
      description,
      priority,
      dueDate,
      status: task?.status || 'Todo',
    };

    if(taskName === '' || dueDate === ''){
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
    } else {
      // If the task doesn't exist, add it
      setTasks([...tasks, newTask]);
    }
  
    onClose();
  };  

  if (!isOpen) return null;

  console.log('TaskModal', task);
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
