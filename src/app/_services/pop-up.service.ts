import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IpopUp } from '../Models/IPopUp';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  private subject = new Subject<any>();

  constructor() {}

  addPopup(popUp: IpopUp) {
    const _popUp: IpopUp = {
      message: popUp.message,
      type: popUp.type,
      timer: popUp.timer,
    };
    this.subject.next(_popUp);
  }

  removePopUp(index: number) {
    this.subject.next(index);
  }

  getPopUp(): Observable<any> {
    return this.subject.asObservable();
  }
}
