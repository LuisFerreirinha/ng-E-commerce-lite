import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IpopUp } from 'src/app/Models/IPopUp';
import { PopUpService } from 'src/app/_services/pop-up.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  animations: [
    trigger('popUpState', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void=> *', [
        style({
          opacity: 0,
          transform: 'translateX(100px)',
        }),
        animate(300),
      ]),
    ]),
  ],
})
export class PopUpComponent implements OnInit {
  @Input() item: IpopUp;
  @Input() index: number;

  constructor(private popUpService: PopUpService) {}

  ngOnInit(): void {}

  remove() {
    this.popUpService.removePopUp(this.index);
  }
}
