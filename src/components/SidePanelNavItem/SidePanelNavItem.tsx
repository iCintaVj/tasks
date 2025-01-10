import React, { useState, useRef } from 'react';
import { SidePanelNavItemProps, TaskListType } from '../../types/types.ts';
import './SidePanelNavItem.css';
import { ReactComponent as EditIcon } from '../../resources/edit.svg';
import { ReactComponent as DeleteIcon } from '../../resources/delete.svg';

const SidePanelNavItem: React.FC<SidePanelNavItemProps> = ({ id, name, taskLists, setTaskLists }) => {
  const [newTitle, setNewTitle] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (e:any) => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0); // Focus the input after rendering
  };

  const handleDeleteClick = (e : any) => {    
    const id = e.target.id;
    const newTaskLists = taskLists.filter((taskList) => taskList.id != id);
    setTaskLists(newTaskLists);
  };

  const handleSubmit = (e : any) => {
    setIsEditing(false);
    const id = e.target.id
    const value = e.target.value
    const newTaskLists : TaskListType[] = taskLists.map((taskList : TaskListType) => {
      if(taskList.id === id) {
        taskList.name = value;
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
            <DeleteIcon className="icon" onClick={() => setIsEditing(false)} />
          </div>
          </>
      ) : (
        <>
          <div className="task-list-item-name">{name}</div>
          <div className="task-list-item-icons">
            <EditIcon id={id}className="icon" onClick={handleEditClick} />
            <DeleteIcon id={id}className="icon" onClick={handleDeleteClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default SidePanelNavItem;
