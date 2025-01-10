import React from 'react';
import './AddButton.css';
import { ReactComponent as PlusIcon } from '../../resources/plus.svg';

const AddButton = ({ content, onClick }) => {
    return (
        <button className="add-button" onClick={onClick}>
            <PlusIcon className="icon"/>
            <span className="text">{content}</span>
        </button>
    );
};


export default AddButton;