import { Action, createReducer, on } from '@ngrx/store';
import { Bookmark } from 'src/app/shared/models/bookmark.model';

import * as fromHomeActions from '../../home/state/home.actions';
import * as fromBookmarkActions from './bookmark.actions';

export interface BookmarksState {
  list: Bookmark[];
}

export const bookmarkInitialState: BookmarksState = {
  list: [],
};

const reducer = createReducer(
    bookmarkInitialState,
    on(fromHomeActions.toggleBookmark, (state, { entity }) => ({
      ...state,
      list: toggleBookmark(state.list, entity),
    })),
    on(fromBookmarkActions.removeBookmark, (state, { id }) => ({
      ...state,
      list: state.list.filter(b => b.id !== id),
    })),
    on(fromBookmarkActions.updateBookmarkList, (state, { list }) => ({
      ...state,
      list,
    })),
  );


export function bookmarkReducer(state: BookmarksState | undefined, action: Action){
    return reducer(state,action);
}

function toggleBookmark(list: Bookmark[], entity: Bookmark) : Bookmark[]{
    if(!!list.find(bookmark => bookmark.id === entity.id)){
        return list.filter(bookmark => bookmark.id !== entity.id);
    }
    return [...list, entity];
}