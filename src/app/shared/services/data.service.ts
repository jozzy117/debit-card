import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private atmCredentials = new BehaviorSubject({
    cardType: '',
    cardHolder: '',
    cardNumber: '',
    cvv: '',
    expiryDate: ''
  });
  private subject = new Subject<any>();
  currentAnswer = this.atmCredentials.asObservable();


  constructor() { }

  atmObj(obj: any) {
    this.atmCredentials.next(obj);
  }

  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
}
