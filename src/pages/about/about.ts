import { DetailPage } from './../detail/detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { ModalController } from 'ionic-angular';
import { ModalOptions } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  data: any;


  constructor(public navCtrl: NavController, public tsProvider: TimeDateServiceProvider, public modalCtrl: ModalController) {

    this.getData();

  }

  presentProfileModal(h) {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    let profileModal = this.modalCtrl.create(DetailPage, { holiday: h }, myModalOptions);
    profileModal.present();
  }

  getData() {
    this.tsProvider.getData()
      .then(data => {
        this.data = data;
        console.log(this.data);
      });
  }


}
