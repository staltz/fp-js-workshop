
function add(x) {
  return function addX(y) {
    return x + y;
  };
}
