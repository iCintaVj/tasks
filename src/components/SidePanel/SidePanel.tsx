import React from 'react';
import './SidePanel.css';
import { SidePanelProps } from '../../types/types.ts';

const SidePanel: React.FC<SidePanelProps> = ({ taskLists, onSelectTaskList }) => {
  return (
    <div className="side-panel">
      <div className="logo">
        <h1>Tasks</h1>
      </div>
      <div className="task-lists">
        <h3>Task Lists</h3>
        <ul className="task-lists-ul">
          {taskLists.map((taskList) => (
            <li key={taskList.name} className="task-lists-li" onClick={() => onSelectTaskList(taskList)}>
              <button>
                {taskList.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="settings">
        <button>Settings</button>
      </div>
    </div>
  );
};

export default SidePanel;
