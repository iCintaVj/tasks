import React, { useState, useRef } from 'react';
import { SidePanelNavItemProps, TaskListType } from '../../types/types.ts';
import './SidePanelNavItem.css';
import { deleteTaskList, updateTaskList } from '../../data/dbData.ts';
import { useAppContext } from '../../contexts/AppContext.tsx';

const SidePanelNavItem: React.FC<TaskListType> = ({ id, name}) => {
  const [newTitle, setNewTitle] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const {taskLists, setTaskLists} = useAppContext();

  const handleEditClick = (e:any) => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0); // Focus the input after rendering
  };

  const handleDeleteClick = (e : any) => {    
    const id = e.target.id;
    const newTaskLists = taskLists.filter((taskList) => taskList.id != id);
    setTaskLists(newTaskLists);
    deleteTaskList(id);
  };

  const handleSubmit = (e : any) => {
    setIsEditing(false);
    const id = e.target.id
    const value = e.target.value
    const newTaskLists : TaskListType[] = taskLists.map((taskList : TaskListType) => {
      if(taskList.id === id) {
        taskList.name = value;
        updateTaskList(taskList);
      }
      return taskList;
    });
    setTaskLists(newTaskLists);
  };

  return (
    <div className='task-list-item-content'> 
      {isEditing ? (
        <>
        <input
          id={id}
          className="edit-input"
          type="text"
          ref={inputRef}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleSubmit}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSubmit(e);
          }}/>
          <div className="task-list-item-icons">
            <button className="task-card-delete-icon" id={id} onClick={()=> setIsEditing(false)}>
              Cancel
            </button>
          </div>
          </>
      ) : (
        <>
          <div className="task-list-item-name">{name}</div>
          <div className="task-list-item-icons">
            <button className="task-card-edit-icon" id={id} onClick={handleEditClick}>
                Edit
            </button>
            <button className="task-card-delete-icon" id={id} onClick={handleDeleteClick}>
                Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SidePanelNavItem;
