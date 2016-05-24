import {Observable} from 'rxjs';

const clicksObservable = Observable.fromEvent(document, 'click');
const xPositions = clicksObservable.map(click => click.clientX);
const largeX = xPositions.filter(x => x > 200);

largeX.subscribe(x => console.log(x));
