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
