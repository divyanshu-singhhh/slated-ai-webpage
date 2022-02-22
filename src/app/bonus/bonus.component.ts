import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {

  
  onGoingRequest;
  dateControl = new FormControl('',[Validators.required, this.noWhitespaceValidator]);
  genderResponse;
  dates:any = [];
  days:any = [];

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

   getDates() {
    this.days = [];
    let date = this.dateControl.value;
    let currentDate = moment(date, "DD/MM/YYYY");
    this.addDays('Month Start Day' , currentDate.clone().startOf('month').format('dddd'));
    this.addDays('Month End Day' , currentDate.clone().endOf('month').format('dddd'));
    this.addDays('Year Start Day' , currentDate.clone().startOf('year').format('dddd'));
    this.addDays('Year End Day' , currentDate.clone().endOf('year').format('dddd'));
    
  }

  addDays(name,value){
    this.days.push({name,value});
  }


}
