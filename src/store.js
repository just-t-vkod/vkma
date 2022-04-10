import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./js/reducers/mainReducer";
import game from "./js/reducers/game";
import locations from "./js/reducers/locations";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        game: game,
        locations: locations,
    },
});