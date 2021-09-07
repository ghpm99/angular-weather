import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { BookmarksEffects } from './state/bookmark.effects';
import { bookmarkReducer } from './state/bookmark.reducer';



@NgModule({
  declarations: [BookmarksPage],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks',bookmarkReducer),
    EffectsModule.forFeature([BookmarksEffects]),
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule,
  ]
})
export class BookmarksModule { }
