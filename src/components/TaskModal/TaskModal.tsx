import React, { useState } from 'react';
import './TaskModal.css'; // Add appropriate styles for the modal
import { TaskType } from '../../types/types';

interface TaskModalProps {
  isOpen: boolean;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, setTasks, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newTask = {
      id: Date.now().toString(), // Generate unique ID for the new task
      name: taskName,
      dueDate,
      priority,
      description,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    onClose(); // Close the modal after adding the task
  };

  return (
    <div className={`task-modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="task-modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Add New Task</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Task Name:</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Due Date:</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Priority:</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="modal-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" onClick={handleSubmit}>Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
