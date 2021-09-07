import { Component, OnDestroy, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { Bookmark } from 'src/app/shared/models/bookmark.model';

import * as fromBookmarkSelectors from '../../state/bookmark.selectores';
import * as fromBookmarkActions from '../../state/bookmark.actions';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { CityTypeaheadItem } from 'src/app/shared/models/city-typeahead-item.model';

@Component({
  selector: 'jv-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit,OnDestroy {
  bookmarks$: Observable<Bookmark[]>;
  searchTypeaheadControl = new FormControl(undefined);
  
  windowClose = faWindowClose;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bookmarks$ = this.store.pipe(
      select(fromBookmarkSelectors.selectBookmarksList)
    );
    this.searchTypeaheadControl.valueChanges
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe((value: CityTypeaheadItem) =>
      this.store.dispatch(fromBookmarkActions.toggleBookmarkById({ id: value.geonameid }))
    );
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBookmarkActions.removeBookmark({ id }));
  }
}
