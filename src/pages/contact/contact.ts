import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { ModalController } from 'ionic-angular';
import { ModalOptions } from 'ionic-angular';
import { DetailPage } from './../detail/detail';
// import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  terms: string;
  holidays: any;

  constructor(public navCtrl: NavController, public tsProvider: TimeDateServiceProvider, public modalCtrl: ModalController) {


  }

  doSearch(terms) {
    this.getDataBySearch(terms)
  }

  presentProfileModal(h) {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    let profileModal = this.modalCtrl.create(DetailPage, { holiday: h }, myModalOptions);
    profileModal.present();
  }


  getDataBySearch(terms) {
    this.tsProvider.getDataBySearch(terms)
      .then(data => {
        this.holidays = data;
      });
  }


}
