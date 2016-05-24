function clickCallback(clickEvent) {
  console.log(clickEvent.clientX);
}

document.addEventListener('click', clickCallback);
