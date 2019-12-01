

$(document).ready(function() {
  var thermostat = new Thermostat();
  // $('#temperature').text('temperature');
  updateTemperature();


$('#temperature-up').on('click', function() { // event listener
  thermostat.up(); // update model
  updateTemperature(); // update view
})

$('#temperature-down').on('click', function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.down();
   updateTemperature();
})

$('#powersaving-on').on('click' ,function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.powerSavingModeOn();
  $('#power-saving-status').text('on');
})

$('#powersaving-off').on('click', function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.powerSavingModeOff();
  $('#power-saving-status').text('off');
})

// $('#current-temp').on('click', function() { // event listener
//   thermostat.checkTemp(); // update model
//   $('#check-Temp').text(`${thermostat.temp}`);
// })

$('#temperature-reset').click(function() {
  thermostat.reset();
  updateTemperature();
});

function updateTemperature() {
  $('#temperature').text(thermostat.temp);
  $('#temperature').attr('class', thermostat.energyUsageStatus());
}
});
