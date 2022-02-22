import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gender-prediction',
  templateUrl: './gender-prediction.component.html',
  styleUrls: ['./gender-prediction.component.css']
})
export class GenderPredictionComponent implements OnInit {

  onGoingRequest;
  nameControl = new FormControl('',[Validators.required, this.noWhitespaceValidator]);
  genderResponse;

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  async getGender() {
    let name = this.nameControl.value;
    try {
      this.onGoingRequest = true;
      this.genderResponse = await this.http.get(`/api/gender?name=${name.trim()}`).toPromise();
      this.onGoingRequest = false;
    } catch (e) {
      console.log(e);
      this.onGoingRequest = false;
      this._snackBar.open(`Something Went Wrong`, 'close' , {duration: 2000});
    }
    
  }
}
