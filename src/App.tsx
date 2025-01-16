import React from 'react';
import './App.css';
import { useAppContext } from './contexts/AppContext.tsx';
import KanbanBoard from './components/KanbanBoard/KanbanBoard.jsx';
import TableView from './components/TableView/TableView.tsx';
import SidePanel from './components/SidePanel/SidePanel.tsx';
import TaskListHeader from './components/TaskListHeader/TaskListHeader.tsx';
import TaskModal from './components/TaskModal/TaskModal.tsx';

const App: React.FC = () => {
  const { isTableView, selectedTaskList, isModalOpen } = useAppContext();
  return (
    <div className="container">
      <div className="left-section">
        <SidePanel key="side-panel" />
      </div>
      <div className="right-section">
        <TaskListHeader key={selectedTaskList.id}/>
        <div className="task-list-container" id={selectedTaskList.id}>
          { isTableView ? <TableView /> : <KanbanBoard /> }
        </div>
      </div>
      {isModalOpen && <TaskModal/>}
    </div>
  );
};

export default App;
