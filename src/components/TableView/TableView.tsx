import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext.tsx';
import { getTaskListNameFromId } from '../../utils/helper.ts';
import './TableView.css';
import Table from '../Table/Table.tsx';

const TableView: React.FC = () => {
    const {tasks, taskLists} = useAppContext();
    const tasksPerPage = 10;
    const totalPages = Math.ceil(tasks.length / tasksPerPage) + 1;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevPageClick = () => {
        setCurrentPage(currentPage-1);
    }

    const handleNextPageClick = ()=> {
        setCurrentPage(currentPage+1);
    }

    return <div className="table-container">
        <div className='table-options-container'> 
            <div className='table-options-left'>
                <strong className='total-tasks-indicator'>Total tasks ({tasks.length})</strong>
            </div>
            <div className='table-options-right'>
                <div className='table-search-box'>
                    <input className='table-search-input' type='text' placeholder='Search by Task Name'/>
                    <button className='table-search-button'>Search</button>
                </div>
                <button className='table-filter-button'>Filter</button>
            </div>
        </div>

        <Table currentPage={currentPage} tasksPerPage={tasksPerPage} />
        
        <div className='table-options-left'>
            <em className='total-pages-indicator'>{`Page - ${currentPage+1}/${totalPages}`}</em>
        </div>
        <div className='table-options-right'>
            <button className='prev-button' onClick={handlePrevPageClick}>Prev</button>
            <button className='next-button' onClick={handleNextPageClick}>Next</button>
        </div>
    </div>;
};

export default TableView;