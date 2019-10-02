

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text('tempghfgerature');
  console.log('hiii')
})

$('#temp-up').on('click', function() { // event listener
  thermostat.up(); // update model
  // $('#temperature').text(thermostat.checkTemp); // update view
})

$('#temp-down').on('click', function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.down();
  // $('#temperature').text(thermostat.temperature);
})

$('#powersaving-on').on('click' ,function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.powerSavingModeOn();
  $('#power-saving-status').text('on');
})

$('#powersaving-on').on('click', function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.powerSavingModeOff();
  $('#power-saving-status').text('off');
})

$('#current-temp').on('click', function() { // event listener
  thermostat.checkTemp(); // update model
  $('#check-Temp').text(` ${this.temp.toString()} `)
})
