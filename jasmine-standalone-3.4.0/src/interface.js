

$(document).ready(function() {
  var thermostat = new Thermostat();
  // $('#temperature').text('temperature');
  updateTemperature();
  $('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=cb5a7e6c4c7412c2bff4c2a0153c9475&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})


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
