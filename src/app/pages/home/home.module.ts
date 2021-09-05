import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home',homeReducer),
  ],
  declarations: [
    HomePage
  ]
})
export class HomeModule { }
