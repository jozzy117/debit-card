import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  atmObj = {
    cardType: '',
    cardHolder: '',
    cardNumber: '',
    cvv: '',
    expiryDate: ''
  }

  cardDigit:string = ''
  values = '';
  expiryDate: string = '';
  atmCredentials = {}
  subscription: Subscription = new Subscription;
 
  constructor(public fb: FormBuilder,
              public _dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this._dataService.currentAnswer.subscribe(answer => this.atmObj = answer);
  }

  onKey(event: any) { 
    this.values = event.target.value;
    console.log(this.values);
    this.cardDigit = this.values.slice(0, 4);
    if (this.cardDigit === "5399") {
      this.atmObj.cardType = "master";
    }
    if (this.cardDigit === "4399") {
      this.atmObj.cardType = "visa";
    }
    if (this.cardDigit === "3999") {
      this.atmObj.cardType = "verve";
    }
    if (this.cardDigit !== "5399" && this.cardDigit !== "4399" && this.cardDigit !== "3999") {
      this.atmObj.cardType = "";
    }
  }

  saveCard() {  
    this._dataService.atmObj(this.atmObj);
    this._dataService.sendClickEvent();
  }

}
