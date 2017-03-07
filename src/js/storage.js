

class Storage {

  constructor (){
    this.key = 'stops';
    this.separator = ';';
  }

  getStops() {
      let stops = window.localStorage.getItem(this.key);
      return (stops == null || stops.length === 0) ? [] : stops.split(this.separator);
  }


 addStop (id){
   let stops = this.getStops();

   stops.push(id);
   this.saveIds(stops);
 }

 delete (id){
   let stops = this.getStops();
   let index = stops.indexOf(id);

   stops.splice(index,1);
   this.saveIds(stops);
 }

 saveIds(stops){
   window.localStorage.setItem(this.key, stops.join(this.separator) );
 }

}


export default Storage;
