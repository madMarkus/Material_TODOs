const tasksList = (
  state = {
    exampleTask1: {
      name: 'Tomatoes',
      todoId: 'exampleTODO1',
      done: false,
      redacting: false
    },
    exampleTask2: {
      name: 'Cucumbers',
      todoId: 'exampleTODO1',
      done: false,
      redacting: false
    },
    exampleTask3: {
      name: 'Bread',
      todoId: 'exampleTODO1',
      done: true,
      redacting: false
    },

    exampleTask4: {
      name: 'Clean the room',
      todoId: 'exampleTODO2',
      done: false,
      redacting: false
    },
    exampleTask5: {
      name: 'Wash the dishes',
      todoId: 'exampleTODO2',
      done: false,
      redacting: false
    },
    exampleTask6: {
      name: 'Go to store',
      todoId: 'exampleTODO2',
      done: true,
      redacting: false
    },

    exampleTask7: {
      name: 'Mathematics',
      todoId: 'exampleTODO3',
      done: false,
      redacting: false
    },
    exampleTask8: {
      name: 'Statistics',
      todoId: 'exampleTODO3',
      done: false,
      redacting: false
    },
    exampleTask9: {
      name: 'Computer Science',
      todoId: 'exampleTODO3',
      done: true,
      redacting: false
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

    case 'TASKS_DELETE_BY_TODO': {
      const newState = Object.keys(state).reduce((newStateObject, key) => {
        if (state[key].todoId !== action.todoId) {
          newStateObject[key] = state[key];
        }
        return newStateObject;
      }, {});

      return { ...newState };
    }

    default:
      return state;
  }
};

export default tasksList;
