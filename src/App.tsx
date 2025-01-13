import React, { useEffect, useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel.tsx';
import TaskListCard from './components/TaskListCard/TaskListCard.tsx';
import './App.css';
import { useAppContext } from './contexts/AppContext.tsx';

const App: React.FC = () => {

  const { taskLists} = useAppContext();

  return (
    <div className="container">
      <div className="left-section">
        <SidePanel key="side-panel" />
      </div>
      {taskLists.length > 0 ?
        <div className="right-section">
          <TaskListCard key="task-list-card" />
        </div> :
        <span className='empty-task-list'> No Task Lists Found</span>}
    </div>
  );
};

export default App;
