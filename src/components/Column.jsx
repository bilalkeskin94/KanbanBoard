import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import { createTask } from '../store/kanbanSlice';
import '../styles/Column.scss';

const Column = ({ column }) => {
	const { tasks } = useSelector((state) => state.kanban);
	const dispatch = useDispatch();
	const [isAdding, setIsAdding] = useState(false);
	const [newContent, setNewContent] = useState('');
	const [priority, setPriority] = useState('1');

	const handleAdd = () => {
		setIsAdding(true);
	};

	const handleSave = () => {
		if (newContent.trim().length >= 3) {
			dispatch(
				createTask({ columnId: column.id, content: newContent, priority })
			);
			setNewContent('');
			setIsAdding(false);
		} else {
			alert('Task content must be at least 3 characters long.');
		}
	};

	return (
		<div className="column">
			<h3 className="title">{column.title}</h3>
			<div className="add-task-container">
				{isAdding ? (
					<div className="add-task-form">
						<input
							type="text"
							value={newContent}
							onChange={(e) => setNewContent(e.target.value)}
							autoFocus
							placeholder="Task content"
						/>
						<select
							value={priority}
							onChange={(e) => setPriority(e.target.value)}
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						<button onClick={handleSave}>Save</button>
					</div>
				) : (
					<button className="add-task-button" onClick={handleAdd}>
						+ Add Task
					</button>
				)}
			</div>
			<Droppable droppableId={column.id}>
				{(provided) => (
					<div className="task-list">
						<div ref={provided.innerRef} {...provided.droppableProps}>
							{column.taskIds.map((taskId, index) => (
								<Task key={taskId} task={tasks[taskId]} index={index} />
							))}
							{provided.placeholder}
						</div>
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default Column;
