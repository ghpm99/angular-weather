import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { bookmarkReducer } from './state/bookmark.reducer';



@NgModule({
  declarations: [BookmarksPage],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks',bookmarkReducer),
    FontAwesomeModule,
    RouterModule,
  ]
})
export class BookmarksModule { }
