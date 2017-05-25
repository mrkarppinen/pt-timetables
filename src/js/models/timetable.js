
import DayIs from 'day-is';

class Timetable {

  constructor (timetable){
    this.timetable = timetable;
  }


  getDepartures (date, count){
    let time = ( (date.getHours() * 60 ) + date.getMinutes() ) * 60;

    let departures = this.timetable.content.timetable
    .filter( (item) => {
      return item.time > time;
    }).map((item) => ({
      hour: this._parseHour(item.time),
      minute: this._parseMinute(item.time),
      lines: item.lines,
    }));


    return departures.slice(0, count);
  }

  _parseHour(time){
    let hour = Math.floor(time / 60 / 60);
    hour = (hour >= 24) ? hour-24 : hour;
    return (`0${hour}`).slice(-2);
  }

  _parseMinute(time){
    return (`0${Math.floor((time / 60) % 60)}`).slice(-2);
  }


}


export default Timetable;
