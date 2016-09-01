function getGlobalProperties(prefix) {
  var keyValues = []; // window for browser environments
  for (var prop in window) {
    if (prop.indexOf(prefix) == 0) // check the prefix
      keyValues.push(prop + "=" + window[prop]);
  }
  return keyValues.join('&'); // build the string
}
// document.write(getGlobalProperties('t');
