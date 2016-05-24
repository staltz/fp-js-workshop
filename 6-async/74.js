function createObservable(subscribe) {
  return {
    subscribe: subscribe
  }
}

const clicksObservable = createObservable(function (next, error, complete) {
  try {
    document.addEventListener('click', next);
  } catch (err) {
    error(err);
  }
});

clicksObservable.subscribe(
  function next(clickEvent) {
    if (clickEvent.clientX > 200) {
      console.log(clickEvent.clientX);
    }
  },
  function error(err) {
    // ...
  },
  function complete() {
    // ...
  }
);
