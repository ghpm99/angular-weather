import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DetailsPage } from './containers/details/details.page';
import { DetailsGuard } from './services/details.guard';
import { DetailsEffects } from './state/details.effects';
import { detailsReducer } from './state/details.reducer';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [DetailsPage, DailyWeatherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsPage, canActivate: [DetailsGuard] },
    ]),
    StoreModule.forFeature('details',detailsReducer),
    EffectsModule.forFeature([DetailsEffects]),
    ComponentsModule,
    MomentModule,
  ],
  providers: [DetailsGuard],
})
export class DetailsModule {}
