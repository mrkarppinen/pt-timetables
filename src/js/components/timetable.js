
import {Component} from '@angular/core';

var TimetableView = Component({
  selector: 'timetable',
  template: require('../../templates/timetable.html')
}).Class({

  constructor: function(stopList, activatedRoute){
    this.stopList = stopList;
    this.activatedRoute = activatedRoute;
    this.id = null;
    this.data = '';
  },
  ngOnInit: function (){
    this.activatedRoute.params.subscribe((data) => {
      this.id = data.id;
      this.data = this.stopList.stops.get(this.id);
    });
  }

});



export default TimetableView;
