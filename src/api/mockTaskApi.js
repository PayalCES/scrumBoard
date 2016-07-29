import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tasks = [
  {
    id: 'ToDo1-ToDo',
    taskName: 'ToDo1',
    laneId: 'ToDo'
  },
  {
    id: 'ToDo2-QA',
    taskName: 'ToDo2',
    laneId: 'QA'
  },
  {
    id: 'ToDo3-Complete',
    taskName: 'ToDo3',
    laneId: 'Complete'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (task) => {
  return task.firstName.toLowerCase() + '-' + task.lastName.toLowerCase();
};

class TaskApi {
  static getAllTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks));
      }, delay);
    });
  }

  static saveTask(task) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTaskNameLength = 3;
        if (task.taskName.length < minTaskNameLength) {
          reject(`First Name must be at least ${minTaskNameLength} characters.`);
        }

        if (task.laneName.length < minTaskNameLength) {
          reject(`Last Name must be at least ${minTaskNameLength} characters.`);
        }

        if (task.id) {
          const existingTaskIndex = tasks.findIndex(a => a.id == task.id);
          tasks.splice(existingTaskIndex, 1, task);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new tasks in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          task.id = generateId(task);
          tasks.push(task);
        }

        resolve(Object.assign({}, task));
      }, delay);
    });
  }

  static deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTaskToDelete = tasks.findIndex(task => {
          task.taskId == taskId;
        });
        tasks.splice(indexOfTaskToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TaskApi;
