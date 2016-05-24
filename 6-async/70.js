function nextDataCallback(data) {
  // ...
}
function failureCallback(err) {
  // ...
}
function doneCallback() {
  // ...
}

doSomeAsyncStuff(nextDataCallback, failureCallback, doneCallback);
