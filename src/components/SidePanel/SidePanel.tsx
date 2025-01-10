import React, { useState } from 'react';
import './SidePanel.css';
import { SidePanelProps, TaskListType } from '../../types/types.ts';
import TaskListItem from '../TaskListItem/TaskListItem.tsx';
import { ReactComponent as PlusIcon } from '../../resources/plus.svg';

const SidePanel: React.FC<SidePanelProps> = ({ taskLists, onSelectTaskList }) => {
  const [selectedTaskList, setSelectedTaskList] = useState<TaskListType | null>(taskLists[0]);

  // Handler for selecting a task list
  const handleSelect = (taskList: TaskListType) => {
    setSelectedTaskList(taskList);  // Toggle selection
    onSelectTaskList(taskList);
  };

  const handleAddTaskList = () => {

  }
  
  return (
    <div className="side-panel">
      <div className="logo">
        <h1>Tasks</h1>
      </div>
      <div className="task-lists">
        <h3>Task Lists</h3>
        <ul className="task-lists-ul">
          {taskLists.map((taskList) => (
            <li key={taskList.name} className={`task-lists-li ${selectedTaskList === taskList ? 'selected' : ''}`} onClick={() => handleSelect(taskList)}>
              <TaskListItem {...taskList} />
            </li>
          ))}
          <li key='addTaskList' className='task-lists-li' onClick={handleAddTaskList}>
            <PlusIcon className="icon"/>
          </li>
        </ul>
      </div>
      <div className="settings">
        <button>Settings</button>
      </div>
    </div>
  );
};

export default SidePanel;
