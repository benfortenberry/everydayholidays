import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TimeDateServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimeDateServiceProvider {

  goToCurrentMonth: boolean = true;
  apiUrl = "./assets/json/holidays.json"
  constructor(public http: HttpClient) {
  }

  getData() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
      });
    });
  }

  getDataByName(name) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        let filteredData = [];
        data["holidays"].forEach(element => {
          if (element.name == name) {
            filteredData.push(element)
          }
        });
        resolve(filteredData);
      }, err => {
      });
    });
  }

  getDataByDate(date) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        let filteredData = [];
        data["holidays"].forEach(element => {
          if (element.date == date) {
            filteredData.push(element)
          }
        });
        resolve(filteredData);
      }, err => {
      });
    });
  }


  getDataBySearch(term) {


    term = term.toLowerCase();

    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        let filteredData = [];
        data["holidays"].forEach(it => {
          if ((it.name.toLowerCase().includes(term) && it.date) ||
            (it.date.toLowerCase().includes(term) && it.date)) {
            filteredData.push(it)
          }
        });
        resolve(filteredData);
      }, err => {
      });
    });
  }




}
