import Cycle from '@cycle/xstream-run';
import xs from 'xstream';
import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';

function main(sources) {
  return {
    DOM: sources.DOM.select('.myinput').events('input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        div([
          label('Name:'),
          input('.myinput', {attrs: {type: 'text'}}),
          hr(),
          h1(`Hello ${name}`)
        ])
      )
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});

// http://www.webpackbin.com/Vyt3FP8MZ
