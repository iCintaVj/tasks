import React, { useState } from 'react';
import './SidePanel.css';
import { SidePanelProps, TaskListType } from '../../types/types.ts';
import SidePanelNavItem from '../SidePanelNavItem/SidePanelNavItem.tsx';
import AddButton from '../AddButton/AddButton.jsx';
import Logo from '../Logo/Logo.tsx';
import { convertToDashSeparatedId } from '../../utils/helper.ts';

const SidePanel: React.FC<SidePanelProps> = ({ taskLists, setTaskLists, selectedTaskList, onSelectTaskList }) => {

  // Handler for selecting a task list
  const handleSelect = (taskList: TaskListType) => {
    onSelectTaskList(taskList);
  };

  const handleAddTaskList = () => {
    if(taskLists.length >= 15){
      window.alert('You can only have 15 task lists');
      return;
    }
    const newTaskList : TaskListType = {
      name : "New Task List "+(taskLists.length+1),
      id : convertToDashSeparatedId("New Task List "+(taskLists.length+1)),
    }
    taskLists.push(newTaskList);
    setTaskLists([...taskLists])
    onSelectTaskList(newTaskList);
  }
  
  return (
    <div className="side-panel">
      <Logo title={'Tasks'}/>
      <div className="task-lists">
        <h3>Task Lists</h3>
        <ul className="task-lists-ul">
          {taskLists.length >0 ?  taskLists.map((taskList) => (
            <li key={taskList.name} className={`task-lists-li ${selectedTaskList === taskList ? 'selected' : ''}`} onClick={() => handleSelect(taskList)}>
              <SidePanelNavItem {...taskList} taskLists={taskLists} setTaskLists={setTaskLists}/>
            </li>
          )) : (
            <li key='empty-task-list' className='task-lists-li'>
              <span>No Task Lists Found</span>
            </li>
          )}
        </ul>
      </div>
      <AddButton content={'Create new Task List'} onClick={handleAddTaskList}/>
    </div>
  );
};

export default SidePanel;
