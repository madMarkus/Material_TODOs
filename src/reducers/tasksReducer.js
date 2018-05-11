const tasksList = (
  state = {
    exampleTask1: {
      name: 'Tomatoes',
      todoId: 'exampleTODO1',
      done: false,
      important: false
    },
    exampleTask2: {
      name: 'Cucumbers',
      todoId: 'exampleTODO1',
      done: false,
      important: false
    },
    exampleTask3: {
      name: 'Bread',
      todoId: 'exampleTODO1',
      done: true,
      important: false
    },

    exampleTask4: {
      name: 'Clean the room',
      todoId: 'exampleTODO2',
      done: false,
      important: true
    },
    exampleTask5: {
      name: 'Wash the dishes',
      todoId: 'exampleTODO2',
      done: false,
      important: true
    },
    exampleTask6: {
      name: 'Go to store',
      todoId: 'exampleTODO2',
      done: true,
      important: true
    },

    exampleTask7: {
      name: 'Mathematics',
      todoId: 'exampleTODO3',
      done: false,
      important: true
    },
    exampleTask8: {
      name: 'Statistics',
      todoId: 'exampleTODO3',
      done: false,
      important: false
    },
    exampleTask9: {
      name: 'Computer Science',
      todoId: 'exampleTODO3',
      done: true,
      important: false
    }
  },
  action
) => {
  switch (action.type) {
    case 'TASK_SET': {
      return { ...state, [action.taskId]: action.taskObject };
    }

    case 'TASK_DELETE': {
      const newState = { ...state };
      delete newState[action.taskId];
      return newState;
    }

    default:
      return state;
  }
};

export default tasksList;
