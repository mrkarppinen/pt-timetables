

import {Component} from '@angular/core';
import DayIs from 'day-is';
import Timetable from '../models/timetable';


var Stop = Component({

  selector: 'stop',
  template: require('./../../templates/stop.html'),
  inputs: ['item']

}).Class({
  constructor: function (stopList, router, activatedRoute){

   this.timetable = null;
   this.times = [];
   this.stopList = stopList;
   this.router = router;

  },

  ngOnInit: function (){
    this.timetable = new Timetable(this.item);
  },

  getNextDepartures:  function (){
    return this.timetable.getDepartures(new Date(), 3);
  },


  displaTimetable(id){
    this.router.navigate(['/timetable', id]);
  }


});


export default Stop;
