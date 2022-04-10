import { createSlice } from "@reduxjs/toolkit";

export const gameReducer = createSlice({
    name: "game",
    initialState: {
        memberCount: "3",
        isError: false,
        members: [],
        activeMember: 0,
        location: {
            "name": "Театр",
            "url":  "https://meme-police.ru/spyfall/location/spyfall1/0.jpg",
            "jobs": ["Зритель", "Актер", "Буфетчик"]
        },
    },
    reducers: {
        set: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
        setNameMember: (state, action) => {
            state.members[action.payload.index].name = action.payload.value;
        },
    },
});

export const { set, setNameMember } = gameReducer.actions;
export default gameReducer.reducer;