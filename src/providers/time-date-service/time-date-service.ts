import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TimeDateServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimeDateServiceProvider {

  // apiUrl = 'https://api.xmltime.com/holidays?accesskey=cdgK7KUZfq&expires=2018-07-03T19%3A35%3A51%2B00%3A00&signature=CFVzpshq1ukTlgCcI1c9Gel4DCY%3D&version=2&out=js&prettyprint=1&country=ro&year=';
  apiUrl = "./assets/json/holidays.json"
  constructor(public http: HttpClient) {
    console.log('Hello TimeDateServiceProvider Provider');
  }

  getData() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        console.log(data)
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



}
