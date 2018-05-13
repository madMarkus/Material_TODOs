export const todoAdd = todoObject => ({ type: 'TODO_ADD', todoObject });

export const todoDelete = id => ({ type: 'TODO_DELETE', id });

export const todoCheck = id => ({ type: 'TODO_CHECK', id });
