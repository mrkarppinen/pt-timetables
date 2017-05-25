
import {Pipe, PipeTransform} from '@angular/core';


var TimePipe = Pipe({
  name: 'timePipe'
}).Class({

  constructor: function (){},
  transform: function (time){
    let hour = Math.floor(time / 60 / 60);
    hour = (hour >= 24) ? hour-24 : hour;

    return (`0${hour}`).slice(-2) + ':' + (`0${Math.floor((time / 60) % 60)}`).slice(-2);
  }
})


export default TimePipe;
