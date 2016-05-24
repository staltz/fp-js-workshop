import {Observable} from 'rxjs';

const observable = Observable.from([1, 4, 9, 16, 25]);

const observer = {
  next: (x) => console.log('Observer got: ' + x),
  error: (e) => console.error(e),
  complete: () => console.log('done'),
};

console.log('Before subscribe');
observable.subscribe(observer);
console.log('After subscribe');
