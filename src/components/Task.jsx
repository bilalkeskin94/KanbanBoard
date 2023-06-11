import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { editTask } from '../store/kanbanSlice';
import '../styles/Task.scss';
import Chart1 from '../images/chart1.svg';
import Chart2 from '../images/chart2.svg';
import Chart3 from '../images/chart3.svg';

const Task = ({ task, index }) => {
	const { id, content, priority } = task;
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState(content);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		if (editedContent.trim().length > 0) {
			dispatch(
				editTask({
					taskId: id,
					newContent: editedContent,
					newPriority: priority,
				})
			);
		}
		setIsEditing(false);
	};

	return (
		<Draggable draggableId={id} index={index}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={`task ${snapshot.isDragging ? 'is-dragging' : ''}`}
				>
					<div className="content">
						{isEditing ? (
							<input
								type="text"
								value={editedContent}
								onChange={(e) => setEditedContent(e.target.value)}
								onBlur={handleSave}
								autoFocus
							/>
						) : (
							<span>{content}</span>
						)}
					</div>
					<div className="info">
						<span className="id">ID: {id}</span>
						<span className="priority">
							{priority === '1' ? (
								<img src={Chart1} alt="chart1" />
							) : priority === '2' ? (
								<img src={Chart2} alt="chart2" />
							) : (
								<img src={Chart3} alt="chart3" />
							)}
						</span>
					</div>
					<button className="edit-button" onClick={handleEdit}>
						Edit
					</button>
				</div>
			)}
		</Draggable>
	);
};

export default Task;
