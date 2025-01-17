import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../contexts/AppContext.tsx';
import './TableView.css';
import Table from '../Table/Table.tsx';
import { getTaskListNameFromId } from '../../utils/helper.ts';
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown.tsx';

const TableView: React.FC = () => {
    const { tasks, setSelectedTask, setIsModalOpen, taskLists } = useAppContext();
    const tasksPerPage = 10;
    const totalPages = Math.ceil(tasks.length / tasksPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);

    const priorities = ['High', 'Medium', 'Low'];
    const status = ['Todo', 'In Progress','Done'];

    const [priorityFilter, setPriorityFilter] = useState<any>(priorities);

    const [statusFilter, setStatusFilter] = useState<any>(status);

    const [catagoryFilter, setCatagoryFilter] = useState<any>(taskLists?.map(taskList => taskList.name));

    const [taskContainsFilter, setTaskContainsFilter] = useState<string>('')

    const resetFilters = () => {
        setTaskContainsFilter('')
        setCatagoryFilter(taskLists.map(taskList => taskList.name))
        setStatusFilter(status)
        setPriorityFilter(priorities)
    }

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

    useEffect(()=>{
        setCatagoryFilter(taskLists.map(taskList => taskList.name));
    }, [taskLists])

    return <div className="table-container">
        <div className='table-header-container'><h1 className='table-heading'>Tasks</h1></div>
        <div className='table-options-container'>
            <div className='table-options-left'>
                <strong className='total-tasks-indicator'>Total tasks ({tasks.length})</strong>
            </div>
            <div className='table-options-right'>
                {
                    isFiltersOpen && 
                    <>
                    <input className={`table-search-input ${!isFiltersOpen ? 'hide' : ''}`} type='text' placeholder='Search by Task Name' onChange={(e)=>setTaskContainsFilter(e.target.value)} value={taskContainsFilter}/>
                    <MultiSelectDropdown 
                        options={status} 
                        selected={statusFilter} 
                        onChange={setStatusFilter} 
                        name='Status'
                    />
                    <MultiSelectDropdown 
                        options={priorities} 
                        selected={priorityFilter} 
                        onChange={setPriorityFilter} 
                        name='Priority'
                        
                    />
                    <MultiSelectDropdown 
                        options={taskLists.map(taskList => taskList.name)} 
                        selected={catagoryFilter}
                        onChange={setCatagoryFilter} 
                        name='Catagory'
                    />
                    <button className='table-filter-button clear-filter' onClick={resetFilters}>Clear Filters</button>
                </>
                }
                <button className={`table-filter-button ${isFiltersOpen ? 'clear-filter':''}`} onClick={()=> setIsFiltersOpen(!isFiltersOpen)}>{isFiltersOpen ? 'Hide Filters' : "Show Filters"}</button>
                <button className='table-add-task-button' onClick={onAddTask}>Add Task</button>
            </div>
        </div>

        <Table currentPage={currentPage} tasksPerPage={tasksPerPage} taskContainsFilter={taskContainsFilter} statusFilter={statusFilter} priorityFilter={priorityFilter} catagoryFilter={catagoryFilter}/>

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