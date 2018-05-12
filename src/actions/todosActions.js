export const todoSet = (todoId, todoObject) => ({
  type: 'TODO_SET',
  todoId,
  todoObject
});

export const todoDelete = todoId => ({ type: 'TODO_DELETE', todoId });
