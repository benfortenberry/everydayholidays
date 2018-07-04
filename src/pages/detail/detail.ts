import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { Calendar } from '@ionic-native/calendar';
import * as moment from 'moment';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  hName: string;
  hDate: string;

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tsProvider: TimeDateServiceProvider, private view: ViewController, private calendar: Calendar) {
    var holiday = navParams.get('holiday')
    this.hName = holiday.name;
    this.hDate = holiday.date;
    this.getData();

  }



  getData() {
    this.tsProvider.getData()
      .then(data => {
        this.data = data;
        console.log(this.data);
      });
  }

  closeModal() {
    this.view.dismiss();
  }

  addToCalendar(h) {
    var builtDate = h.date + " " + moment().year();
    console.log('builtdate', builtDate)
    var momentizedDate = moment(builtDate, 'MMMM D YYYY');
    console.log('momentized date', momentizedDate);
    console.log(momentizedDate.isBefore(moment()))
    if (momentizedDate.isBefore(moment())) {
      console.log('in the if')
      momentizedDate = momentizedDate.add(1, 'y');
      momentizedDate.add(1, 'y');
      console.log(momentizedDate)
    }

    // console.log(h)
  }


}
