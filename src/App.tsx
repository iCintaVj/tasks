import React, { useEffect, useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel.tsx';
import TaskListCard from './components/TaskListCard/TaskListCard.tsx';
import './App.css';
import { dummyTaskLists } from './data/initialData.ts';

const App: React.FC = () => {

  const [taskLists, setTaskLists] = useState(dummyTaskLists);

  const [selectedTaskList, setSelectedTaskList] = useState(taskLists[0]);

   useEffect(() => {
    if (taskLists.length === 0) {
      setSelectedTaskList(null); // No task lists left
    } else if (!taskLists.find((taskList) => taskList.id === selectedTaskList?.id)) {
      setSelectedTaskList(taskLists[0]); // Set to first task list if current selection is removed
    }
  }, [taskLists, selectedTaskList]);

  return (
    <div className="container">
      <div className="left-section">
        <SidePanel key="side-panel" taskLists={taskLists} setTaskLists={setTaskLists} onSelectTaskList={setSelectedTaskList} />
      </div>
      { taskLists.length >0 ? <div className="right-section">
        <TaskListCard key="task-list-card" taskLists={taskLists} {...selectedTaskList} />
      </div> : <span className='empty-task-list'> No Task Lists Found</span>}
    </div>
  );
};

export default App;
