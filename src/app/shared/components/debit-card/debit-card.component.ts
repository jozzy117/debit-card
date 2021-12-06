import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent implements OnInit {
  atmObj = {
    cardType: '',
    cardHolder: '',
    cardNumber: '',
    cvv: '',
    expiryDate: ''
  }
  
  cardDigit:string = ''
  subscription: Subscription = new Subscription;
  atmCredentials = {}
  constructor(public _dataService: DataService) { 
    this.subscription = this._dataService.currentAnswer.subscribe(answer => this.atmObj = answer);
  }

  ngOnInit(): void {
  }

}
