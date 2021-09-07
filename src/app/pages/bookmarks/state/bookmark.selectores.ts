import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookmarksState } from "./bookmark.reducer";


export const selectBookmarkState = createFeatureSelector('bookmarks');

export const selectBookmarksList = createSelector(
    selectBookmarkState,
    (bookmarksState : BookmarksState) => bookmarksState.list,
);