import React, { useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel.tsx';
import TaskList from './components/TaskList/TaskList.tsx';
import './App.css';
import { initialData } from './data/initialData.ts';

const App: React.FC = () => {
  const [selectedTaskList, setSelectedTaskList] = useState(initialData[0]);

  return (
    <div className="container">
      <div className="left-section">
        <SidePanel taskLists={initialData} onSelectTaskList={setSelectedTaskList} />
      </div>
      <div className="right-section">
        <TaskList {...selectedTaskList} />
      </div>
    </div>
  );
};

export default App;
