import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  onGoingRequest;
  dateControl = new FormControl('',[Validators.required, this.noWhitespaceValidator]);
  genderResponse;
  dates:any = [];

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  async getDates() {
    let date = this.dateControl.value;
    try {
      this.onGoingRequest = true;
      this.dates = await this.http.get(`/api/dates?date=${date.trim()}`).toPromise();
      this.onGoingRequest = false;
    } catch (e) {
      console.log(e);
      this.onGoingRequest = false;
      this._snackBar.open(`Something Went Wrong`, 'close' , {duration: 2000});
    }
    
  }

  async downloadCsv(){
    let date = this.dateControl.value;
    try {
      this.onGoingRequest = true;
      let csv:any = await this.http.get(`/api/datescsv?date=${date.trim()}`,{responseType: 'blob'}).toPromise();
      const a = document.createElement('a')
      const objectUrl = URL.createObjectURL(csv)
      a.href = objectUrl
      a.download = 'dates.csv';
      a.click();
      URL.revokeObjectURL(objectUrl);
      this.onGoingRequest = false;
    } catch (e) {
      console.log(e);
      this.onGoingRequest = false;
      this._snackBar.open(`Something Went Wrong`, 'close' , {duration: 2000});
    }
  }
}
