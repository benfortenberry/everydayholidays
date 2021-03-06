import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { Calendar } from '@ionic-native/calendar';
import moment from 'moment';
import { SocialSharing } from '@ionic-native/social-sharing';



@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  hName: string;
  hDate: string;
isApp: any;
  holidays: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public tsProvider: TimeDateServiceProvider, private view: ViewController, private socialSharing: SocialSharing, private calendar: Calendar) {



    var holiday = navParams.get('holiday')
    this.hName = holiday.name;
    this.hDate = holiday.date;
    this.getDataByName(this.hName);

    this.isApp = document.URL.startsWith('http');

  }



  getDataByName(name) {
    this.tsProvider.getDataByName(name)
      .then(data => {
        this.holidays = data;
      });
  }

  closeModal() {
    this.view.dismiss();
  }


  share(h) {
    this.socialSharing.share("Today is " + h.name + "!", "Holidays", null, null)
  }

  addToCalendar(h) {
    var builtDate = h.date + " " + moment().year();


    var momentizedDate = moment(builtDate, 'MMMM D YYYY');

    if (momentizedDate.isBefore(moment())) {

      momentizedDate = moment(builtDate, 'MMMM D YYYY').add(1, 'y')

    }

    this.calendar.createEventInteractively(this.hName, '', '', momentizedDate.toDate(), momentizedDate.add(1, 'd').toDate());

  }


}
