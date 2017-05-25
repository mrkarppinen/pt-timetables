
import { NgModule, ChangeDetectorRef } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import {NgFor, NgIf} from '@angular/common';
import {RouterModule, Router, ActivatedRoute} from '@angular/router'

import App from './../components/app-component';
import StopList from './../models/stoplist';
import List from './../components/list';
import Stop from './../components/stop';
import ScheduleService from './../schedule-service';
import Storage from './../storage';
import TimetableView from './../components/timetable'
import TimePipe from './../pipes/TimePipe'

var routes = RouterModule.forRoot([
  {
    path: '',
    component: List,
  },

  {
    path: 'timetable/:id',
    component: TimetableView
  }

]);


var AppModule = NgModule({
  imports: [BrowserModule, HttpModule, routes],
  declarations: [App, List, Stop, TimetableView],
  bootstrap: [App],
  providers: [ScheduleService, Storage, StopList, TimePipe],
  directives: [NgFor, NgIf, TimePipe]
}).Class({
  constructor: function (){}
})


ScheduleService.parameters = [[Http]];
List.parameters = [[StopList], [ChangeDetectorRef]];
StopList.parameters = [[ScheduleService], [Storage]];
Stop.parameters = [[StopList], [Router]];
TimetableView.parameters = [[StopList], [ActivatedRoute], [TimePipe]];

export default AppModule;
