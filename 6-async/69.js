function nextDataCallback(chunk) {
  console.log(chunk);
}
function failureCallback(err) {
  console.error(err);
}
function doneCallback() {
  console.log('We are done streaming');
}

const readable = getReadableStreamSomehow();
readable.on('data', nextDataCallback);
readable.on('error', failureCallback);
readable.on('end', doneCallback);
