import { DetailPage } from './../detail/detail';
import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeDateServiceProvider } from './../../providers/time-date-service/time-date-service';
import { ModalController } from 'ionic-angular';
import { ModalOptions } from 'ionic-angular';
import * as moment from 'moment';


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
    // var elementid = moment().format('MMMM');
    // let el = this.elRef.nativeElement;//get underlying native element.
    // let yOffset = el.getElementById(elementid).offsetTop;
    // console.log(el.getElementById(elementid))
    // console.log(yOffset)
    // console.log('after view init');
    // var elementid = moment().format('MMMM');
    // console.log(elementid);
    // let element = document.getElementById(elementid)!;
    // console.log(element);
    // setTimeout(() => {
    //   console.log(element);
    //   //   let element = document.getElementById(moment().format('MMMM'));
    //   //   element.scrollIntoView()
    // }, 1000);
    // document.getElementById('loginInput').value = '123344565';
  }

  presentProfileModal(h) {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    let profileModal = this.modalCtrl.create(DetailPage, { holiday: h }, myModalOptions);
    profileModal.present();
  }

  public ngAfterViewChecked(): void {
    console.log('ran')
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
        // let element = document.getElementById(moment().format('M'));
        // console.log(element)
        // let elem: Element = document.getElementById("July")
        // console.log(elem)
        // console.log(document.getElementById('July'))
        //   console.log(this.myElement.nativeElement.select("#July"))
        // console.log(document.getElementsByClassName('July'));
        // console.log(document.getElementById('July'));
        // console.log(document.getElementsByName('July'));

        // console.log(document.getElementsByClassName('July').item(0));
        // const script = document.getElementsByClassName('July').item(0) as HTMLScriptElement
        // console.log(script)
        // var elements = document.getElementsByClassName('July');
        // var requiredElement = elements[0];
        // console.log(requiredElement)
        // HTMLCollection.prototype.forEach = Array.prototype.forEach;


        // console.log(x)
        // element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      });
  }




}
