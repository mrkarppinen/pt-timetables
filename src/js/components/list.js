

import { Component } from '@angular/core';


var List = Component({
  selector: 'list',
  template: require('./../../templates/list.html')
}).Class({

  constructor: function (stopList, changeDetectorRef){

     this.showAddNew = false;
     this.changeDetectorRef= changeDetectorRef;
     this.stopList = stopList;

  },

  ngOnInit: function (){

    this.stopList.load();

    setInterval( () => {
      this.changeDetectorRef.detectChanges();
    }, 1000);

  },



  getTime: function (){
    return new Date();
  },

  toggleShowAdd: function(){
    this.showAddNew = !this.showAddNew;
  },

  addNew: function(id) {

    this.stopList.add(id);
    this.toggleShowAdd();

  }


});



export default List;
