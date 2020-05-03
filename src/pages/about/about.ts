import { DetailPage } from './../detail/detail';
import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { ModalController } from 'ionic-angular';
import { ModalOptions } from 'ionic-angular';
import moment from 'moment';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  data: any;
  isLoaded: boolean = false;

  ranOnce: boolean = false;


  constructor(public navCtrl: NavController, public myElement: ElementRef, public tsProvider: TimeDateServiceProvider, public modalCtrl: ModalController) {

    this.getData();

  }

  ngAfterViewInit() {
   
  }

  presentProfileModal(h) {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    let profileModal = this.modalCtrl.create(DetailPage, { holiday: h }, myModalOptions);
    profileModal.present();
  }

  public ngAfterViewChecked(): void {
    if (this.tsProvider.goToCurrentMonth) {
      let element = document.getElementById(moment().format('MMMM'));

      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'instant' })
        this.tsProvider.goToCurrentMonth = false;
      }

    }


  }

  getData() {
    this.tsProvider.getData()
      .then(data => {
        this.data = data;

        this.isLoaded = true;
      
      });
  }




}
