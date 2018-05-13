const tasksList = (
  state = [
    { id: 0, name: 'Buy bread', done: true },
    { id: 1, name: 'Buy eggs', done: false },
    { id: 2, name: 'Make dinner', done: false },
    { id: 3, name: 'Do work', done: false }
  ],
  action
) => {
  switch (action.type) {
    case 'TODO_ADD': {
      return [action.todoObject, ...state];
    }

    case 'TODO_DELETE': {
      return state.filter(value => value.id !== action.id);
    }

    case 'TODO_CHECK': {
      return state.map(
        value =>
          value.id === action.id ? { ...value, done: !value.done } : value
      );
    }

    default:
      return state;
  }
};

export default tasksList;
