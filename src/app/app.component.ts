import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    moment.locale('pt-br');
  }
}
