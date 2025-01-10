import React, { useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel.tsx';
import TaskListCard from './components/TaskList/TaskListCard.tsx';
import './App.css';
import { dummyTaskLists } from './data/initialData.ts';
import { TaskListType } from './types/types.ts';

const App: React.FC = () => {

  const [taskLists, setTaskLists] = useState(dummyTaskLists);

  const [selectedTaskList, setSelectedTaskList] = useState(taskLists[0]);

  return (
    <div className="container">
      <div className="left-section">
        <SidePanel taskLists={taskLists} onSelectTaskList={setSelectedTaskList} />
      </div>
      <div className="right-section">
        <TaskListCard {...selectedTaskList} />
      </div>
    </div>
  );
};

export default App;
