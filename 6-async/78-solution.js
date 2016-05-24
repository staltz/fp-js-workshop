/*
 * SOLUTION to exercise 78.js in this file.
 *
 * Please try to actually solve it before looking
 * at the solution.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Ready?
 *
 */
function createObservable(subscribe) {
  return {
    subscribe: subscribe,
  }
}

function myObservableMap(operation) {
  return function myObservableMapGivenOperation(sourceObservable) {
    return createObservable(function (next, error, complete) {
      sourceObservable.subscribe(function (data) {
        next(operation(data))
      }, error, complete);
    });
  }
}

function myObservableFilter(condition) {
  return function myObservableFilterGivenCondition(sourceObservable) {
    return createObservable(function (next, error, complete) {
      sourceObservable.subscribe(function (data) {
        if (condition(data)) {
          next(data);
        }
      }, error, complete);
    });
  }
}

const clicksObservable = createObservable(function (next, error, complete) {
  try {
    document.addEventListener('click', next);
  } catch (err) {
    error(err);
  }
});

const xPositions = myObservableMap(event => event.clientX)(clicksObservable);
const largeX = myObservableFilter(x => x > 200)(xPositions);

largeX.subscribe(
  function next(x) {
    console.log(x);
  },
  function error(err) {
    // ...
  },
  function complete() {
    // ...
  }
);
