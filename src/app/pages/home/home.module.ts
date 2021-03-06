import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './containers/home/home.page';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { RouterModule } from '@angular/router';
import { UnitSelectorComponent } from './containers/unit-selector/unit-selector.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home',homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
    RouterModule,
  ],
  declarations: [
    HomePage,
    CurrentWeatherComponent,
    UnitSelectorComponent
  ]
})
export class HomeModule { }
