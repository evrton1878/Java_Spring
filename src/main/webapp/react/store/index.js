import {configureStore,
    getDefaultMiddleware,
    createSlice
} from "@reduxjs/toolkit";
import _ from 'lodash';

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
                    {title:"Java", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Angular", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"React", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"VueJs", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Python", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Php", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Webpack", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Laravel", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                ],
                per_page:3,
                page:1,
                get num_pages(){
                    return Math.ceil(this.skillsList.length/this.per_page)
                }
            },
            projects:{
                languages:["JavaScript","PHP","Java","Python","Web design"],
                activeLanguage:"JavaScript",
                page:1,
                projectsList:[
                    {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0},
                    {title:"Angular App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0},
                    {title:"Laravel App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0},
                    {title:"Python App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0},
                    {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0},
                    {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0},
                    {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0},
                ],
            }
        }
    }
}

const slice = createSlice({
    name: "data",
    initialState: state,
    reducers: {
        updatePage(state,action){
            const page = action.payload;
            const skills = state.pages.homePage.skills;

            if(skills.num_pages<page){
                skills.page = 1;
            } else if(page<=0){
                skills.page = skills.num_pages;
            } else{
                skills.page = action.payload;
            }
        },
        updateLang(state,action){
            const lang = action.payload;
            const projects = state.pages.homePage.projects;
            const languages = projects.languages;

            if(languages.includes(lang)){
                projects.activeLanguage = lang;
            }
        }
    },
});

const authReducer = slice.reducer;

export const {updatePage, updateLang} = slice.actions;

export const store = configureStore({
    reducer: {
        data: authReducer,
    },
    middleware,
});