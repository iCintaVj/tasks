import React, { useState, useRef } from 'react';
import { TaskListItemProps, TaskListType } from '../../types/types.ts';
import './TaskListItem.css';
import { ReactComponent as EditIcon } from '../../resources/edit.svg';
import { ReactComponent as DeleteIcon } from '../../resources/delete.svg';

const TaskListItem: React.FC<TaskListType> = ({ id, name }) => {
  const [newTitle, setNewTitle] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0); // Focus the input after rendering
  };

  const handleSubmit = (e) => {
    setIsEditing(false);
    console.log(newTitle);
  };

  return (
    <div className='task-list-item-content'> 
      {isEditing ? (
        <>
        <input
          className="edit-input"
          type="text"
          ref={inputRef}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleSubmit}
          onKeyPress={(e) => {
            console.log(e)
            if (e.key === 'Enter') handleSubmit(e);
          }}/>
          <div className="task-list-item-icons">
            <DeleteIcon className="icon" onClick={() => console.log(`Delete ${id}`)} />
          </div>
          </>
      ) : (
        <>
          <div className="task-list-item-name">{name}</div>
          <div className="task-list-item-icons">
            <EditIcon className="icon" onClick={handleEditClick} />
            <DeleteIcon className="icon" onClick={() => console.log(`Delete ${id}`)} />
          </div>
        </>
      )}
    </div>
  );
};

export default TaskListItem;
