import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { AppState } from 'src/app/shared/state/app.reducer';

import * as fromDetailsActions from './details.actions';
import * as fromRouterSelectors from '../../../shared/state/router/router.selectors'
import { combineLatest } from 'rxjs';
import { Params } from '@angular/router';

@Injectable()
export class DetailsEffects {
    
  loadCurrentWeather$ = createEffect(() => this.action$
  .pipe(  
      ofType(fromDetailsActions.loadWeatherDetails),
         withLatestFrom(this.store.pipe(select(fromRouterSelectors.selectRouterQueryParams))), 
           mergeMap(([,queryParams]:[any,Params]) => 
        combineLatest([
            this.weatherService.getCityWeatherByCoord(queryParams.lat,queryParams.lon),
            this.weatherService.getWeatherDetails(queryParams.lat,queryParams.lon),
        ])        
    ),
    catchError((err,caught$) => {
        this.store.dispatch(fromDetailsActions.loadWeatherDetailsFailed());
        return caught$;
    }),
    map(([current,daily]) => {
        const entity = daily;
        entity.city = {...current.city, timeZone: daily.city.timeZone};
        return fromDetailsActions.loadWeatherDetailsSucess({entity});
    }),
    )
  );

  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private weatherService: WeatherService
  ) {}
}
