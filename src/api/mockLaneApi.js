import delay from './delay';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const lanes = [
  {
    id: 'ToDo',
    laneName: 'ToDo'
  },
  {
    id: 'QA',
    laneName: 'QA'
  },
  {
    id: 'Complete',
    laneName: 'Complete'
  }
];

class LaneApi {
  static getAllLane() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], lanes));
      }, delay);
    });
  }
}

export default LaneApi;
