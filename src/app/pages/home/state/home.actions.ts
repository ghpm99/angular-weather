import { createAction, props } from "@ngrx/store";
import { Bookmark } from "src/app/shared/models/bookmark.model";

export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{query: string}>(),
);

export const loadCurrentWeatherSucess = createAction(
    '[Weather API] Load Current Weather Sucess',
    props<{entity: any}>(),
);

export const loadCurrentWeatherFailed = createAction(
    '[Weather API] Load Current Weather Failed',
);

export const toggleBookmark = createAction(
    '[Home] Toggle Bookmark',
    props<{entity: Bookmark}>(),
);

export const clearHomeState = createAction(
    '[Home] Clear Home State',
);

export const loadCurrentWeatherById = createAction(
    '[Home] Load Current Weather By Id',
    props<{id: string}>(),
);