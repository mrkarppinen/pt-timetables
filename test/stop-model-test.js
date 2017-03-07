
import 'mocha';
import chai from 'chai';
import Timetable from '../src/js/models/timetable';

chai.should();


describe('Stop', function (){
      let timetable = {
        content: {
          "title":"Opera",
          "lines":["10"],
          "days": [
            {
              "title": "Mon-fri",
              "hours": [
                {"time":"05","minutes":[ {"time":"39","lines":["10"]},{"time":"54","lines":["10"]} ]},
                {"time":"06","minutes":[ {"time":"04","lines":["10"]},{"time":"14","lines":["10"]},{"time":"22","lines":["10"]},{"time":"30","lines":["10"]},{"time":"37","lines":["10"]},{"time":"44","lines":["10"]},{"time":"52","lines":["10"]} ]}
              ]
            },
            {
              "title": "Saturday",
              "hours": [
                {"time":"08","minutes":[ {"time":"04","lines":["10"]}, {"time":"15","lines":["10"]}, {"time":"27","lines":["10"]} ]},
                {"time":"09","minutes":[ {"time":"06","lines":["10"]}, {"time":"17","lines":["10"]}, {"time":"29","lines":["10"]} ]},
                {"time":"10","minutes":[ {"time":"08","lines":["10"]}, {"time":"19","lines":["10"]}, {"time":"31","lines":["10"]} ]}
              ]
            },
            {
              "title": "Sunday",
              "hours": [ {"time":"11","minutes":[ {"time":"08","lines":["10"]}, {"time":"19","lines":["10"]}, {"time":"31","lines":["10"]} ]} ]
            }
          ]
        }
      };

      let stop = new Timetable(timetable);


      describe('constructor', function (){

        it('not null', function(){
          stop.should.not.equal(null);
        });

      });

      describe ('title', function (){
          it('equals Opera', function (){
              stop.timetable.content.title.should.equal('Opera');
          });
      });



      describe('getDepartures', function (){


        describe("Weekdays", function (){

          it('should return 3 departures', function (){
            let day = new Date(2020, 2, 2, 9, 15);
            let departures = stop.getDepartures(day, 3);
            departures.should.have.length(3);
            // departures[2].hour.should.equal('10');
            // departures[2].minute.should.equal('08');
          });


        });


        describe("Saturday", function (){

          it('should return 3 departures', function (){
            let day = new Date(2020, 1, 29, 9, 15);
            let departures = stop.getDepartures(day, 3);
            departures.should.have.length(3);
            departures[2].hour.should.equal('10');
            departures[2].minute.should.equal('08');
          });


        });

          describe("Sunday", function (){


            it('should return empty arr', function (){
              let day = new Date(2020, 2, 1, 11, 50);
              let departures = stop.getDepartures(day, 3);
              departures.should.have.length(3);
            });

            it('should return 2 departures', function (){
              let day = new Date(2020, 2, 1, 11, 10);
              let departures = stop.getDepartures(day, 2);
              departures.should.have.length(2);
            });


          });


      });

});
