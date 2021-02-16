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
    projects: [],
    pages:{
        homePage:{
            skills:{
                skillsDescription: `The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS`,
                skillsList: [
                    {title:"NodeJs", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"NodeJs", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"NodeJs", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                ]
            }
        }
    }
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
        data: authReducer,
    },
    middleware,
});