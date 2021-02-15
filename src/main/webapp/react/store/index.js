import {configureStore,
    getDefaultMiddleware,
    createSlice
} from "@reduxjs/toolkit";

const middleware = [
    ...getDefaultMiddleware(),
];

const state = {
    posts: [],
    comments: [],
    projects: []
}

const slice = createSlice({
    name: "data",
    initialState: state,
    reducers: {
    },
});

const authReducer = slice.reducer;

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware,
});