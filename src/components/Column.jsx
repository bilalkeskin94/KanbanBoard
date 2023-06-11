// Column.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import '../styles/Column.scss';

const Column = ({ column }) => {
	const { tasks } = useSelector((state) => state.kanban);

	return (
		<div className="column">
			<h3 className="title">{column.title}</h3>
      <hr className='board-seperator' />
			<Droppable droppableId={column.id}>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						{column.taskIds.map((taskId, index) => (
							<div className="task-list" key={taskId}>
								<Task task={tasks[taskId]} index={index} />
							</div>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default Column;
