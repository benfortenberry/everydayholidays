import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { ModalController, NavParams } from 'ionic-angular';
import { Modal, ModalOptions } from 'ionic-angular';
import { DetailPage } from './../detail/detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  terms: string;
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
