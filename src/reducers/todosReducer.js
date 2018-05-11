const todosList = (
  state = {
    exampleTODO1: {
      header: 'Groceries',
      subheader: 'For tommorow'
    },
    exampleTODO2: {
      header: 'House stuff',
      subheader: 'Untill 16:00'
    },
    exampleTODO3: {
      header: 'Hometasks',
      subheader: ''
    }
  },
  action
) => {
  switch (action.type) {
    case 'TODO_SET': {
      return { ...state, [action.todoId]: action.todoObject };
    }

    case 'TODO_DELETE': {
      const newState = { ...state };
      delete newState[action.todoId];
      return newState;
    }

    default:
      return state;
  }
};

export default todosList;
