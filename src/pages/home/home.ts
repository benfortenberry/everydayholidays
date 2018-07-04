import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;

  date: any;

  constructor(public navCtrl: NavController, public tsProvider: TimeDateServiceProvider) {
    // this.getUsers();
    this.date = moment().format("MMMM D");
    this.getData();
    //this.date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  }

  getData() {
    this.tsProvider.getData()
      .then(data => {
        this.data = data;
        console.log(this.data);
      });
  }


}
