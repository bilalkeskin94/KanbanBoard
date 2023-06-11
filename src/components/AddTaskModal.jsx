// AddTaskModal.jsx
import React, { useState } from 'react';

const AddTaskModal = ({ onClose, onAddTask }) => {
	const [content, setContent] = useState('');
	const [priority, setPriority] = useState('1');
	const [taskType, setTaskType] = useState('TSK');
	const [column, setColumn] = useState('todo');

	const handleAddTask = () => {
		onAddTask(content, priority, taskType, column);
		setContent('');
		setPriority('1');
		setTaskType('TSK');
		setColumn('todo');
		onClose();
	};

	return (
		<div className="modal-overlay">
			<div className="add-task-modal">
				<h2>Add Task</h2>
				<div className="modal-content">
					<input
						type="text"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder="Task Content"
					/>
					<select
						value={priority}
						onChange={(e) => setPriority(e.target.value)}
					>
						<option value="1">Priority 1</option>
						<option value="2">Priority 2</option>
						<option value="3">Priority 3</option>
					</select>
					<select
						value={taskType}
						onChange={(e) => setTaskType(e.target.value)}
					>
						<option value="TSK">Task</option>
						<option value="EPC">Epic</option>
					</select>
					<select value={column} onChange={(e) => setColumn(e.target.value)}>
						<option value="todo">Todo</option>
						<option value="done">Done</option>
					</select>
					<div className="modal-buttons">
						<button onClick={handleAddTask}>Add</button>
						<button onClick={onClose}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTaskModal;
