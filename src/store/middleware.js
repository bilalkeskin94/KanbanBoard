export const idGenerationMiddleware =
	({ getState }) =>
	(next) =>
	(action) => {
		// Check if this is the createTask action
		if (action.type === 'kanban/createTask/prepare') {
			const state = getState();
			const { type } = action.payload;

			// Count the current number of tasks of the specified type
			const currentCount = Object.values(state.kanban.tasks).filter((task) =>
				task.id.startsWith(type)
			).length;

			// Create a new unique ID
			const newId = `${type}-${String(currentCount + 1).padStart(2, '0')}`;

			// Override the action payload with the new ID
			action.payload.id = newId;
		}

		return next(action);
	};
