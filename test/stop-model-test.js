
import 'mocha';
import chai from 'chai';
import Timetable from '../src/js/models/timetable';

chai.should();


describe('Stop', function (){

      let timetable = {
        "_id":"1808",
        "_rev":"1-6c2d4fb1cab722bffc765a1db9513a3c",
        "updated":"20170523",
        "lines": ["201"],
        "content":
        {
          "title":"Taavinkuja",
          "timetable":[
              {"time":27720,"lines":["201"]},{"time":29220,"lines":["201"]},{"time":31320,"lines":["201"]},
              {"time":32820,"lines":["201"]},{"time":34920,"lines":["201"]},{"time":36420,"lines":["201"]},
              {"time":38520,"lines":["201"]},{"time":40020,"lines":["201"]},{"time":42120,"lines":["201"]},
              {"time":43620,"lines":["201"]},{"time":45720,"lines":["201"]},{"time":47220,"lines":["201"]},
              {"time":49320,"lines":["201"]},{"time":50820,"lines":["201"]},{"time":52920,"lines":["201"]},
              {"time":54420,"lines":["201"]},{"time":56520,"lines":["201"]},{"time":58020,"lines":["201"]},
              {"time":60120,"lines":["201"]},{"time":61620,"lines":["201"]},
              {"time":63720,"lines":["201"]},{"time":65220,"lines":["201"]}]}};

      let stop = new Timetable(timetable);


      describe('constructor', function (){

        it('not null', function(){
          stop.should.not.equal(null);
        });

      });

      describe ('title', function (){
          it('equals Opera', function (){
              stop.timetable.content.title.should.equal('Taavinkuja');
          });
      });



      describe('getDepartures', function (){



          it('should return 3 departures', function (){
            let day = new Date(2020, 2, 2, 9, 15);
            let departures = stop.getDepartures(day, 3);
            departures.should.have.length(3);
            // departures[2].hour.should.equal('10');
            // departures[2].minute.should.equal('08');
          });



      });

});
