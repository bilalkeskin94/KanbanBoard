import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../store/kanbanSlice';
import '../styles/Task.scss';
import Chart1 from '../images/chart1.svg';
import Chart2 from '../images/chart2.svg';
import Chart3 from '../images/chart3.svg';
import TSK from '../images/tsk.svg';
import EPC from '../images/epc.svg';
import Number from '../images/number.svg';
import User from '../images/ellipse-1154@2x.png';

const Task = ({ task, index, columnId }) => {
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

	const handleDelete = () => {
		dispatch(deleteTask({ taskId: task.id, columnId })); // Include columnId here
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
					<div
						style={{
							display: 'flex',
						}}
					>
						<button className="edit-button" onClick={handleDelete}>
							Delete
						</button>
						<button className="edit-button" onClick={handleEdit}>
							Edit
						</button>
					</div>
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
						<span className="id">
							{id.includes('TSK') ? (
								<span className="task-type">
									<img src={TSK} alt="task logo" />
									<span class="info-text">{id}</span>
								</span>
							) : (
								<span className="task-type">
									<img src={EPC} alt="epic logo" />
									<span class="info-text">{id}</span>
								</span>
							)}
						</span>
						<span className="priority">
							{priority === '1' ? (
								<img src={Chart1} alt="chart1" />
							) : priority === '2' ? (
								<img src={Chart2} alt="chart2" />
							) : (
								<img src={Chart3} alt="chart3" />
							)}
							<img src={Number} alt="number" />
							<img
								style={{
									height: '24px',
								}}
								src={User}
								alt="User"
							/>
						</span>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default Task;
