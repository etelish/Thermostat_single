describe('thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('should exist',function (){
    expect(thermostat).toBeDefined()
  });

  it('thermostat starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20)
  });
  it('displays current temp', function(){
    thermostat.checkTemp()
    expect(thermostat.temp).toEqual(20)
  });
  it('.up increases temp', function(){
    thermostat.up()
    expect(thermostat.temp).toEqual(21)
  });
  it('.down decreases temp', function(){
    thermostat.down()
    expect(thermostat.temp).toEqual(19)
  })
 it('thermostat has a minimum temp of 10 degrees', function(){
   for(var i = 0; i < 11; i++){
     thermostat.down()};
   expect(thermostat.temp).toEqual(10)
   expect(thermostat.minTemp).toEqual(10)
 });

 describe('powerSavingMode on',function(){
   it('if power saving mode is on, maximum temp is 25 degrees', function(){
     thermostat.powerSavingModeOn()
     expect(thermostat.maxTemp).toEqual(25)
     });
     it("can't increase temp beyond 25 if powerSavingModeOn", function(){
       thermostat.powerSavingModeOn()
       for(var i = 0; i < 6; i++){
            thermostat.up()}
            expect(thermostat.temp).toEqual(25)
     });
 });

describe('powerSavingMode off', function(){
  it('if power saving mode is off, maximum temp is 32 degrees', function(){
    thermostat.powerSavingModeOff()
    expect(thermostat.maxTemp).toEqual(32)
  });
  it("can't increase temp beyond 32 if powerSavingModeOff", function(){
    thermostat.powerSavingModeOff()
    for(var i = 0; i < 13; i++){
         thermostat.up()}
         expect(thermostat.temp).toEqual(32)
  });
});

it('.reset resets temp to default of 20 degrees', function(){
  thermostat.reset()
  expect(thermostat.temp).toEqual(20)
});


it('.energyUsageStatus is low if temp is below 18 degrees', function(){
  for(var i = 0; i < 3; i++){
       thermostat.down();
     };
  expect(thermostat.energyUsageStatus()).toEqual('Low usage');
});

it('.energyUsageStatus is medium if temp is below 25 degrees and above 18', function(){
  for(var i = 0; i < 4; i++){
       thermostat.up();
     }
  expect(thermostat.energyUsageStatus()).toEqual('Medium usage');
});
it('.energyUsageStatus is high if temp is above 25 degrees', function(){
  for(var i = 0; i < 6; i++){
       thermostat.up();
     }
  expect(thermostat.energyUsageStatus()).toEqual('High usage');
});

});
