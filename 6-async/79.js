import {Observable} from 'rxjs';

const observable = Observable.create(function subscribe(observer) {
  observer.next(10);
  observer.next(20);
  observer.next(30);
  setTimeout(function () {
    observer.next(60)
  }, 1000);
});

const observer = {
  next: (x) => console.log('Observer got: ' + x),
  error: (e) => console.error(e),
  complete: () => console.log('done'),
};

console.log('Before subscribe');
observable.subscribe(observer);
console.log('After subscribe');
