import React from 'react';
import './App.css';
import { useAppContext } from './contexts/AppContext.tsx';
import KanbanBoard from './components/KanbanBoard/KanbanBoard.jsx';
import TableView from './components/TableView/TableView.tsx';
import TaskModal from './components/TaskModal/TaskModal.tsx';

const App: React.FC = () => {
  const { isTableView, isModalOpen, setIsTableView } = useAppContext();
  return (
    <div className="container">
      { isTableView ? <TableView /> : <KanbanBoard /> }
      <button className='floating-button' onClick={()=>setIsTableView(!isTableView)}> {isTableView ? "Kanban View" : "Table View"} </button>
      {isModalOpen && <TaskModal/>}
    </div>
  );
};

export default App;
