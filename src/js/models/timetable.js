
import DayIs from 'day-is';

class Timetable {

  constructor (timetable){
    this.timetable = timetable;
  }


  getDepartures (date, count){
    let index = this._timetableTitleIndex(date);
    let departures = [];

    if (index != -1){
      let hour =  date.toLocaleString('en-us', {hour12: false, hour: '2-digit'});
      let minute = date.toLocaleString('en-us', { hour12:false, minute: '2-digit'});
      minute = minute.length === 1 ? '0' + minute : minute;
      departures = this._departures(index, hour, minute);

      if (departures.length < count){
        date.setHours( date.getHours() + 1, 0);
        let nextHourDepartures = this.getDepartures(date, (count - departures.length) );
        departures = departures.concat(nextHourDepartures);
      }


    }

    return departures.slice(0, count);
  }



  _timetableTitleIndex(date){
    let day = DayIs.getWeekday(date);
    let index = this.timetable.content.days.findIndex((element) => day.toLowerCase() === element.title.toLowerCase() );

    if (index == -1 && !DayIs.isWeekend(date)){
      return 0;
    }

    return index;
  }

  _departures(index, hour, minute){
      var hourIndex = this.timetable.content.days[index].hours.findIndex((element) => hour === element.time );
      var times = [];
      if (hourIndex != -1){

          this.timetable.content.days[index].hours[hourIndex].minutes.forEach((element) => {

            if (Number(element.time) > Number(minute)){
              times.push({
                hour: hour,
                minute: element.time,
                lines: element.lines
              });
            }

          });


      }

      return times;
  }

}


export default Timetable;
