import React, { useEffect, useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel.tsx';
import TaskListCard from './components/TaskListCard/TaskListCard.tsx';
import './App.css';
import { TaskListType, TaskType } from './types/types.ts';
import { getTaskLists, getTasks } from './data/dbData.ts';
import { dummyTaskLists, dummyTasks } from './data/initialData.ts';

const App: React.FC = () => {

  useEffect(() => {
          const fetchTaskLists = async () => {
              try {
                  const response: TaskListType[] = await getTaskLists();
                  setTaskLists(response);
              } catch (error) {
                  console.error('Error fetching columns:', error);
                  setTaskLists(dummyTaskLists);
              }
          };

          const fetchTasks = async () => {
              try {
                  const response: TaskType[] = await getTasks();
                  setTasks(response);
              } catch (error) {
                  console.error('Error fetching columns:', error);
                  setTasks(dummyTasks);
              }
          };
  
          fetchTaskLists();
          fetchTasks();
      }, []);

  const [taskLists, setTaskLists] = useState<TaskListType[]>([]);

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [selectedTaskList, setSelectedTaskList] = useState<TaskListType>({id: '', name: ''});

   useEffect(() => {
    if (taskLists.length === 0) {
      setSelectedTaskList({id: '', name: ''}); // No task lists left
    } else if (!taskLists.find((taskList) => taskList.id === selectedTaskList?.id)) {
      setSelectedTaskList(taskLists[0]); // Set to first task list if current selection is removed
    }
  }, [taskLists, selectedTaskList]);  
  

  return (
    <div className="container">
      <div className="left-section">
        <SidePanel key="side-panel" taskLists={taskLists} setTaskLists={setTaskLists} selectedTaskList={selectedTaskList} onSelectTaskList={setSelectedTaskList} />
      </div>
      { taskLists.length >0 ? 
        <div className="right-section">
          <TaskListCard key="task-list-card" taskLists={taskLists} id={selectedTaskList.id} name={selectedTaskList.name} tasks={tasks} setTasks={setTasks}/>
        </div> : 
        <span className='empty-task-list'> No Task Lists Found</span>}
    </div>
  );
};

export default App;
