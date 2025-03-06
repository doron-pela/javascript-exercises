const convertToCelsius = function(farenheitValue) {
  celciusValue = Math.round((farenheitValue - 32) * (5/9)*10)/10; 
  return celciusValue;
};

const convertToFahrenheit = function(celciusValue) {
  farenheitValue = Math.round(((celciusValue * (9/5)) + 32)*10)/10;
  return farenheitValue;  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
