

class StopList {

  constructor(scheduleService, storage){

    this.stops = new Map();
    this.scheduleService = scheduleService;
    this.storage = storage;

  }

  load(){
    var ids = this.storage.getStops();
    if (ids.length > 0){

        this.scheduleService.getAll(ids).subscribe(
          data => {

               data.json().forEach((stop) => {
                 this.stops.set(stop._id, stop);
               });

           },
          err => { console.error(err); }
        );

    }

  }


  add(id){

    this.scheduleService.get(id).subscribe(
      data => {
          this.stops.set(id,data.json());
          this.storage.addStop (id);
      },
      err => { console.err(err); }
    );

  }

  delete (id){
    this.stops.delete(id);
    this.storage.delete(id);
  }

  getStops(){
    return  Array.from(this.stops.values());
  }



}


export default StopList;
