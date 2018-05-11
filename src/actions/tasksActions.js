export const taskSet = (taskId, taskObject) => ({
  type: "TASK_SET",
  taskId,
  taskObject
});

export const taskDelere = taskId => ({ type: "TASK_DELETE", taskId });
