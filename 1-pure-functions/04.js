function greet(name) {
  sendAnalyticsEvent('Person was greeted');
  return `Welcome ${name}!`;
}

console.log(greet('Richard'));
