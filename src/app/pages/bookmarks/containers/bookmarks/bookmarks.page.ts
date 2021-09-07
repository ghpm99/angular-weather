import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Bookmark } from 'src/app/shared/models/bookmark.model';

import * as fromBookmarkSelectors from '../../state/bookmark.selectores';
import * as fromBookmarkActions from '../../state/bookmark.actions';

@Component({
  selector: 'jv-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  bookmarks$: Observable<Bookmark[]>;
  windowClose = faWindowClose;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bookmarks$ = this.store.pipe(
      select(fromBookmarkSelectors.selectBookmarksList)
    );
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBookmarkActions.removeBookmark({ id }));
  }
}
