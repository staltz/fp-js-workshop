function successCallback(response) {
  console.log(response);
}
function failureCallback(error) {
  console.error(error);
}

fetch('http://my.test.server.com/api')
  .then(r => successCallback(r))
  .catch(e => failureCallback(e));
