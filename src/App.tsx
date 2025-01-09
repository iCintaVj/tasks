import React, { useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel.tsx';
import TaskList from './components/TaskList/TaskList.tsx';
import './App.css';
import { TaskListType } from './types/types.ts';

const tasks : TaskListType[] = [
  {
    name : 'Work',
    tasks : [
      { id: 1, name: 'Finish project', priority: 'High', dueDate: '2021-12-31', status: 'Todo' },
      { id: 2, name: 'Email client', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress' },
      { id: 3, name: 'Prepare report', priority: 'Low', dueDate: '2021-12-20', status: 'Completed' },
      { id: 13, name: 'Team meeting', priority: 'High', dueDate: '2021-12-15', status: 'Todo' },
      { id: 14, name: 'Code review', priority: 'Medium', dueDate: '2021-12-18', status: 'In Progress' },
    ],
  },
  {
    name: 'Financial',
    tasks: [
      { id: 4, name: 'Pay bills', priority: 'High', dueDate: '2021-12-31', status: 'Todo' },
      { id: 5, name: 'Review budget', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress' },
      { id: 6, name: 'Invest wisely', priority: 'Low', dueDate: '2021-12-20', status: 'Completed' },
      { id: 15, name: 'Tax planning', priority: 'High', dueDate: '2021-12-22', status: 'Todo' },
      { id: 16, name: 'Savings review', priority: 'Medium', dueDate: '2021-12-28', status: 'In Progress' },
    ],
  },
  {
    name: 'Self Development',
    tasks: [
      { id: 7, name: 'Read a book', priority: 'High', dueDate: '2021-12-31', status: 'Todo' },
      { id: 8, name: 'Learn a new skill', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress' },
      { id: 9, name: 'Practice meditation', priority: 'Low', dueDate: '2021-12-20', status: 'Completed' },
      { id: 17, name: 'Attend workshop', priority: 'High', dueDate: '2021-12-19', status: 'Todo' },
      { id: 18, name: 'Write a journal', priority: 'Medium', dueDate: '2021-12-21', status: 'In Progress' },
    ],
  },
  {
    name: 'Health',
    tasks: [
      { id: 10, name: 'Morning run', priority: 'High', dueDate: '2021-12-31', status: 'Todo' },
      { id: 11, name: 'Healthy meal prep', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress' },
      { id: 12, name: 'Yoga session', priority: 'Low', dueDate: '2021-12-20', status: 'Completed' },
      { id: 19, name: 'Doctor appointment', priority: 'High', dueDate: '2021-12-23', status: 'Todo' },
      { id: 20, name: 'Gym workout', priority: 'Medium', dueDate: '2021-12-26', status: 'In Progress' },
    ],
  }
];


const App: React.FC = () => {
  const [selectedTaskList, setSelectedTaskList] = useState(tasks[0]);

  return (
    <div className="container">
      <div className="left-section">
        <SidePanel taskLists={tasks} onSelectTaskList={setSelectedTaskList} />
      </div>
      <div className="right-section">
        <TaskList {...selectedTaskList} />
      </div>
    </div>
  );
};

export default App;
