import {Observable} from 'rxjs';

const observable = Observable.interval(1000)
  .filter(x => x % 2 === 0)
  .take(10)
  .map(x => x * 100);

const observer = {
  next: (x) => console.log('Observer got: ' + x),
  error: (e) => console.error(e),
  complete: () => console.log('done'),
};

console.log('Before subscribe');
observable.subscribe(observer);
console.log('After subscribe');

////////////////////////////////////////////////////////////////////////////////

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
