function next(clickEvent) {
  console.log(clickEvent.clientX);
}
function error(err) {
  // ...
}
function complete() {
  // ...
}

function subscribeToClickObservable(next, error, complete) {
  try {
    document.addEventListener('click', next);
  } catch (err) {
    error(err);
  }
}
