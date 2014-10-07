function calculateHertz (frequencies, options) {
  var rate = 22050 / 1024; // defaults in audioContext.

  if (options) {
    if (options.rate) {
      rate = options.rate;
    }
  }

  var maxI, max = frequencies[0];
  
  for (var i=0; frequencies.length > i; i++) {
    var oldmax = parseFloat(max);
    var newmax = Math.max(max, frequencies[i]);
    if (oldmax != newmax) {
      max = newmax;
      maxI = i;
    } 
  }
  return maxI * rate;
}

module.exports = calculateHertz;