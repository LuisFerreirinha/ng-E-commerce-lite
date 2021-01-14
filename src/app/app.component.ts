import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IpopUp } from './Models/IPopUp';
import { PopUpService } from './_services/pop-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-e-commerce-lite';
  popUpSubscription = new Subscription();

  popUps: IpopUp[] = [];

  constructor(private popUpService: PopUpService) {}

  ngOnInit() {
    this.popUpSubscription = this.popUpService.getPopUp().subscribe((popUp) => {
      if (popUp && typeof popUp == 'object') {
        this.popUps = [popUp, ...this.popUps];
        console.log(popUp);

        setTimeout(() => {
          this.popUps.pop();
        }, popUp.timer * 1000 || 5000);
      } else {
        this.removePopUp(popUp);
      }
    });
  }

  ngOnDestroy() {
    this.popUpSubscription.unsubscribe();
  }

  removePopUp(index: number) {
    this.popUps.splice(index, 1);
  }
}
