export const taskSet = (taskId, taskObject) => ({
  type: 'TASK_SET',
  taskId,
  taskObject
});

export const taskDelete = taskId => ({ type: 'TASK_DELETE', taskId });

export const tasksDeleteByTodo = todoId => ({
  type: 'TASKS_DELETE_BY_TODO',
  todoId
});
