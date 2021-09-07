import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CityDailyWeather } from 'src/app/shared/models/weather.model';
import { AppState } from 'src/app/shared/state/app.reducer';

import * as fromDetailsActions from '../../state/details.actions';
import * as fromDetailsSelectors from '../../state/details.selectors';

@Component({
  selector: 'jv-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  cityDailyWeather: CityDailyWeather;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());

    this.store
      .pipe(
        select(fromDetailsSelectors.selectDetailsEntity),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe((value) => (this.cityDailyWeather = value));
  }
}
