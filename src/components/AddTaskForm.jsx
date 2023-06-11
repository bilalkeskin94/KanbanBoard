// AddTaskForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../store/kanbanSlice';
import Plus from '../images/plus1.svg';
import '../styles/AddTaskForm.scss';

const AddTaskForm = () => {
	const dispatch = useDispatch();
	const [isAdding, setIsAdding] = useState(false);
	const [newContent, setNewContent] = useState('');
	const [priority, setPriority] = useState('1');
	const [type, setType] = useState('TSK');
	const [columnId, setColumnId] = useState('column-1');

	const handleAdd = () => {
		setIsAdding(true);
	};

	const handleClose = () => {
		setIsAdding(false);
	};

	const handleSave = () => {
		if (newContent.trim().length >= 3) {
			dispatch(createTask({ columnId, content: newContent, priority, type }));
			setNewContent('');
			setIsAdding(false);
		} else {
			alert('Task content must be at least 3 characters long.');
		}
	};

	return isAdding ? (
		<>
			<button className="add-task-button" onClick={handleAdd}>
				<img src={Plus} alt="plus icon" />
			</button>
			<div className="add-task-form">
				<h2>Add Task</h2>
				<input
					type="text"
					value={newContent}
					onChange={(e) => setNewContent(e.target.value)}
					autoFocus
					placeholder="Task content"
				/>
				<select value={priority} onChange={(e) => setPriority(e.target.value)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<select value={type} onChange={(e) => setType(e.target.value)}>
					<option value="TSK">TSK</option>
					<option value="EPC">EPC</option>
				</select>
				<select value={columnId} onChange={(e) => setColumnId(e.target.value)}>
					<option value="column-1">Todo</option>
					<option value="column-2">Done</option>
				</select>
				<div class="action-buttons">
					<button onClick={handleClose}>Cancel</button>
					<button onClick={handleSave}>Save</button>
				</div>
			</div>
		</>
	) : (
		<button className="add-task-button" onClick={handleAdd}>
			<img src={Plus} alt="plus icon" />
		</button>
	);
};

export default AddTaskForm;
