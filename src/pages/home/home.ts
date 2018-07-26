import { AboutPage } from './../about/about';
import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  holidays: any;

  date: any;

  plusMinus: number = 0;

  constructor(public navCtrl: NavController, public tsProvider: TimeDateServiceProvider, private socialSharing: SocialSharing, private calendar: Calendar) {



  }

  goToAll() {
    this.navCtrl.push(AboutPage)
  }

  addToDate() {
    this.plusMinus++;
    this.date = moment().add(this.plusMinus, 'd').format("MMMM D");
    this.getDataByDate(this.date);

  }

  subtractFromDate() {
    this.plusMinus--;
    this.date = moment().add(this.plusMinus, 'd').format("MMMM D");
    this.getDataByDate(this.date);

  }

  getDataByDate(date) {
    this.tsProvider.getDataByDate(date)
      .then(data => {
        this.holidays = data;
        //  console.log(this.data);
      });
  }

  share(h) {
    this.socialSharing.share("Today is " + h.name + "!", "Holidays", null, null)
  }
  ionViewDidEnter() {
    this.date = moment().format("MMMM D");
    this.getDataByDate(this.date);
  }

  addToCalendar(h) {
    var builtDate = h.date + " " + moment().year();


    var momentizedDate = moment(builtDate, 'MMMM D YYYY');

    if (momentizedDate.isBefore(moment())) {

      momentizedDate = moment(builtDate, 'MMMM D YYYY').add(1, 'y')

    }

    //console.log(momentizedDate.toString())
    this.calendar.createEventInteractively(h.name, '', '', momentizedDate.toDate(), momentizedDate.add(1, 'd').toDate());

  }


}
