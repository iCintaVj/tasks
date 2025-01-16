import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext.tsx';
import './TableView.css';
import Table from '../Table/Table.tsx';

const TableView: React.FC = () => {
    const { tasks, setSelectedTask, setIsModalOpen } = useAppContext();
    const tasksPerPage = 10;
    const totalPages = Math.ceil(tasks.length / tasksPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const [taskContainsFilter, setTaskContainsFilter] = useState<string>('')

    const handlePrevPageClick = () => {
        if (currentPage == 0) return;
        setCurrentPage(currentPage - 1);
    }

    const handleNextPageClick = () => {
        if (currentPage >= totalPages) return;
        setCurrentPage(currentPage + 1);
    }

    const onAddTask = () => {
        setSelectedTask(null);
        setIsModalOpen(true);
    }

    return <div className="table-container">
        <div className='table-header-container'><h1 className='table-heading'>Tasks</h1></div>
        <div className='table-options-container'>
            <div className='table-options-left'>
                <strong className='total-tasks-indicator'>Total tasks ({tasks.length})</strong>
            </div>
            <div className='table-options-right'>
                <input className='table-search-input' type='text' placeholder='Search by Task Name' onChange={(e)=>setTaskContainsFilter(e.target.value)} />
                <button className='table-filter-button'>Filter</button>
                <button className='table-add-task-button' onClick={onAddTask}>Add Task</button>
            </div>
        </div>

        <Table currentPage={currentPage} tasksPerPage={tasksPerPage} taskContainsFilter={taskContainsFilter}/>

        <div className='table-options-container'>
            <div className='table-options-left'>
                <em className='total-pages-indicator'>{`Page - ${currentPage + 1}/${totalPages}`}</em>
            </div>
            <div className='table-options-right'>
                <button className='prev-button' onClick={handlePrevPageClick} disabled={currentPage == 0}>Prev</button>
                <button className='next-button' onClick={handleNextPageClick} disabled={currentPage >= totalPages - 1}>Next</button>
            </div>
        </div>
    </div>;
};

export default TableView;