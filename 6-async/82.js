import {Observable} from 'rxjs';

const observable = // Make this Observable to emit 10 even numbers, each
                   // multiplied by 100, and they should be emitted every
                   // 2 seconds. Read http://reactivex.io/rxjs/ to see
                   // documentation on Observable operators.

const observer = {
  next: (x) => console.log('Observer got: ' + x),
  error: (e) => console.error(e),
  complete: () => console.log('done'),
};

console.log('Before subscribe');
observable.subscribe(observer);
console.log('After subscribe');
