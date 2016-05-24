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

const clicksObservable = createObservable(function (next, error, complete) {
  try {
    document.addEventListener('click', next);
  } catch (err) {
    error(err);
  }
});

const xPositions = myObservableMap(event => event.clientX)(clicksObservable);

xPositions.subscribe(
  function next(x) {
    if (x > 200) {
      console.log(x);
    }
  },
  function error(err) {
    // ...
  },
  function complete() {
    // ...
  }
);
